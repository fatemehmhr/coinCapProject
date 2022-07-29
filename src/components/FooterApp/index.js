import React, { Fragment } from 'react';
import { Layout } from 'antd';
import './FooterApp.scss';
import {TwitterOutlined, FacebookOutlined } from "@ant-design/icons"

const { Footer } = Layout;

const FooterApp = () => {
    return(
        <Fragment>  
            <Footer className='FooterApp'>
                <div className='footerContainer'>

{/* /////////////////////////////////col-1//////////////////////////////////////////////////////////////////////////////////////////// */}

                    <div className='footerListItem'>
                        <div  className="item">
                            <a href="/methodology" className='itemTitle'>Methodology</a> 
                        </div>
                        <div  className="item">
                            <a href="https://shapeshift.zendesk.com/hc/en-us/requests/new" >Support</a>
                        </div>
                        <div className="item">
                            <a href="//docs.coincap.io">Our API</a>
                        </div>
                        <div  className="item">
                            <a href="/rate-compare">Rate Comparison</a>
                        </div>
                        <div  className="item">
                            <a href="https://shapeshift.com/careers">Careers</a>
                        </div>
                    </div>

    {/* ////////////////////////////////////////col-2/////////////////////////////////////////////////////////////////////////////// */}

                 <div className='footerListItem'>
                    <div  className='itemTitle'>LEGALS</div>
                    <div  className='listItemBox' >
                        <div  className="item">
                            <a href="https://assets.coincap.io/documents/terms_of_service.pdf">Terms of Service</a>
                        </div>
                        <div className="item">
                            <a href="https://shapeshift.com/privacy">Privacy Policy</a>
                        </div>
                    </div>
                    <div className='itemTitle'>DISCLAIMER</div>
                    <div>
                        <div>
                            <span className='listItemSpan'>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</span>
                        </div>
                    </div>
                </div>

    {/* //////////////////////////////////////////col-3///////////////////////////////////////////////////////////////////////////// */} 

                <div className='footerListItem'>
                    <div className='footer-txt'>FOLLOW US</div>
                    <a href="https://twitter.com/CoinCap_io">
                        <TwitterOutlined style={{color:'white', margin:'0 5px 0 0'}}/>
                    </a>
                    <a href="https://www.facebook.com/watch/?v=365220420785166">
                    <FacebookOutlined style={{color:'white'}} />
                    </a>
               </div>     

    {/* ////////////////////////////////////////col-4/////////////////////////////////////////////////////////////////////////////// */} 

                <div className='footerListItem'>    
                    <div className='footer-txt'>COINCAP APP AVAILABLE ON</div>
                        <div>
                            <div  className="item">
                                <a href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap" target="_blank">
                                    <img src="https://coincap.io/static/images/stores/google_play.svg" />
                                </a>
                            </div>
                            <div  className="item">
                                <a href="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&amp;ign-mpt=uo%3D4" >
                                    <img src="https://coincap.io/static/images/stores/apple_store.svg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
             </Footer>
        </Fragment> 
    )
}
export default FooterApp;

