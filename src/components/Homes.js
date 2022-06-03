import Expand from '../Icons/Expand';
import HeartFull from '../Icons/HeartFull';
import Male from '../Icons/Male';
import Pin from '../Icons/Pin';
import Key from '../Icons/Key';
import img1 from '../img/house-1.jpeg';
import img2 from '../img/house-2.jpeg';
import img3 from '../img/house-3.jpeg';
import img4 from '../img/house-4.jpeg';
import img5 from '../img/house-5.jpeg';
import img6 from '../img/house-6.jpeg';

const Homes = ({}) => {
  return (
    <section className="homes">
      <div className="home">
        <img src={img1} alt="House 1" className="home__img" />

        <HeartFull />
        <h5 className="home__name">Beautiful Familiy House</h5>
        <div className="home__location">
          <Pin />
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <Male />
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <Expand />
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <Key />
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={img2} alt="House 2" className="home__img" />
        <HeartFull />
        <h5 className="home__name">Modern Glass Villa</h5>
        <div className="home__location">
          <Pin />
          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <Male />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <Expand />
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <Key />
          <p>$2,750,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={img3} alt="House 3" className="home__img" />
        <HeartFull />
        <h5 className="home__name">Cozy Country House</h5>
        <div className="home__location">
          <Pin />
          <p>UK</p>
        </div>
        <div className="home__rooms">
          <Male />
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <Expand />
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <Key />
          <p>$850,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={img4} alt="House 4" className="home__img" />
        <HeartFull />
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <Pin />
          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <Male />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <Expand />
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <Key />
          <p>$1,950,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={img5} alt="House 5" className="home__img" />
        <HeartFull />
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <Pin />
          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <Male />
          <p>18 rooms</p>
        </div>
        <div className="home__area">
          <Expand />
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <Key />
          <p>$9,500,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={img6} alt="House 6" className="home__img" />
        <HeartFull />
        <h5 className="home__name">Modern Familiy Apartment</h5>
        <div className="home__location">
          <Pin />
          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <Male />
          <p>3 rooms</p>
        </div>
        <div className="home__area">
          <Expand />
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <Key />
          <p>$600,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    </section>
  );
};
export default Homes;
