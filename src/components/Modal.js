import './main.css';
import React, { Component } from 'react';

class Modal extends Component{
    constructor(){
        super()

        this.refModal = null
        this.refBt = null
        this.refContent= null


        this.state={

        }
        this.setRefModal = (e)=>{this.refModal = e}
        this.setRefBt = (e)=>{this.refBt = e}
        this.setRefContent = (e)=>{this.refContent = e}


        this.cmd_modalClick = this.cmd_modalClick.bind(this)
        this.cmd_btClick = this.cmd_btClick.bind(this)
        this.cmd_closeClick = this.cmd_closeClick.bind(this)


    }
    // functions
    cmd_modalClick(e){
        if(e.target === this.refModal)
            this.refModal.classList.add('hide')


        
    }
    cmd_btClick(){
        this.refModal.classList.add('hide')
    }
    cmd_closeClick(){
        this.refModal.classList.add('hide')
    }
    
    //
    render(){
        let modeldefault = (
            <div className="modal hide" ref={this.setRefModal} onClick={this.cmd_modalClick}>
                <div class="modal-content" ref={this.setRefContent}>
                    <span class="close" onClick={this.cmd_closeClick} >&times;</span>
                    <form method='POST' >
                        <input type="text" placeholder='Login' alt='Login' required />
                        <input type="password" placeholder='Senha' alt='Senha' required />
                        <button ref={this.setRefBt} alt='Botão login'>Entrar</button>
                        {/* <input type="submit"  value="Entrar"  />   */}
                    </form>
                </div>
               
            </div>
          )
        let modelAdd = (
            <div className="modal hide" ref={this.setRefModal} onClick={this.cmd_modalClick}>
                <div class="add-Item modal-content" ref={this.setRefContent}>
                    <span class="close" onClick={this.cmd_closeClick} >&times;</span>
                    
                    <h2>Adicionar Dindin</h2>
                    <form>
                        <div className='field'>
                            <input type="text" placeholder='Nome' alt='Nome do item' required />
                            <input type='number' min='0' alt='Quantidade de itens' placeholder='Quantidade' required />
                        </div>
                        <div className='field field2'>
                            <label for='selecao-arquivo'>Selecionar um arquivo</label>
                            <input id='selecao-arquivo' name="img" alt='Seleção de imagem' accept="image/*" type='file'/>
                        </div>
                        <div className='field'>
                            <input type="submit" alt='botão adicionar item' value="Adicionar" />
                        </div>
                    </form>

                </div>
               
            </div>
          )


      
      if(this.props.type === 'add-Item'){
        return modelAdd
      }else{
          return modeldefault
      }

    }
  }

export default Modal;