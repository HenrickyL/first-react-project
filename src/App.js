import './App.css';
import React, { Component } from 'react';
import HeaderBar from './components/headerBar';
import MainBar from './components/MainBar';
import  Modal from './components/Modal'

window.addEventListener('load',()=>{
  let socials = document.querySelector('.socials')
  let scrollbar=document.querySelector('.mainBar')
  window.setInterval(()=>{
      if(scrollbar.scrollTop>60 && document.body.clientWidth < 500){
        socials.classList.add('hide')
      }else
        socials.classList.remove('hide')

    },1000)
})

class App extends Component{
  constructor(){
    super()
    this.refHead = null
    this.setRefHead = (e)=> this.refHead=e
    this.refMain = null
    this.setRefMain = (e)=> this.refMain=e
    
  }
  render(){
    return(
      <div className="App">
        <HeaderBar ref={this.setRefHead} />
        <MainBar ref={this.setRefMain}  editable={true}/>

      </div>
    )
  }
}


export default App;
