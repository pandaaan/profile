import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Navi.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import error from '../images/Developer_Woman_-_Colour/error.png'
class NotFound extends React.Component {
    render() {
        return (
            <>
                <div className="navi">
                    <Container>
                        <Row>
                            <Col>
                                <a href="/">
                                    <div className="brand-div">
                                        <p className="headline-title mb-0"><span> <FontAwesomeIcon icon={faAddressCard} className="heart mr-2" /></span>Nhu Dan Nguyen </p>
                                        <p className="job-title mb-1">Frontend Developer & Web Designer</p>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="img-con">
                    <Row>
                        <Col xs={12} className="text-center">
                            <img alt="page not found" title="error" className="notfound-img" src={error} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} className="text-center ">
                            <p> PAGE NOT FOUND</p>
                            <a href="/">Go back</a>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default NotFound;
