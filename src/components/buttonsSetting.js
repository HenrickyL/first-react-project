import './main.css';
import React, { Component } from 'react';


class ButtonSetting extends Component{
    constructor(props){
        super(props)
        this.state={
            activeted: false,
            funcionality: props.functionality,
        }
        //this.cmd_click = this.cmd_click.bind(this)
    }
   
    render(){
        return (
            <button onClick={this.state.funcionality} alt='Configurações' className='btSetting'>

            </button>
        )
    }

}


export default ButtonSetting
