import Card from "../UI/Card";
import "bootstrap/dist/css/bootstrap.min.css";
const info = [
  {
    heading: "Order Online",
    text: "stay home and order online to your doorstep",
    url:"orderOnline"
  },
  {
    heading: "Dinning",
    text: "View the city favourite dinning venues",
    url:"dinning"
  },
  {
    heading: "Nightlife and clubs",
    text: "Explore the city top nightClub",
    url:"nightlifeAndClubs"

  },
];

const ProductPage = () => {
    return (
      <div className="container row ">
        {info.map((item,index) => {
          return <Card key={index} heading={item.heading} text={item.text} url={item.url} />;
        })}
      </div>
    );
  };
export default ProductPage;
