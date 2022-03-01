import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx' 
import withParams from './WithParams.jsx'
//import AuthenticationServices from './AuthenticationServices.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import './footer.css';
import Flogin from './Flogin.jsx'
import ListComponent from './ListComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomePage from './WelcomePage.jsx'
import LogoutComponent from './LogoutComponent.jsx'


class LoginApp extends Component{
    render(){
        const FloginWithNavigation = withNavigation(Flogin);
        const WelcomePageWithParams =withParams(WelcomePage);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return(

            <div className="LoginApp">
                <Router>
                <HeaderComponentWithNavigation/>
                
                <Routes>  
                    <> 
                    
                           <Route path="/"  element component={<FloginWithNavigation/>}/>
                            <Route path="/login" element={<FloginWithNavigation />}/> 


                            <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomePageWithParams /></AuthenticatedRoute>} />

                          <Route path="/list" element={<AuthenticatedRoute><ListComponent /></AuthenticatedRoute>} />


                          <Route path="/logout" element={<AuthenticatedRoute> <LogoutComponent /></AuthenticatedRoute>} />


                           <Route path="*"element={<ErrorComponent/>}/>
                           
                    </>
                </Routes>
                <FooterComponent/>
                </Router>

{/*<Flogin/>*/}
{/*<WelcomePage/>*/}
            </div>
        )
    }
}




 
export default LoginApp