import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image, } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class PhotoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src='assets/tetons.jpg' alt='tetons mountains' />
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                </div>
                <div>
                    <img src="assets/3.jpeg" />                    
                </div>
            </Carousel>
        );
    }
};

export default PhotoCarousel