
import React from 'react';
import './Worklog.css';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   nav_elem: {
//     fontFamily: 'IBM Plex Sans',
//     fontStyle: 'normal',
//     fontWeight: '300',
//     fontSize: '1.5rem',
//     textTransform: 'none',
//     lineHeight: '1',
//     justifySelf: 'start',
//   },
//   nav_elem_even: {
//     justifySelf: 'end',
//   },
//   nav_elem_lang: {
//     width: '85%',
//     display: 'flex',
//     justifyContent: 'space-between',
//   }
// }));
export default class Worklog extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const developers = this.props;
  // }

  // const classes = useStyles();
  render() {
    const developer = this.props.developers;
    return (
     <div className="worklog">
       <div className="developer_block">
         <div className="developer_block-image_name" style={{ backgroundImage: `url(${developer[4].image})`}}>
           <h2 className="developer_block-name">
             {developer[4].name}
           </h2>
         </div>
         <Grid
           container
           className="developer_block-time_feature time_feature_block"
         >
           <Grid item className="time_block-title" xs={6}> Time spent </Grid>
           <Grid item className="feature_block-title" xs={6}> Feature </Grid>
           <Grid item className="time_block-time" xs={6}> 2h </Grid>
           <Grid item className="feature_block-feature" xs={6}> Basic html and css files </Grid>
           <Grid item className="time_block-time" xs={6}> 2h </Grid>
           <Grid item className="feature_block-feature" xs={6}> Basic html and css files </Grid>
           <Grid item className="time_block-time" xs={6}> 2h </Grid>
           <Grid item className="feature_block-feature" xs={6}> Basic html and css files </Grid>
           <Grid item className="time_block-time" xs={6}> 2h </Grid>
           <Grid item className="feature_block-feature" xs={6}> Basic html and css files </Grid>
           <Grid item className="time_block-time" xs={6}> 2h </Grid>
           <Grid item className="feature_block-feature" xs={6}> Basic html and css files </Grid>
           <Grid item className="time_block-time" xs={6}> 2h </Grid>
           <Grid item className="feature_block-feature" xs={6}> Basic html and css files </Grid>
         </Grid>
       </div>
     </div>
    );
  }
}