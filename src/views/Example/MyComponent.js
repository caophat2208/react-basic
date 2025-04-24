import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  
    state = {
        arrJobs: [
            { id:'abcJob1', title: 'Developer', salary: '500' },
            { id:'abcJob2', title: 'Tester', salary: '400' },
            { id:'abcJob3', title: 'PM', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        console.log('>> check job from parent: ', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)

        this.setState({
            // arrJobs: currentJobs
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    /*
    JSX => return block
    */

    render() {
        console.log('>> call render', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                 

                <ChildComponent 
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponent;