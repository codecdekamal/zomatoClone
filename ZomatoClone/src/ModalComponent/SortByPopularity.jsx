import { useState } from "react";

const SortByPopularity = () => {
  const [value, setValue] = useState("");
  const onChangeEventHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <>
      <div className="input-group float-start">
        <div className="input-group-text">
          <input
            onChange={onChangeEventHandler}
            className="form-check-input mt-0"
            type="radio"
            value=""
            aria-label="Radio button for following text input"
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
        />
      </div>
      <div className="input-group ">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="radio"
            value=""
            aria-label="Radio button for following text input"
          />
        </div>
        <input
          onChange={onChangeEventHandler}
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
        />
      </div>
      <div className="input-group ">
        <div className="input-group-text">
          <input
            onChange={onChangeEventHandler}
            className="form-check-input mt-0"
            type="radio"
            value=""
            aria-label="Radio button for following text input"
          />
        </div>
        <input
          onChange={onChangeEventHandler}
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
        />
      </div>
      <div className="input-group ">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="radio"
            value=""
            aria-label="Radio button for following text input"
          />
        </div>
        <input
          onChange={onChangeEventHandler}
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
        />
      </div>
    </>
  );
};

export default SortByPopularity;
