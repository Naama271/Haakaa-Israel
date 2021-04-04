
//import './App.css';
import Distributorslist from './Distributorslist';
import Tabslib from './Tabslib';
import Disdata from './Distributorsdata';

//import { Rsuittable } from "./rsuitTable.js";

function Distributors() {
  return (
    <div className="width100 " >
 <Disdata />
<Tabslib />
<Distributorslist />
    </div>
  );
}

export default Distributors;
