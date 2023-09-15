import classes from './AnimatedBackground.module.css';

import waterloo from '../../../assets/home-images/waterloo.jpg';
import busan from '../../../assets/home-images/busan.jpg';
import jeju from '../../../assets/home-images/jeju.jpg';
import niagara from '../../../assets/home-images/niagara.jpg';

const AnimatedBackground = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.overlay}/>
            <img className={classes.imageOne} src={waterloo}/>
            <img className={classes.imageTwo} src={busan}/>
            <img className={classes.imageThree} src={jeju}/>
            <img className={classes.imageFour} src={niagara}/>
        </div>
    )
}

export default AnimatedBackground;