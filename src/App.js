import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Layout } from 'antd';
import { NotFound } from './components/Routes/NotFound';
import { useState } from 'react';
import HeaderApp from './components/HeaderApp/index';
import FooterApp from './components/FooterApp';
import ContentWrapper from './components/ContentWrapper/index';
import Exchanges from './components/Routes/Exchanges';
import Swap from './components/Routes/Swap';
import DigitalCurrency from './components/Routes/DigitalCurrency';
import Search from './components/Routes/Search';
import DigitalCurrenciesContext from './components/Context/DigitalCurrenciesContext'; 
import DigitalCurrenciesIdContext from './components/Context/DigitalCurrenciesIdContext';
import SymbolContext from './components/Context/SymbolContext'



const App = () => {

  const [currency,setCurrency] = useState([]);
  const [currenyId,setCurrencyId] = useState([]);
  const [symbol,setSymbol] = useState("");

  const value = {
    currency,setCurrency
  }

  const currencyId = {
    currenyId,setCurrencyId
  }

  const symbolValue = {
    symbol,setSymbol
  }
 
  return(
     <BrowserRouter>
        <Layout>
          <DigitalCurrenciesContext.Provider value={value}>
            <DigitalCurrenciesIdContext.Provider value={currencyId}>
              <SymbolContext.Provider value={symbolValue} >
                  <HeaderApp />
                  <Routes>
                    <Route path='/' element={<ContentWrapper />} />
                    <Route path='/assets/:id' element={<DigitalCurrency />} />
                    <Route path='/exchanges' element={<Exchanges />} />
                    <Route path='/swap' element={<Swap />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                  <FooterApp />
              </SymbolContext.Provider>
            </DigitalCurrenciesIdContext.Provider>
          </DigitalCurrenciesContext.Provider>
        </Layout>
      </BrowserRouter>  
  )
}
export default App;


