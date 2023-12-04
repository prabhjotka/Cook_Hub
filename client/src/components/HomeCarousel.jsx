import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel interval={1000}>
      <Carousel.Item>
        <img src="/Avocado_Toast.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Margherita_Pizza.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Quinoa_Salad.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Sushi_Rolls.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Spicy_Shrimp_Tacos.jpeg" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;