import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            {/* SubHeader Component */}
            <SubHeader current="Contact Us" />

            {/* First Row */}
            <Row className="row-content align-items-center">
                {/* First Col */}
                <Col sm="4">
                    <h5>Our Address</h5>
                    <address>
                        1 Nucamp Way
                        <br />
                        Seattle, WA 98001
                        <br />
                        U.S.A.
                    </address>
                </Col>
                {/* Second Col */}
                <Col>
                    <a
                        role="button"
                        className="btn btn-link"
                        href="tel:+12065551234"
                    >
                        <i className="fa fa-phone" /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role="button"
                        className="btn btn-link"
                        href="mailto:fakeemail@fakeemail.co"
                    >
                        <i className="fa fa-envelope-o" /> campsites@nucamp.co
                    </a>
                </Col>
            </Row>

            {/* Second Row */}
            <Row className="row-content">
                {/* First Col */}
                <Col xs="12">
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                {/* Second Col */}
                <Col md="10">
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;