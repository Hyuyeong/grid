import img1 from '../img/gal-1.jpeg';
import img2 from '../img/gal-2.jpeg';
import img3 from '../img/gal-3.jpeg';
import img4 from '../img/gal-4.jpeg';
import img5 from '../img/gal-5.jpeg';
import img6 from '../img/gal-6.jpeg';
import img7 from '../img/gal-7.jpeg';
import img8 from '../img/gal-8.jpeg';
import img9 from '../img/gal-9.jpeg';
import img10 from '../img/gal-10.jpeg';
import img11 from '../img/gal-11.jpeg';
import img12 from '../img/gal-12.jpeg';
import img13 from '../img/gal-13.jpeg';
import img14 from '../img/gal-14.jpeg';

const Gallery = ({}) => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={img1} alt="Gallery image 1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={img2} alt="Gallery image 2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={img3} alt="Gallery image 3" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={img4} alt="Gallery image 4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={img5} alt="Gallery image 5" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={img6} alt="Gallery image 6" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={img7} alt="Gallery image 7" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={img8} alt="Gallery image 8" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={img9} alt="Gallery image 9" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={img10} alt="Gallery image 10" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={img11} alt="Gallery image 11" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={img12} alt="Gallery image 12" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={img13} alt="Gallery image 13" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img src={img14} alt="Gallery image 14" className="gallery__img" />
      </figure>
    </section>
  );
};
export default Gallery;
