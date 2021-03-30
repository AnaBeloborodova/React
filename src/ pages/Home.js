import React, {Component} from 'react';
import CarouselBox from "../components/carouselBox";
import {Container, CardDeck, Card, Button} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card border="success" text="primary">
                            <Card.Img variant="top" src="https://static.tildacdn.com/tild3366-6139-4636-b832-383166653866/dorabsayt-1.jpeg"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque
                                    deserunt, doloremque eaque excepturi exercitationem facilis hic necessitatibus omnis
                                    placeat quod, rem sapiente soluta temporibus vero. Adipisci minima placeat
                                    repudiandae?</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque
                                    deserunt, doloremque eaque excepturi exercitationem facilis hic necessitatibus omnis
                                    placeat quod, rem sapiente soluta temporibus vero. Adipisci minima placeat
                                    repudiandae?</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://leaditteam.com/storage/article-preview/app-article/33/prew_b/how-to-collaborate-efficiently-with-your-outsourced-software-team.jpg?t=1559895923"/>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://www.sbpo.ru/loadfiles/moduls/doska/bigfoto/e20dcda5ab81a46819583fe1037ae14b.png"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque
                                    deserunt, doloremque eaque excepturi exercitationem facilis hic necessitatibus omnis
                                    placeat quod, rem sapiente soluta temporibus vero. Adipisci minima placeat
                                    repudiandae?</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                    </CardDeck>

                </Container>
            </>
        );
    }
}

export default Home;