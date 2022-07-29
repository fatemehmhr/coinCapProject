import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import Layout from 'antd/lib/layout/layout';
import './DigitalCurrency.scss';
import DigitalCurrenciesData from '../../DigitalCurrenciesData';
import { digitalCurrency } from '../../../requests/digitalCurrencies';
import DigitalCurrenciesIdContext from '../../Context/DigitalCurrenciesIdContext';
import SymbolContext from '../../Context/SymbolContext';


///////////////////////////////////////////////////////////////////////////////////////
const DigitalCurrency = () => {

    const {  Content  } = Layout;
    const { id } = useParams() ;

    // const [item,setItem] = useState({});
    const {currenyId,setCurrencyId} = useContext(DigitalCurrenciesIdContext);
    const {symbol,setSymbol} = useContext(SymbolContext);
    const [error,setError] = useState("");

    useEffect(()=>{
      getDigitalCurrency(id);
    },[])

    const getDigitalCurrency = async (id) => {
      await digitalCurrency(id).then((response) => {
        setCurrencyId(response.data.data);
        setSymbol(response.data.data.symbol);
      }).catch((error)=>{
        setError(error.message);
      })
    }

    return(
      <>
        <Content  style={{display:'flex',margin:'100px 0 40px 0 '}}>
            <div className="digital-currency">
              {currenyId !== null && (
                <>
                <DigitalCurrenciesData
                  symbol={symbol}  ///get data from state///
                  // high={currenyId.changePercent24Hr} 
                  high={((Math.round(currenyId.changePercent24H)*100)/100)} 
                  low={currenyId.supply}
                  average={currenyId.marketCapUsd}
                  change={currenyId.vwap24Hr}
                  name={currenyId.name}
                  key={currenyId.id}
                  />
                </>
              )}
            </div>
        </Content>
      </> 
    )
}
export default DigitalCurrency;














