import "./product.css";

const Product = ({img,link}) => {
    return (
        <div className="product">
            <div className="product-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank">
                <img
                    className="product-image"
                    src={img}
                    alt="project"
                />
            </a>
        </div>
    );
};

export default Product;