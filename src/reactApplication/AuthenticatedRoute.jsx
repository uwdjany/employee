import  React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import AuthenticationServices from './AuthenticationServices.js'

class AuthenticatedRoute extends Component{
render(){
    if(AuthenticationServices.isUserLoggedIn()){
        return {...this.props.children}
    }
    else{
        return <Navigate to="/login" /> 
    }
    
}
}



export default AuthenticatedRoute