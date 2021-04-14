import './main.css';
import React, { Component } from 'react';


class Dindin extends Component{
    constructor(props){
        super(props)
        this.state={
           editable: this.props.editable,
           data:{
               qtd: 0
           }
        }
        this.cm_addItem = this.cm_addItem.bind(this)
        this.cm_removeItem = this.cm_removeItem.bind(this)

    }
    // Functions
    cm_addItem(){
        let qtd = this.state.data.qtd+1
        this.setState({data:{qtd }})
    }
    cm_removeItem(){
        let qtd = this.state.data.qtd-1

        if(this.state.data.qtd-1>=0)
            this.setState({data:{qtd }})
            

    }

    //    
    render(){

        let defaultItem = (
            <div  className='dindin'>
                <img src={this.props.path} alt={this.props.nome} draggable="false"/>
                <p>{this.props.nome}</p>
                <span className='item-qtd'>0</span>
            </div>
        )
        let editableItem = (
            <div  className='dindin'>
                <span className='close'>X</span>
        
                <img src={this.props.path} alt={this.props.nome} draggable="false"/>
                <p>{this.props.nome}</p>
                
                <div className='item-setting'>
                    <div className='item-bts'>
                        <button onClick={this.cm_removeItem}>-</button>
                        <button onClick={this.cm_addItem}>+</button>
                    </div>
                    <span className='item-qtd'>{this.state.data.qtd}</span>
                </div>
            </div>
        )
        return this.state.editable ?  editableItem : defaultItem
    }

}


export default Dindin
