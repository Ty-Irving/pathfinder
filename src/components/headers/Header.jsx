import "./header.scss"
import {search} from './dijkstras'

export default function header() {
  return (
    <div className = "top-page">
        <div className = "content">
            <a href = "ty-irving.com">Pathfinder</a>
            <button onClick = {search}>Execute</button>
        </div>
        
    </div>
  )
}
