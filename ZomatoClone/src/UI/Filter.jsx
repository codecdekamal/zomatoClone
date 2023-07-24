import { useState } from "react"
import Modal from "./Modal"
const Filter = (props) => {
  const [showModal,setShowModal] = useState(false)
  const onClickEventHandler = () =>{
    setShowModal(true)
    props.showModalFunction(showModal)
  }
  return (
    <>
    <button onClick={onClickEventHandler} className="col  border-0">
    <div className="icon-link icon-link-hover text-decoration-none col justify-start" style={{ '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)' }} href="#">
            {props.svg} {props.name}
</div>
    </button>
    </>
  )
}

export default Filter
