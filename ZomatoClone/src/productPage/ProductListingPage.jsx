import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import ThreeChoices from "./ThreeChoices";
import { useState } from "react";
import Modal from "../UI/Modal";
const ProductListingPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <div id="container">
            {/* this is for pagination   */}
            <div id="pagination"></div>
            {/* delivery, dineout,nightlife */}
            <div className="container ms-0 pt-4">
          <ThreeChoices/>
         </div>
          </div>
        </section>
         <Outlet></Outlet>
        <section>
          <div className="container"> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, voluptate id velit cupiditate aspernatur vitae quae reprehenderit deserunt iure necessitatibus quas nisi fugit, dolorem ullam porro aperiam magni consectetur tenetur consequatur sunt alias dolorum, provident numquam officiis? Vitae, ea. Maxime, minima unde atque id, sequi rerum nihil facere inventore culpa laboriosam doloribus ad labore praesentium pariatur aliquid autem perferendis excepturi. Hic doloremque quibusdam eaque vel accusamus quidem sed deleniti asperiores aperiam nisi distinctio autem magni esse soluta, molestias numquam? Molestias earum iste amet enim laboriosam, odio libero dolorem, rerum ipsa architecto nulla officiis accusamus possimus asperiores et dicta cumque sint quisquam animi quam perspiciatis. Veniam inventore temporibus laboriosam incidunt quo ipsum, omnis quibusdam debitis odio, tenetur nobis quia recusandae nemo iusto totam magnam voluptatem error consequatur voluptas velit ut non cupiditate cumque? Vero asperiores unde quod, voluptate blanditiis cumque nisi eligendi a ipsam vel doloremque eveniet 
            deleniti iure reiciendis nihil itaque. Recusandae dicta similique, porro fugit voluptas numquam enim atque vero quae iste fugiat! Sapiente consequuntur doloribus tenetur earum ducimus hic consequatur voluptatum esse sequi rem placeat, similique fugiat veritatis iste quaerat perspiciatis doloremque velit itaque a dignissimos deserunt. Veniam.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductListingPage;
