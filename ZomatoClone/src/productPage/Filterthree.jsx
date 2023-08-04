import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../UI/filter";
import FilterSvg from "../../public/FilterSvg";
import ModalForFilter from "../UI/ModalForFilter";
import { useState } from "react";
const Filterthree = () => {
  const [showModal, setShowModal] = useState(false);
  const onClickEventHandler = (consent) => {
    setShowModal(consent);
  };
const onCloseEventHandler = ()=>{
  setShowModal(false)
}
   return (
     <>
      {showModal && (
           <ModalForFilter onClose = {onCloseEventHandler}></ModalForFilter>
      )}
       <div
         id="Filter"
         className={`container-fluid ms-0 d-flex mt-4 mb-3 fs-6 p-2 bg-white rounded border-separate`}
       >
         {FilterSvg.map((item,index) => { 
           return (
             <div  className=" col border-0 border-cyan-100  p-1 rounded ">
               <Filter key={index} onGettingdata = {onClickEventHandler} name={item.name} svg={item.svg} />
             </div>
           );
         })}
       </div>
     </>
   );
};

export default Filterthree;
