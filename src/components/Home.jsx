import { Link } from 'react-router-dom';
import danche from '../assets/home/desktop/image-danche.png'
import granEspresso from '../assets/home/desktop/image-gran-espresso.png'
import piccollo from '../assets/home/desktop/image-piccollo.png'
import planalto from '../assets/home/desktop/image-planalto.png'

import iconCoffee from '../assets/home/desktop/icon-coffee-bean.svg'
import iconGift from '../assets/home/desktop/icon-gift.svg'
import iconTruck from '../assets/home/desktop/icon-truck.svg'



function Home() {
 return ( 
  <>
   <div className='great--coffee'>
    <h1>Great coffee made simple.</h1>
    <p>
      Start your mornings with the world’s best coffees. Try our expertly curated artisan 
      coffees from our best roasters delivered directly to your door, at your schedule.
    </p>
    <Link> Create your plan</Link>

   </div>
   <div className='our--collection'>
      <h2>Our collection</h2>
      <div className='flex--container'>
        <div>
          <div>
            <img src={granEspresso} alt='' />
          </div>
          <div>
            <h3>Gran Espresso</h3>
            <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
          </div>
         
          
        </div>
        <div>
          <div>
            <img src={planalto} alt="" />
          </div>
          <div>
            <h3>Planalto</h3>
              <p> Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
          </div>
        </div>
        <div>
          <div>
            <img src={piccollo} alt="" />
          </div>
          <div>
            <h3>Piccollo</h3>
            <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
          </div>
          
        
        </div>
        <div>
          <div>
              <img src={danche} alt="" />
          </div>
          <div>
            <h3>Danche</h3>
            <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
          </div>
        
          
        </div>
      </div>
   </div>
   <div className='why--choose--us'>
      <h2>Why choose us?</h2>
      <p className='info'>
        A large part of our role is choosing which particular coffees will be featured 
        in our range. This means working closely with the best coffee growers to give 
        you a more impactful experience on every level.
      </p>
      <div>
        <div className='reasons'>
          <div>
            <img src={iconCoffee} alt="" />
          </div>
          <div>
            <h3>Best quality</h3>
            <p>
              Discover an endless variety of the world’s best artisan coffee from each of our roasters.
            </p>
          </div>
        </div>
        <div className='reasons'>
          <div>
            <img src={iconGift} alt="" />
          </div>
          <div>
            <h3>Exclusive benefits</h3>
            <p>
              Special offers and swag when you subscribe, including 30% off your first shipment.
            </p>
          </div>
        </div>
        <div className='reasons'>
          <div>
            <img src={iconTruck} alt="" />
          </div>
          <div>
            <h3>Free shipping </h3>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
            </p>
          </div>
        </div>
        </div>

   </div>
   <div className='how--it--works'>
    <h2>How it works</h2>
    <div className='progress--bar'>
      <span></span>
      <span></span>
      <span></span>
      <div></div>
    </div>

    <div className='steps'>
      <div>
        <span>01</span>
        <h4 className='pick--your--coffee'>Pick your coffee</h4>
        <p>
          Select from our evolving range of artisan coffees. Our beans are ethically 
          sourced and we pay fair prices for them. There are new coffees in all profiles 
          every month for you to try out.
        </p>
      </div>
      <div>
        <span>02</span>
        <h4>Choose the frequency</h4>
        <p className='choose--TH--p'>  
          Customize your order frequency, quantity, even your roast style and grind type. 
          Pause, skip or cancel your subscription with no commitment through our online portal.
        </p>
      </div>
      <div>
        <span>03</span>
        <h4>Receive and enjoy!</h4>
        <p className='RE--p'>
            We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
            world-class coffees curated to provide a distinct tasting experience.
        </p>
      </div>
    </div>

    <a href="">Create your plan</a>
   </div>
   <div></div>
  </>
  );
}

export default Home;