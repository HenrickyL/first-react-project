import './main.css';
//imgs
import logo from '../logo.png';
import face from '../img/face.png'
import insta from '../img/insta.png'
import whats from '../img/whats.png'
//import components
import  ButtonSetting from './buttonsSetting'
import  ButtonSearch from './buttonSearch'
import Modal from './Modal'
//react
import React, { Component } from 'react';



class SocialMedia extends Component{
    constructor(props){
        super(props)

        this.state ={
            imgPath: props.path !== undefined ? props.path: {face},
            webLink: props.webLink,
            altSocial: props.alt,
            conteudo: props.conteudo
        }
    }
    render(){
        return (
            <div className='social' onClick={()=> window.open(this.state.webLink, "_blank")} >
                
                    <img src={this.state.imgPath} alt={this.state.altSocial} draggable="false"/>
                    <p>{this.state.conteudo}</p>
                
            </div>
        ) 
    }
}

const instaLink = 'https://www.instagram.com/henrickyl/?hl=pt-br'


class HeaderBar extends Component{   
  constructor(props){
    super(props)
    
    this.refModal = null
    this.setRefModal = (e)=>{
      this.refModal = e.refModal
    }

    this.state={
      
    }
    this.cmd_clickBtSetting = this.cmd_clickBtSetting.bind(this)
  }

  // 
  cmd_clickBtSetting(){
    this.refModal.classList.remove('hide')
  }
  // 
  render(){
    return(
      <div className="headerBar">
        <div className='logo' onClick={()=> window.open('/','_self')}>
            <h1 id='logo-title'>ML Dindins Gourmet</h1>
            <img  src={logo} alt="Logo" draggable="false"/>
        </div>
        
        <div className='socials' ref={this.ref}>
          <h2>Contatos:</h2>
            <SocialMedia path={insta} conteudo='@ML_Dindins' webLink={instaLink} altSocial='Instragram'/>
            <SocialMedia path={whats} conteudo='(85)9 8935-8575' webLink='https://www.google.com.br/' altSocial='WhatsApp'/>
        </div>
        <div className='settingsBox'>
            <ButtonSetting functionality={this.cmd_clickBtSetting} />
            <ButtonSearch />
        </div>
        <Modal ref={this.setRefModal} />

      </div>
    )
  }
}


export default HeaderBar;
