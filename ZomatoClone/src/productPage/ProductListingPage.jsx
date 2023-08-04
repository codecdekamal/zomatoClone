import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ThreeChoices from "./ThreeChoices";
import Filterthree from "./Filterthree";
import Product from "./Product";
import { useState } from "react";
const ProductListingPage = () => {
  const [show,setShow] = useState(true)
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
          <div id="container">
            <div className="container ms-0 pt-4">
              <ThreeChoices />
            </div>
          </div>
        <section>
          <Filterthree/>
        </section>
        <section>
          <Product/>
        </section>
      </main>
    </>
  );
};

export default ProductListingPage;
