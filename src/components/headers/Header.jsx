import "./header.scss"
import {dijkstras} from './dijkstras'

export default function Header() {
  return (
    <div className = "top-page">
        <div className = "content">
            <a href = "ty-irving.com">Pathfinder</a>
            <button onClick = {dijkstras}>Execute</button>
        </div>
        
    </div>
  )
}
