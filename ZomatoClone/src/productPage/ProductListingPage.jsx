import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import ThreeChoices from "./ThreeChoices";
import { useState } from "react";
import Modal from "../UI/Modal";
const ProductListingPage = () => {
  const [showModal,setShowModal] = useState(false);
  return (
    <>
    {showModal && <Modal/>}
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
         <Outlet context={[showModal,setShowModal]}/>
        <section>
          <div className="container"> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, voluptate id velit cupiditate aspernatur vitae quae reprehenderit deserunt iure necessitatibus quas nisi fugit, dolorem ullam porro aperiam magni consectetur tenetur consequatur sunt alias dolorum, provident numquam officiis? Vitae, ea. Maxime, minima unde atque id, sequi rerum nihil facere inventore culpa laboriosam doloribus ad labore praesentium pariatur aliquid autem perferendis excepturi. Hic doloremque quibusdam eaque vel accusamus quidem sed deleniti asperiores aperiam nisi distinctio autem magni esse soluta, molestias numquam? Molestias earum iste amet enim laboriosam, odio libero dolorem, rerum ipsa architecto nulla officiis accusamus possimus asperiores et dicta cumque sint quisquam animi quam perspiciatis. Veniam inventore temporibus laboriosam incidunt quo ipsum, omnis quibusdam debitis odio, tenetur nobis quia recusandae nemo iusto totam magnam voluptatem error consequatur voluptas velit ut non cupiditate cumque? Vero asperiores unde quod, voluptate blanditiis cumque nisi eligendi a ipsam vel doloremque eveniet 
            deleniti iure reiciendis nihil itaque. Recusandae dicta similique, porro fugit voluptas numquam enim atque vero quae iste fugiat! Sapiente consequuntur doloribus tenetur earum ducimus hic consequatur voluptatum esse sequi rem placeat, similique fugiat veritatis iste quaerat perspiciatis doloremque velit itaque a dignissimos deserunt. Veniam.</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas sed nobis, praesentium placeat earum numquam tempora magni harum sapiente repellat officia eveniet eius odit, delectus quasi deleniti hic. Maxime, officiis, voluptates adipisci, ex numquam recusandae ad error fugiat 
            voluptas quaerat nostrum molestias harum dolorem ducimus aspernatur impedit saepe! Labore voluptatem sit odio fugiat, aut molestias aspernatur a deleniti reprehenderit et hic aperiam aliquid cum odit minima neque earum asperiores quo ea ipsa, voluptates deserunt. Natus est qui nobis odio impedit, tempora aliquam, vel excepturi dolorum doloribus ullam ipsam et earum iste voluptatibus, quae repellendus voluptates ipsum. Quisquam, possimus iste maxime excepturi omnis quibusdam.        
          
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores numquam veritatis laborum, vero cupiditate quas quasi molestiae hic. Alias dolore, dignissimos adipisci amet incidunt nostrum dicta, id, veniam vitae est tenetur asperiores necessitatibus error molestias labore dolores provident blanditiis eaque doloremque? Voluptatem possimus blanditiis fugiat nostrum ullam doloribus inventore neque harum assumenda iste! Nesciunt sit magnam obcaecati veritatis adipisci. Sed laboriosam sit harum blanditiis repellat maxime, placeat aperiam possimus eum dolorem ducimus nihil reiciendis magnam repudiandae, vero voluptate eveniet repellendus! Magni, hic, aliquid voluptatum optio adipisci mollitia, veritatis sequi at vero in ut quibusdam illo voluptas ratione esse! At vitae doloribus repudiandae dolorem! Reiciendis quibusdam maxime quos dicta vitae delectus veritatis, nihil quaerat dignissimos, necessitatibus officia aut corrupti unde odio voluptates numquam! Error nesciunt quibusdam quasi quia iste repellat nisi earum voluptatem laborum pariatur id labore quod ut enim deleniti ipsum quam voluptatum ullam sit odio corporis, alias distinctio sint. Voluptatibus repellendus pariatur nam facere nisi, eveniet consequuntur porro harum labore mollitia, nostrum similique voluptate possimus assumenda? Assumenda laboriosam rerum incidunt quaerat eaque necessitatibus quos architecto molestiae, vitae sapiente culpa quibusdam sequi iste, consectetur cum. Repellendus reprehenderit hic ex animi fugiat, alias modi adipisci, delectus quibusdam corrupti autem! Fugit placeat est consequuntur voluptatum mollitia perspiciatis eligendi sed nobis, cumque numquam laboriosam. Commodi nulla alias quam fugiat placeat, quae
           odit ipsa tempore cum pariatur deserunt? Sapiente, nisi fugit. Quaerat itaque, praesentium molestias tempora dicta ea consectetur? Nulla dolore natus, corporis aspernatur maxime sequi beatae facere fugiat magnam id expedita assumenda amet qui et unde. Facilis, voluptatum ratione veniam repudiandae voluptate ea id blanditiis quia recusandae atque eum quis totam illum odio quod dolore harum iure magnam cupiditate, sed enim reiciendis dicta nulla! Qui aliquid fugiat similique esse voluptatem temporibus nulla enim pariatur vero, tempora assumenda explicabo, provident autem, ex doloremque vitae.
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductListingPage;
