import "bootstrap/dist/css/bootstrap.min.css";

const Filter = (props) => {
  const onClickEventHandler = () => {
    props.onGettingdata(true)
  };
  // const onCloseEventHandler = () => {
  //   props.onClick(showModal)
  //   setShowModal(false);
  // };
  return (
    <> 
      <button
        onClick={onClickEventHandler}
        className="icon-link icon-link-hover text-decoration-none col justify-start min-w-full"
        style={{ "--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
        href="#"
      >
        {props.svg}
        {props.name}
      </button>
    </>
  );
};

export default Filter;
