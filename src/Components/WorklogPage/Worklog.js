
import React from 'react';
import Developer from "./DeveloperBlock/DeveloperBlock";
import './Worklog.css';
import TasksBlock from './TasksBlock/TasksBlock';

export default class Worklog extends React.Component {
  render() {
    const developers = this.props.developers;
    const tasks = this.props.tasks;
    return (
     <div className="worklog">
       {developers.map((developer) =>
         <Developer developersData={developer} key={developer.name}/>)
       }
       <TasksBlock task={tasks}/>
       </div>
    );
  }
}