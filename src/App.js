import React,{Component} from 'react';
import Particles from 'react-particles-js';
//import logo from './logo.svg';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import FaceRecognization from './components/FaceRecognization/FaceRecognization';
const app = new Clarifai.App({
 apiKey: '91badc6c9728433b926d279e6c03651d'
});

const particlesOptions={
	particles: {
            			
            			number:{
            			value:100,
            			density:{
            				enable:true,
            				value_area:900
            			}
            			}
            		}
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imgurl:'',
      box:{},
      route:'signin',
      Issign:false
      }
  }

  calculatefacelocation=(data)=>{
    
    const clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
    
    
      console.log(clarifaiface);
       


    
  const image=document.getElementById('inputimage')
 const width=Number(image.width);
 const height=Number(image.height);
 console.log(width,height);
 return{
  leftCol:clarifaiface.left_col*width,
  topRow:clarifaiface.top_row*height,
  rightCol:width-(clarifaiface.right_col*width),
  bottomRow:height-(clarifaiface.bottom_row*height)

 }
  }
  displayfacebox=(box)=>{
    this.setState({box:box})
    console.log(box);
  }

  onInputChange=(event)=>
  {
    this.setState({input:event.target.value});
  }
  onButtonClick=()=>{
    this.setState({imgurl:this.state.input});
    console.log('clicked')
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(response=>this.displayfacebox(this.calculatefacelocation(response))).catch(err=>console.log(err))
  }
  OnRouterChange=(route)=>{
    if(route==='signin')
    {
      this.setState({Issign:false});
    }
    else if(route==='home')
    {
     this.setState({Issign:true});
 
    }
    this.setState({route:route})
  }
  render(){
  return (
  	<div className="tc">
     <Particles className="particles" params={particlesOptions} />
    <Navigation Issign={this.state.Issign} OnRouterChange={this.OnRouterChange}/>
{
  this.state.route==='home'?
  <div>
    <Logo/>
    <Rank/>
     <ImageInputForm  onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/><br/>
     <FaceRecognization box={this.state.box} imgurl={this.state.imgurl}/>
</div>
:(
  this.state.route==='signin' ?
  <Signin OnRouterChange={this.OnRouterChange}/>:
  <Signup OnRouterChange={this.OnRouterChange}/>
  )


    
    
    
    
}
       </div>
       
            
  );
}
}

export default App;
