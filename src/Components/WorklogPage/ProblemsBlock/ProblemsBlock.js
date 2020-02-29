import React from 'react';
import Box from '@material-ui/core/Box';
import './ProblemsBlock.css';
import Zoom from 'react-reveal/Zoom';
import ScrollAnimation from 'react-animate-on-scroll';

export default function ProblemsBlock(props) {
  return (
    <Box className="problems_block">
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <h3 className="problems_block-title">{props.nav.problems}</h3>
      </ScrollAnimation>
      <Zoom>
        <p className="problems_block-about">{props.task.problems[0]}</p>
      </Zoom>
      <Zoom>
        <p className="problems_block-about">{props.task.problems[1]}</p>
      </Zoom>
      <Zoom>
        <p className="problems_block-about">{props.task.problems[2]}</p>
      </Zoom>
      <Zoom>
        <p className="problems_block-about">{props.task.problems[3]}</p>
      </Zoom>
    </Box>
  )
}
