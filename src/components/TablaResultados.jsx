import React from 'react'

function TablaResultados({imagen, stats}) {
  return (
    <>
    {stats!=null?(
        <table classname='tablaResultados'>
            <caption><img style={{width: '15%', height: '15%'}} src={imagen}></img></caption>
            <tbody>
                <tr>
                    <th>Stat Name:</th>
                    <th>Base Stat</th>
                </tr>
                    {stats.map((element, index) =>{
                        return (
                            // <td key={element+index}>{element.stat.name}</td>
                            <tr key={'Unique'+index}>
                                <td>{element.stat.name}</td>
                                <td>{element.base_stat}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>):null}
    </>
  )
}

export default TablaResultados