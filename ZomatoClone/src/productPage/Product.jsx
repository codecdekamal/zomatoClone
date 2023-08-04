import "bootstrap/dist/css/bootstrap.min.css";
import ProductListingCard from "../UI/ProductListingCard";
import { useCallback, useEffect } from "react";
import { useState } from "react";
// const url =
//   "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a65a3ace24msh5dc982aad14590dp13c755jsn1e689b054293",
//     "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
//   },
// };
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
//   const fetchData = useCallback (async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       const newData = JSON.parse(result);
//       console.log(newData.hints);
//       setData([...newData.hints]);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   },[])
//   useEffect(() => {
//     fetchData();
//   }, []);
//   if (loading) {
//     return <>Loading...</>;
//   }
//   console.log(data);
  return (
    <div className="container ">
      <div className="row ms-auto">
        {data.map((item) => {
          return (
            <div className="col-md-4">
              <ProductListingCard
                // key={item.food.foodId}
                // image={item.food.image}
                // title={item.food.knownAs}
                // nutrients={item.food.nutrients}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
