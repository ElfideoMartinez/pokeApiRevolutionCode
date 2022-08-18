import { useEffect, useState } from 'react'
import './App.css'

import callApi from './functions/callApi';

import BarraBusqueda from './components/BarraBusqueda'
import TablaResultados from './components/TablaResultados'

function App() {
  const [busqueda, setBusqueda]=useState('pikachu');
  const [datos, setDatos]=useState(null);
  const [cargando, setCargando]=useState(false);
  const [isAcendente, setIsAcendente]=useState(true);

  useEffect(()=>{
      callApi(busqueda)
        .then(response=>{setDatos(response);setCargando(false)})
  },[busqueda]);

  const handleClick=()=>{
    if(isAcendente){
      setDatos({
        sprites:datos.sprites,
        stats:datos.stats.sort((a, b)=> {
          if (a.base_stat > b.base_stat) {
            return 1;
          }
          if (a.base_stat < b.base_stat) {
            return -1;
          }
          return 0;
        })
      });
    }else{
      setDatos({
        sprites:datos.sprites,
        stats:datos.stats.sort((a, b)=> {
          if (a.base_stat > b.base_stat) {
            return -1;
          }
          if (a.base_stat < b.base_stat) {
            return 1;
          }
          return 0;
        })
      });
    }
    setIsAcendente(!isAcendente);
  }

  return (
    <div className='mainContainer'>
      <BarraBusqueda setBusqueda={setBusqueda} setCargando={setCargando}/>
      {cargando?(
        <div className="loader">Loading...</div>
      ):
      datos==null? <h1 style={{fontSize:20, color:'red'}}>Not Found</h1>
        :(
          <>
            <TablaResultados imagen={datos.sprites.front_default} stats={datos.stats}/>
            <button className="botonOrdenar"
              onClick={handleClick}
            >Valor</button>
          </>
        )
      }
    </div>
  )
}

export default App
