import React, { Component } from 'react';

class ClassComponentExample extends Component {
    componentDidMount(){  //se dispara solo que el componente fue cargado//
        console.log("ya fue montado el componente")
    }
    render() {
        console.log('Ciclo de vida--> render')
        return (
            <div>
                <h1>hola</h1>
            </div>
        );
    }
 
}

export default ClassComponentExample;