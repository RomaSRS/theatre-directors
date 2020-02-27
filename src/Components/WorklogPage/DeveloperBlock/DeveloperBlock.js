import React from 'react';
import FeatureBlock from "./FeatureBlock/FeatureBlock";
import TimeBlock from "./TimeBlock/TimeBlock";
import Grid from '@material-ui/core/Grid';
import './DeveloperBlock.css';


export default function Developer(props) {
  const developer = props.developersData;
  const navigation = props.nav;
  return (
    <div className="developer_block">
      <div
        className="developer_block-image_name"
        style={{ background:`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${developer.image})`}}
        key={developer.id}
      >
        <h2 className="developer_block-name">
          {developer.name}
        </h2>
      </div>
      <Grid
        container
        className="developer_block-time_feature time_feature_block"
      >
        <Grid item className="time_block-title" xs={6}>{navigation.time}</Grid>
        <Grid item className="feature_block-title" xs={6}>{navigation.feature}</Grid>
        <TimeBlock time={'2h'} unique={'first'}/>
        <FeatureBlock feature={'Basic html and css files'}/>
        <TimeBlock time={'2h'} unique={'second'}/>
        <FeatureBlock feature={'Design'}/>
        <TimeBlock time={'2h'} unique={'third'}/>
        <FeatureBlock feature={'YouTube functionality'}/>
        <TimeBlock time={'2h'} unique={'fourth'}/>
        <FeatureBlock feature={'Header implementation'}/>
        <TimeBlock time={'2h'} unique={'fifth'}/>
        <FeatureBlock feature={'Config Files'}/>
        <TimeBlock time={'2h'} unique={'sixth'}/>
        <FeatureBlock feature={'Add Fonts'}/>
      </Grid>
    </div>
  );
}
