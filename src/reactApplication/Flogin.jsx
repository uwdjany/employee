import  React, { Component } from 'react'
import AuthenticationServices from './AuthenticationServices.js'

 
class Flogin extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'djany',
            password:'',
            hasLoginFailed: false ,
            showSuccessMessage: false
        }
//this.handleUsernameChange = this.handleUsernameChange.bind(this)
//this.handlePasswordChange = this.handlePasswordChange.bind(this)
this.handleChange = this.handleChange.bind(this)
this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event){
        console.log(this.state);
        this.setState(
            {
            [event.target.name]
            :event.target.value
        }
        )

    }
  //  handleUsernameChange(event){
    //    console.log(event.target.name);
    //    this.setState(
     //       {
     //       [event.target.name]
     //       :event.target.value
    //    }
    //    )

   // }
   // handlePasswordChange(event){
    //    console.log(event.target.value);
     //   this.setState({password:event.target.value})

  //  }
    loginClicked(){
        if(this.state.username==='djany' && this.state.password==='1234'){ 
            AuthenticationServices.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
        //this.props.history.push("/welcome")
      //  console.log('succefully')
        //this.setState({showSuccessMessage:true})
       // this.setState({hasLoginFailed:false})
        }
        else {
            //console.log('failed')
      this.setState({showSuccessMessage:false})

       this.setState({hasLoginFailed:true})
        }
        //console.log('failed')
        console.log(this.state)
    }
    
    render(){
        return(
            <div>
               
            <h1>Login Page</h1>
             
            <div className="container"> 
             <form>
           
              {/*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
              {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credential</div>}
              { /*<ShowMessageSuccessfully  showSuccessMessage={this.state.showSuccessMessage}/> */}
              {this.state.showSuccessMessage && <div>Login succefully</div>}
             <div><label>UserName:</label>
<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
<div>
<label>Password:</label>
<input type="password" name="password"value={this.state.password} onChange={this.handleChange}/></div>
<button className="btn btn" onClick={this.loginClicked}>Login</button>
</form>
</div></div>

        )
    }
}
//function ShowInvalidCredential(props){
  //  if(props.hasLoginFailed) { 
  //  return <div>Invalid Credential</div>
 //   } 
  //  return null

//}
//function ShowMessageSuccessfully(props){
  //  if(props.showSuccessMessage){
    //    return <div>Login succefully</div>
   // }
   // return null
//}
export default Flogin