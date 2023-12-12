// import Table from 'react-bootstrap/Table'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import Editar from './Editar'
// import Excluir from './Excluir'

// function Tabela (){

//     const [btnValue, setBtnValue] = useState("Atualizar")
//     const [dados, setDados] = useState([])

//     useEffect(()=>{
//         axios.get("https://apiaulas.thiagodev502.repl.co/funcionario/").then((resposta) =>{
//             setDados(resposta.data)
//         }).catch((error) =>{
//             console.log(error)
    
//         })
//     },[btnValue])

//     return(
//         <>
//         <button onClick={()=>setBtnValue("Atualizado")}>{btnValue}</button>
//             <Table>
//                 <thead>
//                     <th>
//                         <th>ID</th>
//                         <th>Nome</th>
//                         <th>Cargo</th>
//                         <th>Ação</th>
//                     </th>
//                 </thead>
//                 <tbody>
//                     {dados.map((item, key) => (
//                         <tr key={key}>
//                             <td>{item.ID}</td>
//                             <td>{item.nome}</td>
//                             <td>{item.cargo}</td>
//                             <td className='d-flex gap-3'>
//                                 <Editar id={item.id}/>
//                                 <Excluir id={item.id}/>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </>
//     )

// }

// export default Tabela

import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Editar from './Editar'
import Excluir from './Excluir'

function Tabela (){

    const [dados, setDados] = useState([])

    useEffect(() => {
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/").then((resposta) =>{
            setDados(resposta.data)
        }).catch((error) =>{
            console.log(error)
        });
    }, []);

    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, key) => (
                        <tr key={key}>
                            <td>{item.ID}</td>
                            <td>{item.nome}</td>
                            <td>{item.cargo}</td>
                            <td className='d-flex gap-3'>
                                <Editar id={item.id}/>
                                <Excluir id={item.id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabela
