// LandingPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Nav} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';

function Home() {
  // Exemple de données de produit
  const products = [
    {
      id: 1,
      name: 'Produit 1',
      description: 'Description du produit 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Produit 2',
      description: 'Description du produit 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Produit 3',
      description: 'Description du produit 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Produit 4',
      description: 'Description du produit 4',
      image: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        name: 'Produit 5',
        description: 'Description du produit 5',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        name: 'Produit 6',
        description: 'Description du produit 6',
        image: 'https://via.placeholder.com/150',
      },
    // Ajoutez d'autres produits ici...
  ];
  

  return (
    <>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Notre Boutique en Ligne</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/products">Produits</Nav.Link>
            <Nav.Link href="/about">À Propos</Nav.Link>
            {/* Ajoutez d'autres liens de navigation ici si nécessaire */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/600x150"
            alt="First slide"
          />
        </Carousel.Item>
        {/* Ajoutez d'autres diapositives pour les promotions */}
      </Carousel>
      <Container>
        <h2>Nos Produits</h2>
        <Row>
          {products.map(product => (
            <Col key={product.id} md={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <footer className="text-center mt-5">
        <p>&copy; 2024 Notre Boutique</p>
      </footer>
    </>
  );
}

export default Home;
