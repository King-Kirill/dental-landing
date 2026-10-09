import './Hero.css';
import BookingForm from '../booking/Booking';

export default function Hero({DOCTORS_STAT, SERVICES})
{
    return(
        <div className="hero">
          <div className="wrap">
            <div>
              <h1>Лечим зубы без боли и без сюрпризов в счёте</h1>
              <p>
                Назовём стоимость до начала лечения и покажем план на снимках. Первая консультация бесплатно.
              </p>
              <ul className="stats">
                {DOCTORS_STAT.map(([big, small]) => (
                  <li key={small}>
                    <b>{big}</b>
                    <span>{small}</span>
                  </li>
                ))}
              </ul>
            </div>
            <BookingForm SERVICES={SERVICES}/>
          </div>
        </div>
    )
};