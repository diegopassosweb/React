import React from 'react'


class Classe extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <h1>Primeiro Componente de Classe</h1>
                <p>Canal: {this.props.canal}</p>
                <p>Curso de React{this.props.curso}</p>
            </div>
       )
    }
}

export default Classe