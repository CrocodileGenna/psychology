import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Rewiews = () => {
  const testimonials = [
    { id: 1, text: 'Отзыв 1' },
    { id: 2, text: 'Отзыв 2' },
    { id: 3, text: 'Отзыв 3' },
    // Добавьте нужное количество отзывов
  ];

  const CustomPrevArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      >
        Назад
      </div>
    );
  };

  const CustomNextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      >
        Вперед
      </div>
    );
  };
  const settings = {
    dots: false, // Отключаем пагинацию
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Включаем режим центрирования
    centerPadding: '60px', // Добавляем отступы для более четкого центрирования
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id}>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default Rewiews;
