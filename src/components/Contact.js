import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faPaperPlane, faBirthdayCake, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={3} xs={12} className="div-contact">
                    <div className=" contact mt-2 mb-3 ">
                        <div className="data mb-1 phone"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /><a href="tel:+4915773540275">01577-3540-275</a>  </div>
                        <div className="data mb-1"><FontAwesomeIcon icon={faPaperPlane} className="mr-2" /><a href="mailto:nhudan06@gmail.com">nhudan06@gmail.com</a>   </div>
                        <div className="data mb-1"><FontAwesomeIcon icon={faBirthdayCake} className="mr-2" /> 30.03.1995 </div>
                        <div className="data"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Bremen, Deutschland </div>
                    </div>
                </Col>
            </Row>
        );
    }

}

export default Footer;
