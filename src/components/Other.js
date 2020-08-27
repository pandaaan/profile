import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Cv.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic, faPen, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';


class Other extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col className="my-auto">
                        <p className="headline-title skills-headline mb-0"><span><FontAwesomeIcon icon={faMagic} className="heart" /></span> Sonstige Kenntnisse </p>
                        <hr />
                    </Col>
                </Row>
                <div className="other-skills">
                    <Row className="mt-4 ">
                        <Col lg={1} xs={3}>
                            <div >
                                <img alt="deutsch" title="deutsch" src="https://img.icons8.com/officel/60/000000/germany.png" />
                                <div className="mx-auto">
                                    <FontAwesomeIcon icon={faCommentAlt} className="language mr-2" />
                                    <FontAwesomeIcon icon={faPen} className="language" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={1} xs={3}>
                            <div >
                                <img alt="englisch" title="englisch" src="https://img.icons8.com/officel/60/000000/great-britain.png" />
                                <div className="mx-auto">
                                    <FontAwesomeIcon icon={faCommentAlt} className="language mr-2" />
                                    <FontAwesomeIcon icon={faPen} className="language" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={1} xs={3}>
                            <div >
                                <img alt="klavier" title="klavier" src="https://img.icons8.com/metro/50/000000/classic-music.png" />
                                <div className="mx-auto mt-2">
                                    <FontAwesomeIcon icon={faMusic} className="language" />
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </>
        );
    }

}

export default Other;
