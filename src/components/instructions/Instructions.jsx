import '../instructions/instructions.scss'

export default function instructions() {
  return (
    <div className='instructions'>
        <h1>Instructions</h1>
        <p>Click to create walls, if you drag the walls you can make more easily</p>
        <p>Drag the <span className='green'>green</span> node to move start positions</p>
        <p>Drag the <span className='red'>red</span> node to move start positions</p>
        <p>To execute an algorithm press the drop down on the right then execute the 
            algorithm of your choice
        </p>
        <a href = "https://github.com/Ty-Irving/pathfinder">Github Link</a>
    </div>
  )
}
