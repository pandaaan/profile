import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Cv.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faStream, faBriefcase, faPlaneDeparture, faHeart } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import student from '../images/Developer_Woman_-_Colour/student.png';
import studentb from '../images/Developer_Woman_-_Colour/work.png';

class CV extends React.Component {

    componentDidMount() {
        AOS.init({
            duration: 2000,
            disable: 'mobile'
        })
    }
    render() {
        return (
            <>
                <Row>
                    <Col className="my-auto">
                        <p className="headline-title skills-headline mb-0"><span><FontAwesomeIcon icon={faStream} className="heart" /></span> Lebenslauf</p>
                        <hr />
                    </Col>
                </Row>
                <ul className="timeline">
                    <li >
                        <div className="timeline-badge"><FontAwesomeIcon icon={faGraduationCap} className="" /></div>
                        <div data-aos="fade-right" className="timeline-panel">
                            <div className="timeline-heading ">
                                <p className="timeline-title mb-0">2014 - 2020</p>
                                <p className="timeline-title font-weight-bold mb-1">Hochschule Bremen</p>
                                <p className="mb-0 desc"><small className="text-muted">Int. Fr. Informatik B.Sc.</small></p>
                                <p className="mb-0 desc"><small className="text-muted">Softwareentwicklung</small></p>
                            </div>

                        </div>
                    </li>
                    <div className="student-div">
                        <img alt="illustration by drawkit" title="student" className="student" src={student}></img>
                    </div>
                    <li className="timeline-inverted">
                        <div className="timeline-badge"><FontAwesomeIcon icon={faGraduationCap} className="" /></div>
                        <div data-aos="fade-left" className="timeline-panel">
                            <div className="timeline-heading">
                                <p className="timeline-title mb-0">2011 - 2014</p>
                                <p className="timeline-title font-weight-bold mb-1">Wilhelm - Wagenfeld Schule</p>
                                <p className="mb-0 desc"><small className="text-muted">Berufliches Gym. für Gestaltung und Multimedia</small></p>
                                <p className="mb-0 desc"><small className="text-muted">Englisch & Multimedia</small></p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge work"><FontAwesomeIcon icon={faBriefcase} className="" /></div>
                        <div data-aos="fade-right" className="timeline-panel">
                            <div className="timeline-heading ">
                                <p className="timeline-title mb-0">01 | 2020 - 06 | 2020</p>
                                <p className="timeline-title font-weight-bold mb-1">Bachelor</p>
                                <p className="mb-0 desc"><small className="text-muted">HEC GmbH</small></p>
                                <p className="mb-0 desc"><small className="text-muted">Progressive Web App</small></p>
                            </div>

                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-badge work"><FontAwesomeIcon icon={faBriefcase} className="" /></div>
                        <div data-aos="fade-left" className="timeline-panel">
                            <div className="timeline-heading">
                                <p className="timeline-title mb-0">07 | 2019 - 12 | 2019</p>
                                <p className="timeline-title font-weight-bold mb-1">Werkstudentin</p>
                                <p className="mb-0 desc"><small className="text-muted">böwa GmbH</small></p>
                                <p className="mb-0 desc"><small className="text-muted">Webentwicklung, Webdesign, Print</small></p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge work"><FontAwesomeIcon icon={faBriefcase} className="" /></div>
                        <div data-aos="fade-right" className="timeline-panel">
                            <div className="timeline-heading">
                                <p className="timeline-title mb-1">02 | 2019 - 06 | 2019</p>
                                <p className="timeline-title font-weight-bold mb-1">Praxissemester</p>
                                <p className="mb-0 desc "><small className="text-muted">böwa GmbH</small></p>
                                <p className="mb-0 desc"><small className="text-muted">Webentwicklung, Webdesign, Print</small></p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-badge"><FontAwesomeIcon icon={faPlaneDeparture} className="" /></div>
                        <div data-aos="fade-left" className="timeline-panel">
                            <div className="timeline-heading">
                                <p className="timeline-title mb-0">09 | 2016 – 02 | 2017</p>
                                <p className="timeline-title font-weight-bold mb-1">Auslandssemester</p>
                                <p className="mb-0 desc"><small className="text-muted">Kodaira (Tokio), Japan</small></p>
                                <p className="mb-0 desc"><small className="text-muted">Tsuda University</small></p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge heart"><FontAwesomeIcon icon={faHeart} className="" /></div>
                        <div data-aos="fade-right" className="timeline-panel">
                            <div className="timeline-heading">
                                <p className="timeline-title mb-1">2011 – 2018</p>
                                <p className="timeline-title font-weight-bold mb-1">Ehrenamtliche Gruppen-, Jugendleiterin</p>
                                <p className="mb-0 desc "><small className="text-muted">Absolvierung eines Gruppenleiter-Grundkurses (JULEICA)</small></p>
                                <p className="mb-0 desc"><small className="text-muted">Teilnahme an Kinderfreizeiten als Teamer</small></p>
                            </div>
                        </div>
                    </li>
                    <div className="studentb-div">
                        <img alt="illustration by drawkit" title="student" className="student" src={studentb}></img>
                    </div>
                </ul>

            </>
        );
    }

}

export default CV;
