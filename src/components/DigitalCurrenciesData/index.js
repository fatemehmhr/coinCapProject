import './DigitalCurrenciesData.scss';


export default function DigitalCurrenciesData({name,symbol,high,low,average,change}){

    return(
        <>
            <div className='header-digital-currency'>
                <div className='dataWrapper' >
                    <div className='data-digital-currency' >
                        <div className='col-left-data-digital-currency'>
                            <div className='img-col-left-data-digital-currency'>
                                <img  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} />
                            </div>
                            <div className='text-col-left-data-digital-currency'>
                                <h3>{name}<br/><span>{`(${symbol})`}</span></h3>
                            </div>
                        </div>
                        <div className='col-right-data-digital-currency'>
                            <div className='columnLeft-right-data-digital-currency' >
                                <h5>
                                    <span>HIGH</span>
                                    <span>{`$ ${high} `}</span>
                                </h5>
                                <h5>
                                    <span>LOW</span>
                                    <span>{`$ ${low}`}</span>
                                </h5>
                            </div>
                            <div className='columnRight-right-data-digital-currency'>
                                <h5>
                                    <span>AVERAGE</span>
                                    <span>{`$ ${average}`}</span>
                                </h5>
                                <h5>
                                    <span>CHANGE</span>
                                    <span>{`$ ${change}`}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* <div className='chart-digital-currency'>chart</div> */}
                </div>
                {/* <div className='card-digital-currency'>
                    <div className='card-digital-currency-swap'>
                         content wallet
                    </div>
                </div> */}
            </div> 
         </>
    )
}