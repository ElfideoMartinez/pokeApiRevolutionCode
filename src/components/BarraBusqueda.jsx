import React, { useState } from 'react'

function BarraBusqueda({setBusqueda, setCargando}) {
  const [input, setInput]=useState('');

  const handleChange=(e)=>{
    setInput(e.target.value);
  }
  const handleClick=(e)=>{
    e.preventDefault();
    if(input.length>0){
      setCargando(true);
      setBusqueda(input.trim().toLocaleLowerCase())
    }
  }

  return (
    <div style={{display: 'flex', marginRight:'100px'}}>
      <img style={{height:40, width:200}} 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Dinosaur"></img>
        <input type='text' placeholder='Busca un Pokemon Aqui'
          onChange={handleChange}
        ></input>
        <button className='botonBuscar'
          type='submit'
          onClick={handleClick}
        >
          Buscar
        </button>
    </div>
  )
}

export default BarraBusqueda