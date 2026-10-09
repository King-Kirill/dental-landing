import './DentalLanding.css';
import '../../general_styles/Buttons.css';
import Header from '../../layout/header/Header';
import Hero from '../../sections/hero/Hero';
import Services from '../../sections/services/Services';
import Reviews from '../../sections/reviews/Reviews';
import Contacts from '../../sections/contacts/Contacts';
import Footer from '../../layout/footer/Footer';

// данные клиники
const CLINIC = {
  name: "Белая линия",
  phone: "+7 (495) 123-45-67",
  address: "ул. Примерная, 12, 2 этаж",
  hours: "Пн–Сб 9:00–21:00, Вс 10:00–18:00",
  coords: [55.7558, 37.6173], // [широта, долгота] - координаты местоположения
};

// услуги клиники
const SERVICES = [
  { name: "Осмотр и консультация", note: "Снимок и план лечения за один визит", price: "от 0 ₽" },
  { name: "Профессиональная чистка", note: "Ультразвук, Air Flow, полировка", price: "от 4 500 ₽" },
  { name: "Лечение кариеса", note: "Анестезия, световая пломба", price: "от 5 000 ₽" },
  { name: "Удаление зуба", note: "Простое и сложное, включая зубы мудрости", price: "от 3 500 ₽" },
  { name: "Имплантация", note: "Приживление и коронка — под ключ", price: "от 38 000 ₽" },
  { name: "Виниры и коронки", note: "Керамика, цирконий", price: "от 22 000 ₽" },
  { name: "Брекеты и элайнеры", note: "Цифровой план до начала лечения", price: "от 90 000 ₽" },
  { name: "Детская стоматология", note: "Лечение без страха, с 3 лет", price: "от 2 500 ₽" },
]; 

// отзывы пока в статике, как пример
const REVIEWS = [
  {
    text: "Боялась идти к стоматологу лет десять. Здесь всё объяснили до начала, ничего не болело. Пришла лечить один зуб, а теперь хожу на профилактику.",
    name: "Анна К.",
    meta: "лечение кариеса",
  },
  {
    text: "Поставили имплант за два визита, без отёков и лишней суеты. Врач прислал фото и план после каждого приёма.",
    name: "Дмитрий С.",
    meta: "имплантация",
  },
  {
    text: "Водим сына с четырёх лет. Он сам просит «поехать к доктору Ольге». Для родителей это лучшая рекомендация.",
    name: "Марина В.",
    meta: "детская стоматология",
  },
  {
    text: "Цены совпали с тем, что назвали на консультации. Никаких «а вот ещё понадобится». Редкость.",
    name: "Игорь П.",
    meta: "виниры",
  },
];

// врачебная стата
const DOCTORS_STAT = [
  ["12 лет", "средний стаж врачей"],
  ["2 года", "гарантия на пломбы и коронки"],
  ["0 ₽", "первичная консультация"],
];

export default function DentalLanding() {
  return (
    <>
      <Header CLINIC={CLINIC}/>

      <main id="top">
        <Hero DOCTORS_STAT={DOCTORS_STAT} SERVICES={SERVICES}/>
        <Services SERVICES={SERVICES}/>
        <Reviews REVIEWS={REVIEWS}/>
        <Contacts CLINIC={CLINIC}/>
      </main>

      <Footer CLINIC={CLINIC}/>
    </>
  );
};