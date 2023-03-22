import ProductContainer from "../components/ProductContainer";

const WomanProduct = () => {
  return (
    <div className="woman-product">
      <div className="container-lg">
        <ProductContainer page="Femme" category={"women"} />
      </div>
    </div>
  );
};

export default WomanProduct;
