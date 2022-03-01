import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import AuthenticationServices from './AuthenticationServices.js'
import HelloWorldServices from '../api/loginApp/HelloWorldServices.js'


class WelcomePage extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.state={
            welcomeMessage :''
        }
        
       this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
    }
    render(){
        return(
            <>
            <h1>Welcome!</h1>
            <div className="container">
 Welcome  {this.props.params.name}.
  you can see the list <Link to="/list">here</Link>.

            </div>
            <div className="container">
 <button onClick={this.retrieveWelcomeMessage} className="btn btn"  >GetWelcomeMessage</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
                
                </div>
            </>
        )
    
    
    }
    retrieveWelcomeMessage(){
        HelloWorldServices.executeHelloWorldServices()
        .then( response => this.handleSuccessfulResponse(response) )
        //.catch( error => this.handleError(error))

        //HelloWorldServices.executeHelloWorldPathVariableServices(this.props.params.name)
       // .then( response => this.handleSuccessfulResponse(response) )
        //.catch( error => this.handleError(error))

    }
    handleSuccessfulResponse(response){
       // console.log(response)
       this.setState({welcomeMessage: response.data})

    }
}


export default WelcomePage