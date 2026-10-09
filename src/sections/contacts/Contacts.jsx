import Map from "../map/Map";
import './Contacts.css';

export default function Contacts({CLINIC})
{
    return(
        <section className="contacts" id="contacts">
          <div className="wrap">
            <div>
              <h2>Как нас найти</h2>
              <p className="lead">Парковка во дворе, вход со стороны улицы.</p>
              <dl>
                <dt>Адрес</dt>
                <dd>{CLINIC.address}</dd>
                <dt>Часы работы</dt>
                <dd>{CLINIC.hours}</dd>
                <dt>Телефон</dt>
                <dd><a href={`tel:${CLINIC.phone.replace(/[^\d+]/g, "")}`}>{CLINIC.phone}</a></dd>
              </dl>
              <a className="btn" href="#booking">Записаться на приём</a>
            </div>
            <Map CLINIC={CLINIC}/>
          </div>
        </section>
    )
};