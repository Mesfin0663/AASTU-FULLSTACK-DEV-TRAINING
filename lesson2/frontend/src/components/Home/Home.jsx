import React from 'react'
import './home.css'
function Home() {
  return (
    <>
      <div className='home_container'>
        <div className='welcome_box'>
          <div className='left'>

            <h1>Welcome to Habesha Store</h1>
            <p>Buy what you want from habesha store, evry product on this platfrom has 50% discount.</p>

            <p>Sell your products on habesha store we will take care of shipping .</p>

            <button>Start Shopping Now</button>
          </div>
          <div className='right'>
            <img className='hero_image' src="https://www.netsolutions.com/insights/wp-content/uploads/2023/05/15-eCommerce-trends-to-watch-out-for-in-2023.png.webp" alt="" />

          </div>
        </div>


      </div>

    </>
  )
}

export default Home
