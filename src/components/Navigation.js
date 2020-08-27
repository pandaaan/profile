import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Navi.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

class Navi extends React.Component {
    render() {
        return (
            <div className="navi">
                <Container>
                    <Row>
                        <Col>
                            <a href="#">
                                <div className="brand-div">
                                    <p className="headline-title mb-0"><span> <FontAwesomeIcon icon={faAddressCard} className="heart mr-2" /></span>Nhu Dan Nguyen </p>
                                    <p className="job-title mb-1">Frontend Developer & Web Designer</p>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Navi;
