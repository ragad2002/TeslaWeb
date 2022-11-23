import './App.css';
import Header from './components/Header';
import item from './components/Item'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item.js';
function App() {
  return (
    <div className="App">
      < Header />
      <div className="app_itemContainer">
        <Item
        title='Lowest Cost Solar Panels in America'
        desc='Honey-back guarantee'
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnTxt= 'ORDER NOW'
        leftBtnLinke=''
        right8tnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='Model S'
        desc='$69,420'
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt= 'CUSTOM NOW'
        leftBtnLinke=''
        right8tnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item
        title='Model 3'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt= 'CUSTOM NOW'
        leftBtnLinke=''
        right8tnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='Model x'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt= 'CUSTOM NOW'
        leftBtnLinke=''
        right8tnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='Model Y'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt= 'CUSTOM NOW'
        leftBtnLinke=''
        right8tnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='Solar for New Roofs'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnTxt= 'ORDER NOW'
        leftBtnLinke=''
        right8tnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='Accessories'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={Accessories}
        leftBtnTxt= 'SHOP NOW'
        leftBtnLinke=''
        right8tnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons=''
        />
      </div>
      

    </div>
  );
}

export default App;
