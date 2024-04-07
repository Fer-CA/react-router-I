import { Form, Button }  from 'react-bootstrap';

const Formulario = () => {
  

    return (
      <>
      <Form className='m-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="correo@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button className='m-5 d-flex' variant="danger">Enviar</Button>
      </>
    )
  }
  
  export default Formulario