import React from 'react';
import Developer from "./DeveloperBlock/DeveloperBlock";
import './Worklog.css';
import TasksBlock from './TasksBlock/TasksBlock';

export default class Worklog extends React.Component {
  render() {
    const developers = this.props.developers;
    const tasks = this.props.tasks;
    const navigation = this.props.nav;
    const doneWork = this.props.doneWork;
    return (
     <div className="worklog">
       {developers.map((developer,index) =>
         <Developer
           developersData={developer}
           key={developer.name}
           nav={navigation}
           devDone={doneWork[index]}
         />)
       }
       <TasksBlock task={tasks}/>
       </div>
    );
  }
}
