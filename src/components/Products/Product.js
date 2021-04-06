import Tabstipslib from "./Tabstipslib";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Product(props) {
  console.log(props);

  const product = props.location.query;

  return (
    <div className="product_page section height100">
      <div className="left width70">
        <h2>{product.title}</h2>
        <h5>{product.describe}</h5>
        <h4>{product.question}</h4>
        <HashLink to="/#distributors"><button type="button">לרכישה אונליין</button></HashLink>
        {/* <Link to="/distributors">
          <button type="button">לרכישה אונליין</button>
        </Link> */}
        <HashLink to="/#distributors">
          <button type="button">לאיסוף מיידי ממפיצה</button>
        </HashLink>
      </div>
      <div className="flex">
        <img src={product.primarying} />
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
