import './main.css';
import React, { Component } from 'react';
import Dindin from './Dindin'
import data from './Data/data'
import foto from './Data/img/kk.jpeg'
import Modal from './Modal'


// console.log(data)
class MainBar extends Component{
  constructor(props){
    super(props)

    this.refBtAdd = null
    this.refModal = null

    this.state={
      editable: props.editable,
      firstClick: false,
    }

    this.setRefBtAdd = (e)=>{this.refBtAdd = e}
    this.setRefModal = (e)=>{this.refModal = e.refModal
    this.refModal.classList.add('hide')}
    // ///////

    this.cmd_btAdd = this.cmd_btAdd.bind(this)
  }                                                                                                                                                             
  // functions
  cmd_btAdd(){
      
    this.refModal.classList.remove('hide')

  }
  // 
  render(){
    return(

      <div className="mainBar">

          <div className='items'>
            <Dindin nome='Henrikcy' editable={this.state.editable}  path={foto} />
            {
              data.map(d=>(
              
                <Dindin nome={d.nome} editable={this.state.editable} path={'./Data/img'+d.img} />
              ))
            }
          </div>
          {
            this.state.editable ? <div>
              <span className='bt-addItem' ref={this.setRefBtAdd} onClick={this.cmd_btAdd}>+</span>
              <Modal ref={this.setRefModal} type={'add-Item'} />
              {/* {
                this.state.firstClick?

              } */}
            </div>: null
          }
      </div>
    )
  }
}


export default MainBar;
