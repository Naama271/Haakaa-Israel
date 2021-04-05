import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Notrhdata from './Distributorsdata';
import Centerdata from './Distributorsdata';
import Southdata from './Distributorsdata';


function Tabslib (){
  return (
    <div>
      <Tabs direction={'rtl'}>
        <TabList>
          <Tab >צפון</Tab>
          <Tab>מרכז</Tab>
          <Tab>דרום</Tab>
          <Tab>רכישה אונליין</Tab>
        </TabList>
        <TabPanel>
        <h4>מפיצות בצפון </h4>
       <Notrhdata />
        </TabPanel>
        <TabPanel>
        <h4>מפיצות במרכז ובירושלים</h4>
        <Centerdata />
        </TabPanel>
        <TabPanel>
        <h4>מפיצות בדרום </h4>
        <Southdata />
        </TabPanel>
        <TabPanel>
          <h4>רכישה מהירה אונליין </h4>
          <table>
      <tbody >
       <tr>
         <td>אלפא מאם </td>
        <td><a href="https://www.alphamom.co.il">www.alphamom.co.il</a></td>
        <td><a href="https://wa.me/972523505066"><img src="./images/1x/whatsapp.png" /></a> </td>
      </tr>  
       <tr>
          <td>אמהות</td>
           <td><a href="https://www.imahot-design.com">www.imahot-design.com</a></td>
        <td><a href="https://wa.me/972523494220"><img src="./images/1x/whatsapp.png" /></a> </td>
 
      </tr>  
      <tr>
       <td> בייבי קואלה</td>
        <td><a href="https://baby-koala.com">www.baby-koala.com</a></td>
        <td><a href="https://wa.me/972542003252"><img src="./icons/whatsapp.png" /></a> </td>
      </tr>  
    </tbody>
  </table>
        </TabPanel>
      </Tabs>
    </div>
  );





}

export default Tabslib;