import { useRef, useState } from 'react';
import arrow from '../assets/plan/desktop/icon-arrow.svg'
import useMultiRefs from '../utils'
import { useEffect } from 'react';


function Plan() {
   const [multiRef,addMultiRef] = useMultiRefs()
   
  
   const [st ,setSt] = useState(null)
   const [windowWidth,setWindowWidth] = useState(window.innerWidth)
   const [obj,setObj] = useState({
      userCoffee:''
   })

   

   useEffect(() => {
      const elements = multiRef()
      setSt(elements)
      window.addEventListener('resize',function(){
         setWindowWidth(this.window.innerWidth)
      })
      return () => {
         window.removeEventListener('resize',function(){
            setWindowWidth(this.window.innerWidth)
         })
      }
   },[])


   function handleClick(id){
   //   console.log(st[0].children[0])
      for(const child of st[0].children){
         // console.log(child)
         child.classList.remove('active')
      }
      if( id === 1 ){
      
         st[0].children[0].classList.add('active')
         st[1].classList.toggle('arrow')
         st[2].classList.toggle('hide')
         st[3].classList.remove('arrow')
         st[4].classList.add('hide')
      }else if(id === 2){
         st[0].children[1].classList.add('active')
         st[1].classList.remove('arrow')
         st[2].classList.add('hide')
         st[3].classList.toggle('arrow')
         st[4].classList.toggle('hide')
      }else if(id === 3){
        
         st[0].children[2].classList.add('active')
         st[3].classList.remove('arrow')
         st[4].classList.add('hide')
         st[5].classList.toggle('arrow')
         st[6].classList.toggle('hide')
      }else if(id === 4){
        
         st[0].children[3].classList.add('active')
         st[5].classList.remove('arrow')
         st[6].classList.add('hide')
         st[7].classList.toggle('arrow')
         st[8].classList.toggle('hide')
      }
      else{
         
         st[0].children[4].classList.add('active')
         st[7].classList.remove('arrow')
         st[8].classList.add('hide')
         st[9].classList.toggle('arrow')
         st[10].classList.toggle('hide')
      }

      
     
     
      
      
    
   }

   function activeClick(e, num){
      // const elements = multiRef()
 


      e.target.parentElement.classList.toggle('active')
      
       
   }
   // console.log(obj)
  
 return (
  <>
   <div className='create--a--plan'>
      <h1>Create a plan</h1>
      <p>
         Build a subscription plan that best fits your needs. 
         We offer an assortment of the best 
         artisan coffees from around the globe delivered fresh to your door.
      </p>
   </div>
   <div className='plan'>
       <div className='progress--bar'>
         <span></span>
         <span></span>
         <span></span>
         <div></div>
       </div>
     
      <div className="flx">
         <div>
            <span>01</span>
            <h2>Pick your coffee</h2>
            <p>
               Select from our evolving range of artisan coffees. Our beans are ethically
               sourced and we pay fair prices for them. There's new coffees in all profiles
               every month for you to try out.
            </p>
         </div>
         <div>
            <span>02</span>
            <h2>Choose the frequency</h2>
            <p>
               Customize your order frequency, quantity, even your roast style and grind type.
               Pause, skip or cancel your subscription with no commitment through our online portal.
            </p>
         </div>
         <div>
            <span>03</span>
            <h2>Receive and enjoy!</h2>
            <p>
               We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
               world-class coffees curated to provide a distinct tasting experience.
            </p>
         </div>
      </div>
      
   </div>
   <div className="questions">
      <div>
         <div ref={addMultiRef} className='stps'>
            <p className='active'><span>01</span> Preferences</p>
            <p><span>02</span> Bean type</p>
            <p><span>03</span> Quantity</p>
            <p><span>04</span> Grind option</p>
            <p><span>05</span> Deliveries</p>
         </div>      
         <div>
            <div onClick={() =>handleClick(1)}  className='Q'>
                 <h3 >How do you drink your coffee? </h3>
                 <img ref={addMultiRef} src={arrow} alt='' className={`${windowWidth >= 850 && 'arrow'}`}  />
            </div>
            <div className={`f ${windowWidth >= 850 ?'' :'hide'}`} ref={addMultiRef}  >
               <div  onClick={(e) => activeClick(e,1)}>
                  <h3>Capsule</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
               </div>
               <div onClick={(e) =>activeClick(e,2)}>
                  <h3>Filter</h3>
                  <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
               </div>
               <div  onClick={(e) =>activeClick(e,3)}>
                  <h3>Espresso</h3>
                  <p>Dense and finely ground beans for an intense, flavorful experience</p>
               </div>
            </div>

            <div  className='Q'  onClick={() => handleClick(2)}>
                 <h3 >What type of coffee? </h3>
                 <img  ref={addMultiRef} src={arrow} alt='' />
            </div>

            <div className='f hide' ref={addMultiRef}  >
               <div  onClick={activeClick}>
                  <h3>Single origin</h3>
                  <p> Distinct, high quality coffee from a specific family-owned farm</p>
               </div>
               <div  onClick={activeClick}>
                  <h3>Decaf</h3>
                  <p>Just like regular coffee, except the caffeine has been removed</p>
               </div>
               <div  onClick={activeClick}>
                  <h3>Blended</h3>
                  <p>Combination of two or three dark roasted beans of organic coffees</p>
               </div>
            </div>
            <div  className='Q'  onClick={() => handleClick(3)}>
                 <h3 >How much would you like? </h3>
                 <img  ref={addMultiRef} src={arrow} alt=''  />
            </div>
            <div className='f hide' ref={addMultiRef}  >
               <div  onClick={activeClick}>
                  <h3>250g</h3>
                  <p> Perfect for the solo drinker. Yields about 12 delicious cups.</p>
               </div>
               <div  onClick={activeClick}>
                  <h3>500g</h3>
                  <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
               </div>
               <div onClick={activeClick}>
                  <h3>1000g</h3>
                  <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
               </div>
            </div>
            <div   className='Q'  onClick={() => handleClick(4)}>
                 <h3 > Want us to grind them?</h3>
                 <img  ref={addMultiRef} src={arrow} alt=''  />
            </div>
            <div className='f hide' ref={addMultiRef}  >
               <div onClick={activeClick}>
                  <h3>Wholebean</h3>
                  <p> Best choice if you cherish the full sensory experience</p>
               </div>
               <div  onClick={activeClick}>
                  <h3>Filter</h3>
                  <p>For drip or pour-over coffee methods such as V60 or Aeropress</p>
               </div>
               <div  onClick={activeClick}>
                  <h3>Cafetiére</h3>
                  <p>Course ground beans specially suited for french press coffee</p>
               </div>
            </div>
            <div  className='Q'  onClick={() => handleClick(5)}>
                 <h3 >How often should we deliver?</h3>
                 <img  ref={addMultiRef} src={arrow} alt='' />
            </div>
            <div className='f hide' ref={addMultiRef}  >
               <div onClick={activeClick}>
                  <h3>Every week</h3>
                  <p>$14.00 per shipment. Includes free first-class shipping.</p>
               </div>
               <div onClick={activeClick}>
                  <h3>Every 2 weeks</h3>
                  <p> $17.25 per shipment. Includes free priority shipping.</p>
               </div>
               <div onClick={activeClick}>
                  <h3>Every month</h3>
                  <p>$22.50 per shipment. Includes free priority shipping.</p>
               </div>
            </div>
               <div className='summary'>
                  <h4>Order Summary</h4>
                  <p>
                     “I drink coffee my coffee as _____, with a _____ type of bean. _____ ground ala _____, 
                     sent to me _____.”
                  </p>
               </div>
            
          
         </div>
      </div>
   </div>
   
      <div className='submit'>
         <button><a>Create My Plan</a></button>
      </div>
  </>

   );
}

export default Plan;