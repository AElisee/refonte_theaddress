import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Card from "../../components/productCard/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../redux/feature/productSlice";

const Manpage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts({ category: "womens-dresses", limit: 50 }));
  }, []);

  const products = useSelector(getAllProducts);
  const productsStatus = useSelector(getAllProductsStatus);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  // const slideImages = [" ", " ", " "];

  return (
    <div className="woman-page gender">
      {/* <section className="slide-carousel">
        <div className="slide-carousel-ctn w-100 h-100">
          <Slider {...settings}>
            {slideImages.map((image, index) => (
              <div className="img-ctn" key={index}>
                <img src={image} alt="" className="w-100 h-100" />
                <span className="btn ">
                  <Link to="/" className="text-uppercase ls-2">
                    Acheter maintenant
                  </Link>
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}
      <section className="pub">
        <div className="pub-ctn container ">
          <div className="left flex flex-column align-center">
            <h3 className="text-uppercase">Des tenus pour chaque saison</h3>
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
                src="https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg"
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
                <Card product={product} gender="femme" key={product.id} />
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
              src="https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    </div>
  );
};

export default Manpage;
