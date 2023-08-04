import Modal from "./Modal";
import { useState } from "react";
const ModalForFilter = () => {
 const [value, setValue] = useState([]);
 const []
  const onChangeEventHandler = (e) => {
  //  console.log(e.target.value)
    setValue(e.target.value)
    // if(e.target.value==="on"){
    // setValue(true)
    // }
    // else if(e.target.value === "off"){
    //   setValue(false)
    // }
    // console.log(value)

  };
  const onSubmitEventHandle = (e)=>{
  e.preventDefault()
   console.log(value)
  }
  return (
    <>
      <Modal >
        <div className="container">
          <div className="row pt-2">
            <ul className="col-3">
              <li className="list-unstyled ">Sort by</li>
              <li>Cuisine</li>
              <li>Rating</li>
              <li>Cost per person</li>
              <li>More filters</li>
            </ul>
            <ul className="col-9">
              <form  onSubmit={onSubmitEventHandle}>
              <li>
                <input
                  onChange={onChangeEventHandler}
                  type="checkbox"
                  name="popularity"
                  id="Popularity"
                />
                <label htmlFor="Popularity">Popularity</label>
              </li>

              <li>
                <input
                  onChange={onChangeEventHandler}
                  type="checkbox"
                  name="Rating:High to Low"
                  id="Rating:High to Low"
                />
                Rating:High to Low
              </li>
              <li>
                <input
                  onChange={onChangeEventHandler}
                  type="checkbox"
                  name="Delivery Time"
                  id="Delivery Time"
                />
                Delivery Time
              </li>
              <li>
                <input
                  onChange={onChangeEventHandler}
                  type="checkbox"
                  name="Cost:Low to High"
                  id=" Cost:Low to High"
                />
                Cost:Low to High
              </li>
              <li>
                <input
                  onChange={onChangeEventHandler}
                  type="checkbox"
                  name="Cost high to Low"
                  id="                Cost high to Low
                  "
                />
                Cost high to Low
              </li>
              <button className="btn btn-danger ">Submit</button>
              </form>
              </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalForFilter;
