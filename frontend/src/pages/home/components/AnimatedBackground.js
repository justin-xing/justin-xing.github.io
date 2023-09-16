import { useState, useEffect } from 'react';

import classes from './AnimatedBackground.module.css';

import plane from '../../../assets/home-images/plane.jpg';
import busan from '../../../assets/home-images/busan.jpg';
import jeju from '../../../assets/home-images/jeju.jpg';
import niagara from '../../../assets/home-images/niagara.jpg';

const AnimatedBackground = () => {
    const [index, setIndex] = useState(999);

    useEffect(() => {
        setTimeout(
            () => {
                setIndex((prevIndex) => prevIndex === 999 || prevIndex === 3 ? 0 : prevIndex + 1)
            },
            5000
        );
    }, [index])

    return (
        <div className={classes.wrapper}>
            <img alt='' className={`${classes.imageOne} ${index === 999 || index === 0 || index === 3 ? classes.currentImage : ''}`} src={jeju} key={0}/>
            <img alt='' className={`${classes.imageTwo} ${index === 1 || index === 0 ? classes.currentImage : ''}`} src={plane} key={1}/>
            <img alt='' className={`${classes.imageThree} ${index === 2 || index === 1 ? classes.currentImage : ''}`} src={niagara} key={2}/>
            <img alt='' className={`${classes.imageFour} ${index === 3 || index === 2 ? classes.currentImage : ''}`} src={busan} key={3}/>
        </div>
    )
}

export default AnimatedBackground;