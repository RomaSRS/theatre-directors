import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './TextStylesBlock.css'

function FontView(props) {
  return (
    <Grid item className={`font_data_block-${props.fontClass}`} xs={3}>
      {props.fontName}
    </Grid>
  )
}

export default function TextStylesBlock(props) {
  return (
    <Box className="text_styles_block">
      <h3 className="text_styles_block-title">
        {props.titles.textStylesTitle}
      </h3>
      <Grid
        container
        className="text_styles_block-font_data font_data_block"
      >
        <FontView fontClass="h1" fontName="H1" />
        <Grid item className="font_data_block-h1_info text_info" xs={9}>
          Montserrat Black // {props.titles.size}: 100 // {props.titles.lineHeight}: 90
        </Grid>
        <FontView fontClass="h2" fontName="H2" />
        <Grid item className="font_data_block-h2_info text_info" xs={9}>
          Montserrat Black // {props.titles.size}: 72 // {props.titles.lineHeight}: 74 // {props.titles.letterSpacing}: 0.5%
        </Grid>
        <FontView fontClass="h3" fontName="H3" />
        <Grid item className="font_data_block-h3_info text_info" xs={9}>
          Montserrat Black // {props.titles.size}: 40 // {props.titles.lineHeight}: 50 // {props.titles.letterSpacing}: 0.5%
        </Grid>
        <FontView fontClass="body" fontName="Body text" />
        <Grid item className="font_data_block-body_info text_info" xs={9}>
          IBM Plex Sans // {props.titles.size}: 24 // {props.titles.lineHeight}: Auto
        </Grid>
      </Grid>
    </Box>
  )
}
