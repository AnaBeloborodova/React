import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/forest.jpg';
import dforestImg from '../assets/darkForest.jpg';

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={forestImg} alt="forest"/>
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>Lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={dforestImg} alt="dark-forest"/>
                    <Carousel.Caption>
                        <h3>Dark Forest Image</h3>
                        <p>Lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBox;