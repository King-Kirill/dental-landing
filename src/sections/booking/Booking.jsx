import {useState} from "react";
import './Booking.css';

export default function BookingForm({SERVICES}) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 2) err.name = "Введите имя";
    if (form.phone.replace(/\D/g, "").length < 10) err.phone = "Введите номер телефона полностью";
    if (!form.service) err.service = "Выберите услугу";
    setErrors(err);
    if (Object.keys(err).length) return;
    // TODO: отправьте form на ваш сервер / в CRM
    console.log("Заявка:", form);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="book" role="status">
        <div className="done">
          <h3>Заявка принята</h3>
          <p>
            {form.name}, мы позвоним на {form.phone} в течение 15 минут в рабочее время и подтвердим запись.
          </p>
          <button
            className="btn ghost"
            onClick={() => {
              setSent(false);
              setForm({ name: "", phone: "", service: "", date: "" });
            }}
          >
            Записать ещё кого-то
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="book" onSubmit={submit} noValidate id="booking">
      <h2>Запись на приём</h2>
      <p className="sub">Перезвоним в течение 15 минут и подберём время.</p>

      <div className={"field" + (errors.name ? " bad" : "")}>
        <label htmlFor="f-name">Имя</label>
        <input id="f-name" value={form.name} onChange={set("name")} autoComplete="name" />
        {errors.name && <div className="msg">{errors.name}</div>}
      </div>

      <div className={"field" + (errors.phone ? " bad" : "")}>
        <label htmlFor="f-phone">Телефон</label>
        <input id="f-phone" type="tel" placeholder="+7" value={form.phone} onChange={set("phone")} autoComplete="tel" />
        {errors.phone && <div className="msg">{errors.phone}</div>}
      </div>

      <div className="row2">
        <div className={"field" + (errors.service ? " bad" : "")}>
          <label htmlFor="f-service">Услуга</label>
          <select id="f-service" value={form.service} onChange={set("service")}>
            <option value="">Выберите</option>
            {SERVICES.map((s) => (
              <option key={s.name} value={s.name}>{s.name}</option>
            ))}
          </select>
          {errors.service && <div className="msg">{errors.service}</div>}
        </div>
        <div className="field">
          <label htmlFor="f-date">Удобная дата</label>
          <input id="f-date" type="date" value={form.date} onChange={set("date")} />
        </div>
      </div>

      <button className="btn" type="submit">Записаться</button>
      <p className="fine">Отправляя заявку, вы соглашаетесь на обработку персональных данных.</p>
    </form>
  );
};