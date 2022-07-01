import "./header.scss"

import {useEffect} from 'react';
import dijkstras from "../../algorithms/dijkstras.js";
import astar from "../../algorithms/astar";
import breadthfirst from "../../algorithms/breadthfirst"
export default function Header() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/eventListeners.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className = "top-page">
        <div className = "content">
            <a href = "ty-irving.com">Pathfinder</a>
            <button onClick = {dijkstras}>Execute</button>
            <button onClick = {astar}> A*</button>
            <button onClick = {breadthfirst}> BFS </button>
        </div>
        
    </div>
  )
}
