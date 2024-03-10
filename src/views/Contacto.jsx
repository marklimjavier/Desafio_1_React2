import Form from 'react-bootstrap/Form'

const Contacto = () => {
  return (
    <section className='contacto'>
      <h1>¿Tienes un pedido especial? <br /> Con gusto te ayudamos 😊</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Número de Contacto</Form.Label>
          <Form.Control type="tel" placeholder="+56 9 9999 9999" /> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Danos una descripcion de tu pedido.</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
      </Form>
      <button className='bg-danger'>Enviar</button>
    </section>

  )
}

export default Contacto