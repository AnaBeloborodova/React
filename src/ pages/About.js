import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                       <Col sm={3}>
                           <Nav variant="pills" className="flex-column mt-2">
                               <Nav.Item>
                                   <Nav.Link eventKey="first">Design</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="second">Team</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="third">Programming</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                               </Nav.Item>

                           </Nav>
                       </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://figmaelements.com/wp-content/uploads/2019/10/31-challenger-ui-kit-1024x576.jpg" />
                                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dicta dolore eligendi odit, pariatur voluptate! At, beatae dolores ducimus, eius error, labore maxime mollitia nemo neque nisi optio veniam!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://businessman.ru/static/img/n/1/4/8/6/4/0/6/i/1486406.jpg" />
                                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dicta dolore eligendi odit, pariatur voluptate! At, beatae dolores ducimus, eius error, labore maxime mollitia nemo neque nisi optio veniam!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://avatars.mds.yandex.net/get-zen_doc/101122/pub_5c4f4064c7d9c800ac6b7013_5c4f414890376000ad5e3866/scale_1200" />
                                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dicta dolore eligendi odit, pariatur voluptate! At, beatae dolores ducimus, eius error, labore maxime mollitia nemo neque nisi optio veniam!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://it-black.ru/wp-content/uploads/2020/08/frem_bibl_js-768x430.png" />
                                    <p className="mt-2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dicta dolore eligendi odit, pariatur voluptate! At, beatae dolores ducimus, eius error, labore maxime mollitia nemo neque nisi optio veniam!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://m.seonews.ru/upload/medialibrary/3e5/3e52d20c23ecb3b4e30d2be2879d6da3.jpg" />
                                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dicta dolore eligendi odit, pariatur voluptate! At, beatae dolores ducimus, eius error, labore maxime mollitia nemo neque nisi optio veniam!</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        );
    }
}

export default About;