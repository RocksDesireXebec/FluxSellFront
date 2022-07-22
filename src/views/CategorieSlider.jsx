import React from "react";

import { Card, CardBody, CardTitle } from "reactstrap";

import Carousel from "react-multi-carousel";

/*
    Son rôle est d'afficher les slider des categories 
*/
const CategorieSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable
      draggable
      pauseOnHover
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      centerMode={true}
    >
      <Card>
        <CardBody>
          <CardTitle>Produit1</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Produit2</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Produit3</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Produit4</CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Produit</CardTitle>
        </CardBody>
      </Card>
    </Carousel>
  );
};

export default CategorieSlider;
