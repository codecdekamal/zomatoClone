import "bootstrap/dist/css/bootstrap.min.css";
const ProductListingCard = ({ image,title,categories }) => {
  console.log(image,title,categories)
  return (
    <>
      <div className="card col col-md-3 mt-sm-8 mb-3 mx-auto justify-content-start" style={{width:"20rem"}}>
        <div className="row">
          <img className="card-img-top " src={image} alt="img" height="200px" />
          <div className="row justify-content-between ">
            <div className="col col-sm-8 justify-content-center card-title placeholder-glow">
              {" "}
              <h5>{title}</h5>{" "}
            </div>
            <div className="col col-sm-2 text-center card-text placeholder-glow">
              {Math.floor(Math.random()*5).toFixed(1)}
              </div>
          </div>
        </div>
      </div> 
    </>
  );
}
export default ProductListingCard;
