import { createPortal } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Backdrop = () => {
  return (
    <>
      <div id="backdrop"></div>
    </>
  );
};
const ModalOverlay = () => {
  
  return (
    <>
{/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis deserunt culpa, inventore distinctio eligendi amet ad aspernatur, accusantium placeat illo, fugit maiores.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

const Modal = () => {
  const portal = createPortal(
    <ModalOverlay></ModalOverlay>,
    document.getElementById("overlay")
  );
  return (
    <>
      {portal}
    </>
  );
};

export default Modal;
