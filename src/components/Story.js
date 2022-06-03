import { Fragment } from 'react';
import img1 from '../img/story-1.jpeg';
import img2 from '../img/story-2.jpeg';
const Story = ({}) => {
  return (
    <Fragment>
      <div className="story__pictures">
        <img src={img1} className="story__img--1" alt="couple with new house" />
        <img src={img2} className="story__img--2" alt="New house" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-2">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-3">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>
    </Fragment>
  );
};
export default Story;
