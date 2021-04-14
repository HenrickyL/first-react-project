import './main.css';
import React, { Component} from 'react';


class ButtonSearch extends Component{
    
    constructor(props){
        super(props)

    
        this.inputSearch = null//React.createRef();
        this.btSearch = null//React.createRef();

        
        this.state={
            funcionality: props.funcionality,
        }
        this.cmd_click = this.cmd_click.bind(this)

        ///////////////////
        this.setInputSearchRef = element => {
            this.inputSearch = element;
            window.addEventListener('load',()=>{
                element.addEventListener('blur',()=>{
                    element.classList.add('hide')
                })
            
            });
        }
        this.setInputBtRef = element => {
            this.btSearch = element;

            //setTimeout(this.addEventBt,1000)

            };  

    }

    
   

    cmd_click(){
        this.inputSearch.classList.remove('hide')
        this.inputSearch.focus()
    }
    
    

    render(){
        let onlyButton = (
            <div className='searchBox'>
                <input className='inpSearch hide' alt='Pesquisar' ref={this.setInputSearchRef} type="text" placeholder='Pesquisar'/>
                <button onClick={this.cmd_click} alt='Botão de pesquisa' ref={this.setInputBtRef} className='btSearch'></button>

            </div>
        )

        
        return onlyButton//this.state.activeted ? inSearch : onlyButton; 
        
    }

}

export default ButtonSearch
