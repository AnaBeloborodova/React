import React, {Component} from 'react';
import {Media, Container, Col, Row, Card, ListGroup} from "react-bootstrap";
import jsImg from '../assets/js.png'

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src={jsImg} alt="logo"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut
                                    consectetur consequuntur cumque delectus ea eligendi facilis fugit laborum minima,
                                    nostrum, obcaecati officiis optio porro qui totam unde vero!</p>


                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src={jsImg} alt="logo"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut
                                    consectetur consequuntur cumque delectus ea eligendi facilis fugit laborum minima,
                                    nostrum, obcaecati officiis optio porro qui totam unde vero!</p>


                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src={jsImg} alt="logo"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut
                                    consectetur consequuntur cumque delectus ea eligendi facilis fugit laborum minima,
                                    nostrum, obcaecati officiis optio porro qui totam unde vero!</p>


                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src={jsImg} alt="logo"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut
                                    consectetur consequuntur cumque delectus ea eligendi facilis fugit laborum minima,
                                    nostrum, obcaecati officiis optio porro qui totam unde vero!</p>


                            </Media.Body>
                        </Media>

                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>
                                    Side widget
                                </Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto aspernatur</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;