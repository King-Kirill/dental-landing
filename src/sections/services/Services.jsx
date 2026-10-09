import './Services.css';

export default function Services({SERVICES})
{
    return(
        <section className="services" id="services">
          <div className="wrap">
            <h2>Услуги и цены</h2>
            <p className="lead">Точную стоимость назовём после осмотра — она не изменится по ходу лечения.</p>
            <ul className="svc">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  <strong>{s.name}</strong>
                  <span>{s.note}</span>
                  <em>{s.price}</em>
                </li>
              ))}
            </ul>
          </div>
        </section>
    )
};