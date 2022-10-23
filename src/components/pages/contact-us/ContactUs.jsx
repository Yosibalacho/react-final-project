import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ContactUs.css"

function ContactUs() {
  return (
    <div className='bg-white d-flex justify-content: center;'>
        <br />
    <Form className='form_contact'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Full Name" />
        <Form.Text  className="text-muted">
          We'll never share your Name with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="email" placeholder="Enter Phone Number" />
        <Form.Text  className="text-muted">
          We'll never share your Phone with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text  className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="email" placeholder="Enter Message" />
        <Form.Text  className="text-muted">
          We'll never share your Message with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="dark" type="submit">
        <a className='text-decoration-none text-white' href='mailto:"yosibala@gmail.com"'>Send</a>
        
      </Button>
      <br />
    </Form>
    </div>
    
  );
}

export default ContactUs;