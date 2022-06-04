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
  const data = [
    {
      id: 'house 1',
      name: 'Beautiful Familiy House',
      location: 'USA',
      rooms: 5,
      area: 325,
      price: 12000000,
      img: img1,
    },
    {
      id: 'house 2',
      name: 'Modern Glass Villa',
      location: 'Canada',
      rooms: 6,
      area: 450,
      price: 2750000,
      img: img2,
    },

    {
      id: 'house 3',
      name: 'Cozy Country House',
      location: 'UK',
      rooms: 4,
      area: 250,
      price: 850000,
      img: img3,
    },
    {
      id: 'house 4',
      name: 'Large Rustical Villa',
      location: 'Portugal',
      rooms: 6,
      area: 480,
      price: 1950000,
      img: img4,
    },
    {
      id: 'house 5',
      name: 'Majestic Palace House',
      location: 'Germany',
      rooms: 18,
      area: 4230,
      price: 9500000,
      img: img5,
    },
    {
      id: 'house 6',
      name: 'Modern Familiy Apartment',
      location: 'Italy',
      rooms: 3,
      area: 180,
      price: 600000,
      img: img6,
    },
  ];

  const home = data.map(home => {
    return (
      <div className="home" key={home.id}>
        <img src={home.img} alt={home.id} className="home__img" />

        <HeartFull />
        <h5 className="home__name">{home.name}</h5>
        <div className="home__location">
          <Pin />
          <p>{home.location}</p>
        </div>
        <div className="home__rooms">
          <Male />
          <p>{home.rooms} rooms</p>
        </div>
        <div className="home__area">
          <Expand />
          <p>
            {home.area.toLocaleString()} m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <Key />
          <p>${home.price.toLocaleString()}</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    );
  });

  return <section className="homes">{home}</section>;
};
export default Homes;
