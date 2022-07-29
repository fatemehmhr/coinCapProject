import './HeaderContentData.scss';

const HeaderContentData = () => {
    return(
        <div className='header-content-data'>
            <div className='header-content-data-container'>
                <div className='header-content-data-text-container'>
                  <div className='header-content-data-text'>MARKET CAP</div>
                  <div>
                    <p className='header-txt'>$1.21T</p>
                  </div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='header-content-data-text'>EXCHANGE VOL</div>
                  <div>
                    <h2 className='header-txt'>$43.39B</h2>
                  </div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='header-content-data-text'>ASSETS</div>
                  <div>
                  <h2 className='header-txt'>2,295</h2>
                  </div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='header-content-data-text'>EXCHANGES</div>
                  <div>
                  <h2 className='header-txt'>73</h2>
                  </div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='header-content-data-text'>MARKETS</div>
                  <div>
                  <h2 className='header-txt'>14,925</h2>
                  </div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='header-content-data-text'>BTC DOM INDEX</div>
                  <div>
                  <h2 className='header-txt'>31.0%</h2>
                  </div>
                </div>
            </div>
          </div>
    )
}
export default HeaderContentData;



