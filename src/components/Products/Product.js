import Tabstipslib from "./Tabstipslib";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Carousel } from "react-responsive-carousel";
import image from './images/2/difference.jpg';
import image2 from './images/2/GBHK010-W.jpg';
import image3 from './images/2/GBHK010-W_2(90ml).jpg';


import Carouselcomp from "./Carouselcomp";

function Product(props) {
 // console.log(props);
  const product = props.location.query;
  console.log(props.location.query.thumbimg);

  return (
    <div className="product_page height100">
      <div className="left width70">
        <h2>{product.title}</h2>
        <h5>{product.describe}</h5>
        <h4>{product.question}</h4>
        <HashLink to="/#distributors"><button type="button">לרכישה אונליין</button></HashLink>

        <HashLink to="/#distributors">
          <button type="button">לאיסוף מיידי ממפיצה</button>
        </HashLink>
      </div>
      <div className="flex">
       
        <Carousel dir="ltr" className="carousel">
      <div dir="ltr">
        <img src={product.primarying} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={product.thumbimg[1]} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={product.thumbimg[2]} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
        {/* <Carouselcomp /> */}
      </div>
      <div>
        <div className="right width70">
          <Tabs direction={"rtl"}>
            <TabList>
              <Tab>הוראות שימוש</Tab>
              <Tab>הוראות טיפול במוצר</Tab>
              <Tab>טיפ מאיתנו</Tab>
            </TabList>
            <TabPanel>
              <h4>הוראות שימוש </h4>
              <p>{product.use} </p>
            </TabPanel>
            <TabPanel>
              <h4>הוראות טיפול במוצר</h4>
              <p>{product.ins_clean} </p>
            </TabPanel>
            <TabPanel>
              <h4>טיפ מאיתנו </h4>
              <p>{product.tip} </p>
            </TabPanel>
          </Tabs>
        </div>
        <div className="left width30">
          <video key={product.id} autoPlay muted>
            <source src={product.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Product;
