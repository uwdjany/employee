import React,{Component} from "react";
import './App.css';


import LoginApp from "./reactApplication/LoginApp";
import './bootstrap.css';

 class App extends Component{
   render(){
     return(
<div className="App">

<LoginApp/>

</div>
     );
   }
 }


export default App;