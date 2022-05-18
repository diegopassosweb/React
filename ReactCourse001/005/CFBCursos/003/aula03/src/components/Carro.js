import React from 'react'


class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld=this.ligarDesligar.bind(this)
    }
    ligarDesligar(){
        //this.state.ligado=true muda so que nao renderiza na tela
        this.setState({ligado:!this.state.ligado})
        // this.setState(
        //     (state)=>(
        //         {ligado:!state.ligado}
        //     )
        // )
    }
        // this.setState(
        //     function(state){
        //         return{
        //             ligado:!state.ligado
        //         }
        //     }
        // )




    acelerar(){      
        this.setState(
            (state,props)=>(
                {velAtual:state.velAtual + props.fator}
            )
        )
     }
    // acelerar(){          este pode dar problema em algum caso
    //     this.setState(
    //         {velAtual:this.state.velAtual + this.props.fator}
    //     )
    //  }

     componentDidMount(){
         console.log('O carro foi criado!')
     }

     componentDidUpdate(){
        console.log('O carro foi atualizado!')
     }
     componentWillUnmount(){
        console.log('O carro foi removido!')
     }

    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Nao'}</p>
                <p>Vel.Atual: {this.state.velAtual}</p>
                {/* <button onClick={()=>this.ligarDesligar()}> */}
                <button onClick={this.ld}>
                {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}
                </button>
                <button onClick={()=>this.acelerar()}>
                    Acelerar
                </button>
            </div>
       )
    }
}

export default Carro