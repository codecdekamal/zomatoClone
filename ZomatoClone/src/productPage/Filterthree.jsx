import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../UI/filter";
import FilterSvg from "../../public/FilterSvg";
const Filterthree = () => {
  console.log(FilterSvg)
   return (
     <>
       <div
         id="Filter"
         className={`container-fluid ms-0 d-flex mt-4 fs-6 p-2 bg-white rounded sticky-top`}
       >
         {FilterSvg.map((item) => {
           return (
             <div className="mx-4 border border-primary-subtle p-1 rounded">
               <Filter name={item.name} svg={item.svg} />
             </div>
           );
         })}
       </div>
       <div id="firstOrderDishes"></div>
       <div id="TopBrands"></div>
       <div id="DeliveryRestraunt"></div>
     </>
   );
};

export default Filterthree;
