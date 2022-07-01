import React from 'react'
import Accordion from '@mui/material/Accordion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {dijkstras} from '../../algorithms/dijkstras'
import {astar} from '../../algorithms/astar'
import {breadthfirst} from '../../algorithms/breadthfirst'
import { useEffect } from 'react';
import "./legend.scss"

export default function Legend() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/eventListeners.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
      
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className = "algorithms">
        <ThemeProvider theme={darkTheme}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }} variant = {'h4'}>
              A*
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
              The A* algorithm searches for the shortest path between the start and end width
              knowing where both locations of start and end are.
            </Typography>
          <Button variant="contained" sx={{marginLeft: '75px', marginTop: '20px'}} onClick = {astar}>Execute</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}variant = {'h4'}>Dijkstra's</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Dijkstra's algorithm explores every single nearby node while on its search for the goal
              without having the goal impact the search.
            </Typography>
            <Button variant="contained" sx={{marginLeft: '75px', marginTop: '20px'}} onClick = {dijkstras}>Execute</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}variant = {'h4'}>
              BFS
            </Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The breadth first search searches for as evenly as possible checking around until 
            the goal is reached.
            </Typography>
            <Button variant="contained" sx={{marginLeft: '75px', marginTop: '20px'}} onClick = {breadthfirst}>Execute</Button>
          </AccordionDetails>
        </Accordion>
        </ThemeProvider>
        
      </div>
    );
}