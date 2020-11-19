import React, { useState } from 'react';
import { Modal, Nav, InputGroup, FormControl, Container, Row, Button, Col } from 'react-bootstrap';
import axios from 'axios'
import { history } from '../history'
import '../containers/App.css'

// import { Formik, Form, Field, ErrorMessage } from 'formik'

function ModaMovimentacao() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = values => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios.post('http://127.0.0.1:5000/login', axiosConfig)
      .then(resp => {
        const { data } = resp
        if (data) {
          localStorage.setItem('access_token', data)
          history.push('/home')
          console.log(resp)
        }
      })
    setShow(false);
  }

  return (
    <>
      <Nav.Link variant="primary" onClick={() => setShow(true)}>
        Movimentação
      </Nav.Link>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Movimentação
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          initialValues={{}}
        >
          <Container>
            <Col>
            </Col>
            <Col>
              <FormControl
                placeholder="CPF/CNPJ"
                aria-label="CPF/CNPJ"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Banco"
                aria-label="Banco"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Agencia"
                aria-label="Agencia"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Conta Corrente"
                aria-label="Conta Corrente"
                aria-describedby="basic-addon2"
              />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text >R$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />
              </InputGroup>


            </Col>
          </Container>

          {/* TO-DO */}
          <Modal.Footer closeButton>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit} >
              Save Changes
          </Button>
          </Modal.Footer>

        </Modal.Body >
      </Modal >
    </>
  );
}


export default ModaMovimentacao
