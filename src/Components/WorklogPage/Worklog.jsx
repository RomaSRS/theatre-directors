
import React from 'react';
import Developer from "./DeveloperBlock/DeveloperBlock";

export default class Worklog extends React.Component {
  render() {
    const developers = this.props.developers;
    return (
     <div className="worklog">
       {developers.map((developer) =>
         <Developer developersData={developer} key={developer.name}/>)
       }
     </div>
    );
  }
}