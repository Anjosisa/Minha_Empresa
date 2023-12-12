import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Header({btn}){

    function sair(){
        localStorage.removeItem('key')
        location.href = "/"
    }

    return (
      <header>
        <NavBar variant='dark'>
            <Container>
                <NavBar.Brand>
                    Minha Empresa
                </NavBar.Brand>
                {btn ? (
                    <div className='d-flex gap-3'>
                        <Button>Adicionar</Button>
                        <Button onClick={sair}>Sair</Button>
                    </div>
                ) : ""}
            </Container>
        </NavBar>
      </header>
    )
  }
  
  export default Header