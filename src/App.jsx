import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const [operador, setOperador] = useState(0);
  const [acomulador, setAcomulador] = useState(0);

  const Num = (e)=>{
    if (count == 0){
      setCount(e.target.value);
    }else{
      setCount(count+ e.target.value);
    }
  }
 
  const Boton_n=(props)=>{

    return(
      <td><input type="button"  class="btn btn-secondary mesmo-tamanho" onClick={Num} value={props.deo} /></td>
    )
  }

  const comoyoquiera=(e)=>{
    if(operador == 0){
    setAcomulador(count)
    setCount(0);
    setOperador(e.target.value)

   }else{
    setOperador(e.target.value)
   }
  }

  const calcular=()=>{

    
    if (operador == "*") {
      setCount(parseFloat(acomulador) * parseFloat(count))
      
    } if (operador == "/"){
      setCount(parseFloat(acomulador) / parseFloat(count))
      
    }if (operador == "+") {
      setCount(parseFloat(acomulador) + parseFloat(count))
      
    }if(operador == "-"){
      setCount(parseFloat(acomulador) - parseFloat(count))
    }

  }



    const borra= ()=>{
      setCount(0);
      setAcomulador(0);
      setOperador(0)
    }
  

  const Boton_a=(props)=>{

    return(
      <td><input type="button"  value={props.dea}  onClick={comoyoquiera}  class="btn btn-info mesmo-tamanho"/></td>

    )
  } 

  const Boton_b=(props)=>{

    return(
      <td><input type="button"  value={props.daad}  onClick={calcular}  class="btn btn-info mesmo-tamanho"/></td>

    )
  } 

  const Boton_c=(props)=>{

    return(

      <td><input type="reset"  value={props.ceo} onClick={borra} class="btn btn-danger mesmo-tamanho"/></td>
      
    )
  }

  const Pantalla=()=>{

    return(

      <td colspan="4"><input type="text" value={count} class="col-xs-12 col-sm-12 col-md-12" /></td>
      
    )
  }


  return (
    <><div class="container">
    <div class="row">
        <div class="col-xs-12" id="titulo">
            <h3 >Calculadora Básica</h3>
        </div>
    </div>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-xs-12 col-sm-6 col-md-3 fundo-mod margem borda">
                
            <div class="justify-content-center centro">
                
                <table class="table table-dark">
                    <tr>
                        
                        <td colspan="4" ><div id="historico" onclick="mostrarHora();"></div></td>
                    </tr>
                    <tr>
                      <Pantalla/>
                        
                        
                    </tr>
                    <tr>
                    <Boton_n deo="7"/>
                    <Boton_n deo="8"/>
                    <Boton_n deo="9"/>
                    <Boton_a dea="/"/>
                    </tr>
                    <tr>
                    <Boton_n deo="4"/>
                    <Boton_n deo="5"/>
                    <Boton_n deo="6"/>
                    <Boton_a dea="*"/>
                        
                    </tr>
                    <tr>
                    <Boton_n deo="1"/>
                    <Boton_n deo="2"/>
                    <Boton_n deo="3"/>
                    <Boton_a dea="-"/>
                        
                    </tr>
                    <tr>
                    <Boton_n deo="0"/>
                    <Boton_b daad="="/>
                    <Boton_c ceo="c"/>
                    <Boton_a dea="+"/>
                    </tr>

            
                    {/* <tr>

                      <button onClick={ () =>{
                        alert("el valor es" + acomulador + "  el operador es = "+ operador)}
                        }>
                          Alert
                      </button>
                    </tr> */}
                </table>
            </div>
            
        </div>
    </div>
</div></>
   
  )
}


export default App

