import React from 'react';
import "../css/home.css";


export const Home = () => {
  return (
    <div>
        <h1>Home Component</h1>
        <div className='add-to-cart'>
            <img src="https://imgs.search.brave.com/__iHC9IktJVx_DO1AB8HpxTmMOuVscwodLv2vbrE_sM/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9DYXJ0/LVBORy1JbWFnZS5w/bmc"/>
        </div>
        <div className='home-fl'>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
              <img src='https://imgs.search.brave.com/KdhRrUBFSMGs1PClheU6ONDc8L9rg07ckFrHXCvvra4/rs:fit:1024:1024:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvaXBob25lLTZz/LXBuZy1pbWctNDMy/NC1pcGhvbmU2LXNp/bHZlci1wb3J0cmFp/dC16cHM1ZjRkNGZl/NS1pbWctNDMyNC1p/cGhvbmU2LXNpbHZl/ci1wb3J0cmFpdC16/cHM1ZjRkNGZlNS0x/MDI0LnBuZw'/>
            </div>
        </div>
        <div className='text-wrapper item'>
          <span>
            I - Phone
          </span>
          <span>
           Price :100$
          </span>
        </div>
        <div className='btn-wrapper item'>
            <button> Add to Cart</button>
        </div>
        </div>
    </div>
  )
}
export default Home;