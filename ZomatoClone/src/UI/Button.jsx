import { useState } from "react";
const Button = ({ name,onClick }) => {
    const [active , showActive] = useState(false);
    const onClickEventHandler = () =>{
          showActive(true)
          
    }
    
  return (
    <>
      <button 
      onClick={onClickEventHandler}
        type="button"
        className={`list-group-item list-group-item-action ${active ? "active":""}`}
        aria-current="true"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
