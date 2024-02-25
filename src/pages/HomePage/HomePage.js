import { Container, WelcomeText, Button, ButtonTitle } from './HomePage.styled';
import transition from 'styles/transition';

// ========================

function HomePage() {
  return (
    <Container>
      <WelcomeText>
        <h2>Discover the freedom of the open road with Us.</h2>
        <p>
          We turn your journey into an unforgettable experience. Whether you're
          traveling for business or pleasure, our fleet of meticulously
          maintained vehicles is ready to take you wherever you want to go.
        </p>
      </WelcomeText>
      <Button to="/catalog">
        <ButtonTitle>Go to Catalog</ButtonTitle>
      </Button>
    </Container>
  );
}

export default transition(HomePage);
