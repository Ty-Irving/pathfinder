let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", event => {
  console.log("dragging");
});

document.addEventListener("dragstart", event => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", event => {
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

/* events fired on the drop targets */
document.addEventListener("dragover", event => {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", event => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('start')) {
    event.target.classList.add("dragover-start");
  }
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('end')) {
    event.target.classList.add("dragover-end");
  }
});

document.addEventListener("dragleave", event => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('start')) {
    event.target.classList.remove("dragover-start");
  }
  if (event.target.classList.contains("unvisited") && dragged.classList.contains('end')) {
    event.target.classList.remove("dragover-end");
  }
});

document.addEventListener("drop", event => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target

  if (event.target.classList.contains("unvisited") && dragged.classList.contains('start')) {
    event.target.classList.add('start');
    event.target.setAttribute('draggable', 'true');
    event.target.classList.remove("dragover-start");
    document.getElementsByClassName('dragging')[0].removeAttribute('draggable')
    document.getElementsByClassName('dragging')[0].classList.remove('dragging');
  }

  if (event.target.classList.contains("unvisited") && dragged.classList.contains('end')) {
    event.target.classList.add('end');
    event.target.setAttribute('draggable', 'true');
    event.target.classList.remove("dragover-end");
    document.getElementsByClassName('dragging')[0].removeAttribute('draggable')
    document.getElementsByClassName('dragging')[0].classList.remove('dragging');
  }
});