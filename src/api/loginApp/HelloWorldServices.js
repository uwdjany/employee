import axios from 'axios'

class HelloWorldServises {
executeHelloWorldServices(){
   // console.log('execute service')
   return axios.get('http://localhost:8001/hello-world');
}

//executeHelloWorldPathVariableServices(name){
   // console.log('execute service')
 //return axios.get(`http://localhost:8001/hello-world/path-variable/${name}`);
//}
}




export default new HelloWorldServises()