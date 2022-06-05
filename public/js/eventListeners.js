let dragged;

/* events fired on the draggable target */
document.getElementById('pathfinder-table').addEventListener("drag", event => {
  console.log("dragging");
});

document.getElementById('pathfinder-table').addEventListener("dragstart", event => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  if(dragged.classList.contains('wall') != true)
  {
    event.target.classList.add("dragging");
  }  

});

document.getElementById('pathfinder-table').addEventListener("dragend", event => {
  // reset the transparency
  if(dragged.classList.contains('start'))
  {
    event.target.classList.remove("start");
  }
  if(dragged.classList.contains('end'))
  {
    event.target.classList.remove("end");
  }
  
  console.log(event)
});


document.getElementById('pathfinder-table').addEventListener('click', event => 
{
  if(event.target.classList.contains('unvisited') && event.target.classList.contains('wall') != true && (event.target.classList.contains('start') != true || event.target.classList.contains('end') != true))
  {
    event.target.classList.add('wall');
  }
  else if(event.target.classList.contains('wall'))
  {
    event.target.classList.remove('wall');
  }
})

/* events fired on the drop targets */
document.getElementById('pathfinder-table').addEventListener("dragover", event => {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.getElementById('pathfinder-table').addEventListener("dragenter", event => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('start')) {
    event.target.classList.add("dragover-start");
  }
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('end')) {
    event.target.classList.add("dragover-end");
  }

  if(event.target.classList.contains('unvisited') && dragged.classList.contains('wall'))
  {
    event.target.classList.add('wall');
  }
});

document.getElementById('pathfinder-table').addEventListener("dragleave", event => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('start')) {
    event.target.classList.remove("dragover-start");
  }
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('end')) {
    event.target.classList.remove("dragover-end");
  }
});

document.getElementById('pathfinder-table').addEventListener("drop", event => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if(document.getElementsByClassName('dragging').length > 0)
  {
    document.getElementsByClassName('dragging')[0].classList.remove('dragging');
  }

  if (event.target.classList.contains("unvisited") && dragged.classList.contains('start')) {
    event.target.classList.add('start');
    event.target.classList.remove("dragover-start");

  }

  if (event.target.classList.contains("unvisited") && dragged.classList.contains('end')) {
    event.target.classList.add('end');
    event.target.classList.remove("dragover-end");
  }

});