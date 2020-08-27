import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import '../styles/Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";
import mainData from '../data/main-skills.json';
import moreData from '../data/more-skills.json';

class Skills extends React.Component {
    collapseShow() {
        $("#collapse").slideToggle("slow");
        $("#more").hide();
        $("#hide").show();
    }

    collapseHide() {
        $("#collapse").slideToggle("slow");
        $("#more").show();
        $("#hide").hide();
    }

    showtitle() {
        $(".skill-name").toggle();
    }


    render() {

        return (
            <>
                <Row>
                    <Col className="my-auto">
                        <p className="headline-title skills-headline mb-0"><span><FontAwesomeIcon icon={faCode} className="heart" /></span>  skills</p>

                    </Col>
                    <Col className="my-auto text-right">
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="details"
                                onClick={this.showtitle}
                            />
                        </Form>
                    </Col>

                </Row> <hr />
                <div className="skills">
                    <Row className="skill-row mt-4 ">
                        {mainData.map((skill) => {
                            return (
                                <Col lg={4} xs={12} key={skill.id} className={"skill-col skill-first-col " + skill.mobile}>
                                    <Row>
                                        <Col lg={3} xs={3}>
                                            <div className="skill-div skill-html5 my-auto">
                                                <div className="html5 div-size">
                                                    <img alt={skill.title} title={skill.title} className="logo" src={skill.img} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={8} xs={8} className="my-auto">
                                            <Row className="skill-detail">
                                                <Col>
                                                    <p className="skill-name" id={skill.title}>{skill.title}</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="d-flex">
                                                    <div className={"circle " + skill.circle1}></div>
                                                    <div className={"circle " + skill.circle2}></div>
                                                    <div className={"circle " + skill.circle3}></div>
                                                    <div className={"circle " + skill.circle4}></div>
                                                    <div className={"circle " + skill.circle5}></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col className="show-hide">
                            <a type="button" onClick={this.collapseShow} id="more" className="mb-3">mehr anzeigen</a>
                        </Col>
                    </Row>

                    <div id="collapse">
                        <Row className="skill-row">
                            {moreData.map((skill) => {
                                return (
                                    <Col lg={4} xs={12} key={skill.id} className={"skill-col " + skill.mobile}>
                                        <Row>
                                            <Col lg={3} xs={3}>
                                                <div className="skill-div skill-html5 my-auto">
                                                    <div className="html5 div-size">

                                                        <img alt={skill.title} title={skill.title} className="logo" src={skill.img} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={8} xs={8} className="my-auto">
                                                <Row className="skill-detail">
                                                    <Col>
                                                        <p className="skill-name">{skill.title}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex">
                                                        <div className={"circle " + skill.circle1}></div>
                                                        <div className={"circle " + skill.circle2}></div>
                                                        <div className={"circle " + skill.circle3}></div>
                                                        <div className={"circle " + skill.circle4}></div>
                                                        <div className={"circle " + skill.circle5}></div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col className="show-hide">

                                <a type="button" onClick={this.collapseHide} id="hide" className="mb-3">weniger anzeigen</a>
                            </Col>

                        </Row>
                    </div>
                </div>

            </>
        );
    }

}

export default Skills;
