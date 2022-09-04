import React from 'react';
import Carousel from 'react-material-ui-carousel'
import style from '../Slide/Slider.module.scss'
//import SimpleImageSlider from "react-simple-image-slider";
import Slide1 from '../../../assets/images/slide1.jpg'
import Slide2 from '../../../assets/images/slide2.jpg'
import Slide3 from '../../../assets/images/slide3.jpg'


export const Slider = () => {

    // laver Array med billedets url, en titel til at have over sig og så et alt tag til billedet
    const carouselItem = [
        {
            url: Slide1,
            title: "Vi elsker at lave brød",
            alt: "elsker_brød",
        },
        {
            url: Slide2,
            title: "Vi bager brød",
            alt: "bager",
        },

        {
            url: Slide3,
            title: "Brød dagen lang",
            alt: "brød",
        },
    ]


    return (
        <Carousel>
            {/* Map vores array  */}
            {
                carouselItem.map((item, index) => {
                    return (
                        <Item key={index} item={item}></Item>)
                })
            }
        </Carousel>
    )
}


function Item(props) {

    return (
        <div className={style.slider}>
            <h3>{props.item.title}</h3>
            <img alt={props.item.alt} src={props.item.url} ></img>
        </div>
    )
}