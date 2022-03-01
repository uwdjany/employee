import  React, { Component } from 'react'
import AuthenticationServices from './AuthenticationServices.js' 
 
 
 
 
 
 
 class ListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
            lists:
            [

            

             {id : 1,description:'learning React' ,done:false,targetDate:new Date()},
             {id : 2,description:'I CAN' ,done:false,targetDate:new Date()},
             {id : 3,description:'i WILL GET IT' ,done:false,targetDate:new Date()}
            ]

        }
    }
    render(){
        return (
        
        <div>
            <h1>List Component</h1>

        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>targetDate</th>
                        <th>isCompleted</th>
                    </tr>
                    </thead>

                <tbody>
                    {
             this.state.lists.map(
                 list =>
                 <tr key={list.id}>
                 <td>{list.id}</td>
                <td>{list.description}</td>
                <td>{list.done.toString()}</td>
                <td>{list.targetDate.toString()}</td>
                </tr>
             )
                    }
                    </tbody>
            </table></div></div>
        
    )
    }
}

export default ListComponent