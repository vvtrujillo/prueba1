import logo from './logo.svg';
import './App.css';
import React from 'react';
import Primero from './Componentes/Primero';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      nombre:"",
      apellido:""
    }
  }

  clickMe = (e) =>{
    alert('este evento corresponde a un click pero como función.');
  }

  cambiarEstado = (e) =>{
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  formSubmit = (e) =>{
    e.preventDefault();
  }

  render(){
    return(      
        <div className="App">

          <h1>Primera tarea React</h1>
          <form onSubmit={this.formSubmit}>
            <label name='lblNombre'>Nombre: </label>
            <input type='text' name='nombre' value={this.state.nombre} onChange={this.cambiarEstado}></input><br/>
            <label name='lblApellido'>Apellido: </label>
            <input type='text' name='apellido' value={this.state.apellido} onChange={this.cambiarEstado}></input><br/>
            <button type='submit'>Enviar</button>
            <button type='submit'>Limpiar</button>
          </form>
          {/*<button type='button' onClick={this.clickMe}>Click Me!!!</button>*/}
          
          <Primero titulo={'Este es un props'} objeto={{nombre: 'OBJ', tipo:'Cualquiera'}} nombre={this.state.nombre} apellido={this.state.apellido}>
            <ul>
              <li>Este es un Hijo</li>
              <li>Este es otro Hijo</li>
            </ul>
          </Primero>
        </div>      
    );
  }
}

export default App;
