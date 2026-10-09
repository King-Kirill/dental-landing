import './Header.css'

export default function Header({CLINIC})
{
    return (
        <header className="top">
          <div className="wrap">
            <a className="logo" href="#top"><i aria-hidden="true" />{CLINIC.name}</a>
            <nav className="nav" aria-label="Основная навигация">
              <a href="#services">Услуги</a>
              <a href="#reviews">Отзывы</a>
              <a href="#contacts">Контакты</a>
              <a className="tel" href={`tel:${CLINIC.phone.replace(/[^\d+]/g, "")}`}>{CLINIC.phone}</a>
            </nav>
          </div>
        </header>
    )
}