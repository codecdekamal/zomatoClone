import { createPortal } from 'react-dom';
import styles from "../app.module.css"
const Backdrop = ()=>{
    return(
        <>
    <div className={styles.backdrop} onClick={onClick}></div>
        </>
    )
}
const ModalOverlay = ()=>{
    return (
          <>
         <div>
          <div>
 <button>onclose</button>
          </div>
          <div>

          </div>
         </div>
          </>
        
    )
}

const Modal = ({isOpen, onClose, children }) => {
  return (
    <>
      {createPortal(<ModalOverlay>{children}</ModalOverlay>,document.getElementById("Modaloverlay"))}
   {createPortal(<Backdrop />,document.getElementById("backdrop"))}
    </>
  )
}

export default Modal;
