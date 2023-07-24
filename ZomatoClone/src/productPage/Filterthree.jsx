import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../UI/filter";
import { useState } from "react";
import Modal from "../UI/Modal";
const filterInfo = [
    {
        name:"Filter",
        svg:<><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="bi bi-funnel" viewBox="0 0 16 16">
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
      </svg></>

    },
    {
        name:"Rating 4.0",
        svg:<>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-plus" viewBox="0 0 16 16">
  <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg>
        </>
    },
    {
     name:"Cuisine",
     svg:<><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
     <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
   </svg></>
    }
]
const Filterthree = () => {
  const [isOpen,setIsOpen] =  useState(false)
   const ongettingdata = (data)=>{
        console.log(data)
        setIsOpen(data)
   }
  return (
    <>
    {isOpen && <Modal>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
      </Modal>}
      <div id="Filter" classNameName={`container-fluid ms-0 d-flex mt-4 fs-6 p-2 bg-white rounded sticky-top`}>
       {filterInfo.map((item)=>{
           return <div classNameName="mx-4 border border-primary-subtle p-1 rounded">
            <Filter showModalFunction={ongettingdata} name={item.name} svg={item.svg}/>
           </div> 
      })}
      </div>
      <div id="firstOrderDishes"></div>
      <div id="TopBrands"></div>
      <div id="DeliveryRestraunt"></div>
      </>
  );
};

export default Filterthree;
