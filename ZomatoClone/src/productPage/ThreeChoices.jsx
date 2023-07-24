import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const ThreeChoices = () => {
  return (
    <>
              <div className="row gap-4">
                <Link to="Delivery" className="col  rounded-4 text-decoration-none  ">
                  <div className="icon col justify-center">
                    <div>
                      <img
                        src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                        alt="delivery"
                        height="50"
                      />
                    </div>
                    <div className="col">
                      <p className="font-semibold">Order Online</p>
                    </div>
                  </div>
                </Link>
                <Link className="col border-0 rounded-4 text-decoration-none ">
                  <div className="icon">
                    <img
                      height="50"
                      src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                      alt="Dinning"
                    />
                  </div>
                  <div className="nameOfIcon">Dinning</div>
                </Link>
                <Link className="col border-0 rounded-4 text-decoration-none ">
                  <div className="icon">
                    <img
                      height="50"
                      src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
                      alt="nightLife"
                    />
                  </div>
                  <div className="nameOfIcon">NightLife</div>
                </Link>
              </div>
    
    </>
  )
}

export default ThreeChoices
