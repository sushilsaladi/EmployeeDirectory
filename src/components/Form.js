import { Form,Button,Row,Col } from "react-bootstrap";
import { forwardRef } from "react";


const MyForm = forwardRef(({handleChange,handleSubmit, inputRef}) => {
    // Controlled Component : Controlled by Parent. 
    return (
        <Form ref={inputRef} className="border border-dark rounded border-2 solid">
            <Form.Group as={Row} className="mb-3 mt-3">
                <Form.Label column sm="3">
                First Name
                </Form.Label>
                <Col sm="7">
                    <Form.Control type="text" className="form-control" name="firstName" onChange={handleChange}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                Last Name
                </Form.Label>
                <Col sm="7">
                    <Form.Control type="text" className="form-control" name="lastName" onChange={handleChange}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                Telephone
                </Form.Label>
                <Col sm="7">
                    <Form.Control type="text" className="form-control" name="telephone" onChange={handleChange} aria-labelledby="telephoneHelpBlock"></Form.Control>
                    <Form.Text id="telephoneHelpBlock" muted>
                        Your Phone must be 8-20 characters long only containing numbers.
                    </Form.Text>
                </Col>
                
            </Form.Group>
            <Button variant="primary" size="lg" onClick={handleSubmit} className="mb-3">Submit</Button>
        </Form>
    )
});

export default MyForm;