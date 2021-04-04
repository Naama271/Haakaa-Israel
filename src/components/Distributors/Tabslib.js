import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function Tabslib (){
  return (
    <div>
      <Tabs direction={'rtl'}>
        <TabList>
          <Tab>צפון</Tab>
          <Tab>מרכז</Tab>
          <Tab>דרום</Tab>
          <Tab>רכישה אונליין</Tab>
        </TabList>
        <TabPanel>
        <h4>מפיצות בצפון </h4>
        <table>
        <tr><td>שירה לוי עיסוי תינוקות ליווי התפתחותי</td><td>פרדס חנה- כרכור</td><td>0506424797<a href="https://wa.me/9720506424797"><img src="assets/img/1x/whatsapp.png"></img></a>&nbsp;&nbsp;<a href="tel:0506424797"><svg class="svg-inline--fa fa-phone fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg> <i class="fas fa-phone"></i> </a></td></tr>
        </table>
        </TabPanel>
        <TabPanel>
        <h4>מפיצות במרכז ובירושלים</h4>
        </TabPanel>
        <TabPanel>
        <h4>מפיצות בדרום </h4>
        </TabPanel>
        <TabPanel>
          <h4>רכישה מהירה אונליין </h4>
          <table class="table table-hover" dir="rtl">

    <tbody id="southdis">
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