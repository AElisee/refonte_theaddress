import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Card from "../../components/productCard/Card";
import ManBlog from "../../components/blog/ManBlog";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../redux/feature/productSlice";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import ManpageSlider from "../../components/slider/ManpageSlider";

const Manpage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts({ category: "mens-shirts", limit: 10 }));
  }, []);

  const products = useSelector(getAllProducts);
  const productsStatus = useSelector(getAllProductsStatus);

  const slideImages = [" ", " ", " "];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="man-page gender">
      <Navbar />
      <ManpageSlider />
      <section className="pub">
        <div className="pub-ctn container ">
          <div className="left flex flex-column align-center">
            <h3 className="text-uppercase">Univers fashion style</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              explicabo inventore nostrum laborum unde, officia repudiandae a
              doloremque ipsam praesentium ea, cumque quibusdam? Vero, sed nam
              quos reprehenderit eos obcaecati deserunt debitis esse! Illum
              praesentium consequatur aut.
            </p>
          </div>
          <div className="right h-100">
            <div className="img-container w-100 h-100">
              <img
                src="https://cdn.pixabay.com/photo/2014/08/05/10/31/waiting-410328_960_720.jpg"
                alt=""
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="newness">
        <div className="newness-ctn container">
          <div className="top flex justify-between align-center">
            <div className="tp-left">
              <h3 className="text-uppercase">nouveautés : </h3>
              <span className="fw-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                qui.
              </span>
            </div>
            <div className="tp-right">
              <Link to={"/"}>Voir la selection</Link>
            </div>
          </div>
          <div className="product-list">
            <ul className="product-list-ctn flex no-wrap align-center hide-scrollbar">
              {products?.map((product) => (
                <Card product={product} gender="homme" key={product.id} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="edito">
        <div className="container edito-ctn">
          <div className="img-container">
            <img
              className="h-100 w-100"
              src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_960_720.jpg"
              alt=""
            />
            <div className="img-title">
              <h4>GWYNNE DRESS CREAM</h4>
            </div>
          </div>
          <div className="text-container">
            <div className="title">
              <h3>ACLER</h3>
              <h4>Le professionnel expert dans le domaine.</h4>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus aliquid natus similique consectetur libero, vel
                incidunt aperiam culpa soluta ratione, dolor magnam a! Modi non
                odio corporis, ipsa autem quidem amet vero expedita ratione
                dolores quasi deserunt adipisci commodi at quam quas nobis
                numquam vitae fuga quae. Inventore distinctio enim animi
                sapiente, reiciendis iure aperiam dignissimos sed odio modi!
                Alias possimus facere id suscipit beatae! Ullam earum odio in!
                Corporis blanditiis hic enim natus,
              </p>
            </div>
            <div className="link">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                PLONGEZ DANS SON MONDE
              </a>
            </div>
          </div>
        </div>
      </section>
      <ManBlog />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Manpage;
