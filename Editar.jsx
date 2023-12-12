import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"
import axios from "axios"
import Formulario from "./Formulario"

function Editar({id}){

    const [show, setShow] = useState(false)
    const [funcionario, setfuncionario] = useState(false)

    function editarDados(){
        axios.put("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(() => location.reload())
        .catch(() =>{
            console.log("Erro ao editar.")
        })
    }

    useEffect(()=>{
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then((resposta)=>{
            setfuncionario(resposta.data)

        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    return(
        <div>
            <Modal>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario id={funcionario} setShow={setShow}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar