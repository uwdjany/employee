import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import AuthenticationServices from './AuthenticationServices.js'









class HeaderComponent extends Component{

    render(){
        const isUserLoggedIn=AuthenticationServices.isUserLoggedIn();
       //console.log(isUserLoggedIn);


        
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https:/wwww.Fullstackdev.com" className="navbar-brand">Fullstackdev</a></div>
                    <ul className="navbar-nav">
                         {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/djany">Home</Link></li>}
                          {isUserLoggedIn && <li><Link className="nav-link" to="/list">List</Link></li>}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                         {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                         { isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationServices.logout}>Logout</Link></li>}

                    </ul>




                </nav>

            </header>
        )
    }
}


export default HeaderComponent