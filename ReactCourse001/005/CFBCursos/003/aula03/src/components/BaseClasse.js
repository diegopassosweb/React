
import React from "react";

export default class BaseClasse extends React.Component{
    constructor(props){
        //Para permitir o uso de props
        super(props)

        //state
        this.state={
            canal: 'CFB Cursos',
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status=this.props.status
        // bindagem
        this.ad=this.ativarDesativar.bind(this)
        //instruçoes do constructor
    }

    //Função para manipular state
    ativarDesativar(){
        this.setState(
            state=>({
                ativo:!state.ativo
            })
        )
    }
    componentDidMount(){
        console.log('O componente foi criado!')
    }
    componentDidUpdate(){
        console.log('O componente foi atualizado!')
    }
    componentDidUnMount(){
        console.log('O componente foi removido!')
    }

    render(){
        return(
            <>
                <h1>Compoenente de Classe</h1>
                {/* chamada da funcão com bind */}
                <button onClick={this.ad}>Ativar Desativar</button>
                <button onClick={()=>this.ativarDesativar}>Ativar Desativar</button>
            </>
        )
    }
}

