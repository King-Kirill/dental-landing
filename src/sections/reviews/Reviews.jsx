import './Reviews.css';

export default function Reviews({REVIEWS})
{
    return (
        <section className="reviews" id="reviews">
          <div className="wrap">
            <h2>Что говорят пациенты</h2>
            <p className="lead">Отзывы людей, которые лечились у нас в этом году.</p>
            <div className="grid">
              {REVIEWS.map((r) => (
                <figure className="rev" key={r.name}>
                  <div className="stars" aria-label="Оценка 5 из 5">★★★★★</div>
                  <blockquote>{r.text}</blockquote>
                  <figcaption><b>{r.name}</b>, {r.meta}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
    )
};