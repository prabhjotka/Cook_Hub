import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel interval={1000}>
      <Carousel.Item>
        <img src="../../public/Avocado_Toast.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../public/Margherita_Pizza.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../public/Quinoa_Salad.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../public/Sushi_Rolls.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../public/Spicy_Shrimp_Tacos.jpeg" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;