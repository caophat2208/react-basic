import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>> check delete', job)
        this.props.deleteAJob(job)

    }

    render() {
    
        // let name = this.props.name;
        // let age = this.props.age;

        let { arrJobs } = this.props
        let { showJobs } = this.state
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log('>> check', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={this.handleShowHide}>Show</button>
                    </div>
                :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key ={item.id}>
                                            {item.title} - {item.salary} 
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                            
                            
                        </div>
                        <div>
                        <button onClick={this.handleShowHide}>hide</button>
                        </div>
                    </> 
                }
            </>
        );
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props
//         let a = ''
//         return (
//             <>
//                 <div className="job-list">
//                     {
//                     a = arrJobs.map((item, index) => {
//                         if(item.salary >= 500) {
//                             return (
//                                 <div key ={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                         })
//                     }
//                     {console.log('>> check a', a)}
                    
//                 </div>
//             </>
//         )
// }
export default ChildComponent;