import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './Styleguide.css';
import ColorsBlock from "./ColorsBlock/ColorsBlock";
import ButtonsLinksBlock from "./ButtonsLinksBlock/ButtonsLinksBlock";

export default class Styleguide extends React.Component {
  render() {
    const colorsData = this.props.colorsData;
    const titles = this.props.navTitle;
    return (
     <Box className="styleguide">
       <ColorsBlock color={colorsData} title={titles}/>
       <ButtonsLinksBlock title={titles}/>
       <Box className="text_styles_block">
         <h3 className="text_styles_block-title">
           {titles.textStylesTitle}
         </h3>
         <Grid
           container
           className="text_styles_block-font_data font_data_block"
         >
           <Grid item className="font_data_block-h1" xs={3}>
             H1
           </Grid>
           <Grid item className="font_data_block-h1_info text_info" xs={9}>
             Montserrat Black // Size: 100 // Line height: 90
           </Grid>
           <Grid item className="font_data_block-h2" xs={3}>
             H2
           </Grid>
           <Grid item className="font_data_block-h2_info text_info" xs={9}>
             Montserrat Black // Size: 72 // Line height: 74 // Letter spacing: 0.5%
           </Grid>
           <Grid item className="font_data_block-h3" xs={3}>
             H3
           </Grid>
           <Grid item className="font_data_block-h3_info text_info" xs={9}>
             Montserrat Black // Size: 40 // Line height: 50 // Letter spacing: 0.5%
           </Grid>
           <Grid item className="font_data_block-body" xs={3}>
             Body text
           </Grid>
           <Grid item className="font_data_block-body_info text_info" xs={9}>
             IBM Plex Sans // Size: 24 // Line height: Auto
           </Grid>
         </Grid>
       </Box>
     </Box>
    );
  }
}
