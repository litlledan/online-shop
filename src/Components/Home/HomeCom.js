import React, { useState, useEffect } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import phone from "../../assets/Image/01.png";
import Product from "../Product/Product";
import axios from "axios";

import { product } from "../../data/product";

function HomeCom() {
  const [category, setCategory] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products?limit=20&offset=9");

    if (res.status === 200) {
      setAllProducts(res.data);
    }
  };

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories?limit=10");

      if (res.status === 200) {
        setCategory(res.data);
      }

      // console.log(res.data);
    };

    getCategory();

    getProducts();
  }, []);

  return (
    <div>
      <section className="home container">
        <div className="home-sidebar">
          <ul>
            {category.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="home-carousel">
          <Carousel>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <img src={phone} alt="phone" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <img src={phone} alt="phone" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <img src={phone} alt="phone" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section className="home-product container">
        <div className="products">
          {allProducts.map((data) => (
            <Product key={data.id} item={data} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeCom;
