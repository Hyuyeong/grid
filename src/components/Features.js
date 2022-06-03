import Global from '../Icons/Global';
import Key from '../Icons/Key';
import Lock from '../Icons/Lock';
import Pin from '../Icons/Pin';
import Presentation from '../Icons/Presentation';
import Trophy from '../Icons/Trophy';
const Features = ({}) => {
  return (
    <section className="features">
      <div className="feature">
        <Global />
        <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          libero id dolore atque, neque fugit ea facere vitae! Nisi natus fugiat
          quibusdam voluptas.
        </p>
      </div>
      <div className="feature">
        <Trophy />
        <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          libero id dolore atque, neque fugit ea facere vitae! Nisi natus fugiat
          quibusdam voluptas.
        </p>
      </div>
      <div className="feature">
        <Pin />
        <h4 className="heading-4 heading-4--dark">
          All homes in top locations
        </h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          libero id dolore atque, neque fugit ea.
        </p>
      </div>
      <div className="feature">
        <Key />
        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          libero id dolore atque.
        </p>
      </div>
      <div className="feature">
        <Presentation />
        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          libero id dolore atque, neque fugit ea facere vitae! Nisi natus.
        </p>
      </div>
      <div className="feature">
        <Lock />
        <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
        <p className="feature__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          libero id dolore atque, neque fugit ea facere vitae! Nisi natus
          fugiat.
        </p>
      </div>
    </section>
  );
};
export default Features;
