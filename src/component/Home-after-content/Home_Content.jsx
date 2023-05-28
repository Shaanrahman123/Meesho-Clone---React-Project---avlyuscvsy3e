
import React from 'react'
import '../Home-after-content/Home_Content.css'
import freeDelivery from '../../img/freeDelivery.svg'
import cod from '../../img/cod.svg'
import Easyreturn from '../../img/easyReturns.svg'
import playstore from '../../img/playStore.png'
import homeBanner from '../../img/home-banner.jpg'
import topCatLeft from '../../img/topCatLeft.jpg'
import topCatRightOne from '../../img/topCatRightOne.jpg'
import topCatRightTwo from '../../img/topCatRightTwo.jpg'
import homeDecor from '../../img/essential/homeDecor.jpg'
import kitchenAppliances from '../../img/essential/kitchenAppliances.jpg'
import healthCare from '../../img/essential/healthCare.jpg'
import homeDecorButton from '../../img/essential/homeDecorButton.jpg'
import kitchenAppliancesButton from '../../img/essential/kitchenAppliancesButton.jpg'
import healthCareButton from '../../img/essential/healthCareButton.jpg'
import essentialButton from '../../img/essential/essentialButton.jpg'

const Home_Content = () => {
    return (
        <div className='section'>
            <div className="container">
                {/* home container one  */}
                <div className="inner-content">
                    <div className="left-content">
                        <h1>Lowest Prices <br />
                            Best Quality Shopping</h1>
                        <div className="offer">
                            <div className="free-delivery">
                                <img src={freeDelivery} className='img-icon' alt='delivery' />
                                <span className='text'>Free Delivery</span>
                            </div>
                            <div className="cash-on-delivery">
                                <img src={cod} className='img-icon' alt='cod' />
                                <span className='text'>Cash on Delivery</span>
                            </div>
                            <div className="easy-return">
                                <img src={Easyreturn} className='img-icon' alt='return' />
                                <span className='text'>Easy Return</span>
                            </div>
                        </div>
                        <div className="button-top">
                            <img src={playstore} className='btn-img' alt='playstore' />
                            <span className='btn-text'>Download the Meesho App</span>
                        </div>
                    </div>
                    <div className="right-content">
                        <img src={homeBanner} className='' alt='banner' />

                    </div>
                </div>
                {/* home container one  */}

                {/* home container two  */}
                <div className="topCategoriesTitle">
                    <div className="lineLeft"></div>
                    <span>Top Categories to choose from</span>
                    <div className="lineRight"></div>
                </div>

                <div className="topCategoriesMain">
                    <div className="topCatLeft">
                        <img src={topCatLeft} alt="topcatleft" />
                    </div>
                    <div className="topCatRight">
                        <div className="topCatRightOne">
                            <img src={topCatRightOne} alt="topcatleft" />
                        </div>
                        <div className="topCatRightTwo">
                            <img src={topCatRightTwo} alt="topcatleft" />
                        </div>
                    </div>
                </div>
                {/* home container two  */}

                {/* home essestial  */}

                <div className="essentialMain">
                    <div className="essentialLeft">
                        <div className="viewButton">
                            <img src={essentialButton} alt="essential" />
                        </div>
                    </div>
                    <div className="essentialRight">
                        <div className="essentialRightImg">
                            <img src={homeDecor} alt="decor" className='one' />
                            <img src={homeDecorButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={kitchenAppliances} alt="decor" className='one' />
                            <img src={kitchenAppliancesButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={healthCare} alt="decor" className='one' />
                            <img src={healthCareButton} alt="decorButton" className='two' />
                        </div>
                    </div>
                </div>

                {/* home essestial  */}

                {/* new styles  */}

                <div className=" newStyleMain">
                    <div className="essentialLeft">
                        <div className="viewButton">
                            <img src={essentialButton} alt="essential" />
                        </div>
                    </div>
                    <div className="essentialRight">
                        <div className="essentialRightImg">
                            <img src={homeDecor} alt="decor" className='one' />
                            <img src={homeDecorButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={kitchenAppliances} alt="decor" className='one' />
                            <img src={kitchenAppliancesButton} alt="decorButton" className='two' />
                        </div>
                        <div className="essentialRightImg">
                            <img src={healthCare} alt="decor" className='one' />
                            <img src={healthCareButton} alt="decorButton" className='two' />
                        </div>
                    </div>
                </div>


                {/* new styles  */}
            </div>
        </div>
    )
}

export default Home_Content
