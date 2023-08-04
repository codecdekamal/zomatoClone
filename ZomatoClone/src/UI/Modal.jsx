import styles from "./Modal.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {createPortal} from "react-dom"
const BackDrop = () =>{
    return <div className={styles.backdrop }></div>
}
const ModalOverlay = (props) =>{
  return <div className={styles.modal}>
          {props.children}
  </div>
}
const Modal = (props) => {
  return (
    <>
      {createPortal(<BackDrop></BackDrop>,document.getElementById("overlay"))}
      {createPortal(<ModalOverlay >{props.children}</ModalOverlay>,document.getElementById("overlay"))}

    </>
  )
}

export default Modal
