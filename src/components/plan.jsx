import { useRef, useState } from 'react';
import arrow from '../assets/plan/desktop/icon-arrow.svg'
import useMultiRefs from '../utils'
import { useEffect } from 'react';


function Plan() {
   const [multiRef,addMultiRef] = useMultiRefs()
   
  
   
   const [windowWidth,setWindowWidth] = useState(window.innerWidth)
   const [obj,setObj] = useState({
      userCoffee:'',
      typeOfCoffee:'',
      amount:'',
      grind:'',
      oftenDelivery:''
   })
   const [priceOfDelivery,setPriceOfDelivery] = useState(null)

   

   useEffect(() => {
     
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

      const elements = multiRef()
       console.log(elements)
      // removing the active class of the steps div if there is any
      for(const el of elements[0].children){
         el.classList.remove('active')
      }
      // this if statment will toggle the arrow class and hide class depending on the id number and add active class to the steps div to tell the user which one they are opening

      if(id === 1){

         // adding active class to the steps div to tell the user which one they are opening 
         elements[0].children[0].classList.add('active')
         // toggiling active and hide class on the img and the div
         elements[1].classList.toggle('arrow')
         elements[2].classList.toggle('hide')
      }
      else if(id === 2){
          // adding active class to the steps div to tell the user which one they are opening 
         elements[0].children[1].classList.add('active')
         // toggiling active and hide class on the img and the div
         elements[3].classList.toggle('arrow')
         elements[4].classList.toggle('hide')
      }
      else if(id === 3){
         // adding active class to the steps div to tell the user which one they are opening 
         elements[0].children[2].classList.add('active')
         // toggiling active and hide class on the img and the div
         elements[5].classList.toggle('arrow')
         elements[6].classList.toggle('hide')
      }
      else if(id === 4) {
         // adding active class to the steps div to tell the user which one they are opening 
         elements[0].children[3].classList.add('active')
         // toggiling active and hide class on the img and the div
         elements[7].classList.toggle('arrow')
         elements[8].classList.toggle('hide')
      }
      else{
         // adding active class to the steps div to tell the user which one they are opening 
         elements[0].children[4].classList.add('active')
         // toggiling active and hide class on the img and the div
         elements[9].classList.toggle('arrow')
         elements[10].classList.toggle('hide')
      }
   

      
     
     
      
      
    
   }

   function activeClick(e){
      const elements = multiRef()
    
     
      for(const el of elements[2].children ){
         
         
          el.classList.remove('active')
          



          
         
      }
      

      e.target.parentElement.classList.toggle('active')
      
      if( e.target.parentElement.classList.contains('active')){
         // writing this statement bc if the user clicked on the blank (white space above the p tag) the app will crash
         if(e.target.parentElement.classList.contains('f')){
            return
         }
        
         
         const h3 = document.querySelector('.f .active  .user--coffee')
         console.log(h3)
         setObj(prev => {
            return {
               ...prev,
               userCoffee: prev.userCoffee = h3.textContent
            }
         })
      }
       
   }
   
   function activeClick2(e){
      const elements = multiRef()
      for(const el of elements[4].children ){
       el.classList.remove('active')
       
      }
      

      e.target.parentElement.classList.toggle('active')

       if( e.target.parentElement.classList.contains('active') ){
          // writing this statement bc if the user clicked on the blank (white space above the p tag) the app will crash
          if(e.target.parentElement.classList.contains('f')){
            return
         }
        
        

         const h3 = document.querySelector('.f .active  .type--of--coffee')
         
         setObj(prev => {
            return {
               ...prev,
               typeOfCoffee: prev.typeOfCoffee = h3.textContent
            }
         })
      }
   }
   
   function activeClick3(e){
      const elements = multiRef()
      for(const el of elements[6].children ){
         el.classList.remove('active')
      }
   

      e.target.parentElement.classList.toggle('active')

      
       if( e.target.parentElement.classList.contains('active') ){
          // writing this statement bc if the user clicked on the blank (white space above the p tag) the app will crash
         if(e.target.parentElement.classList.contains('f')){
            return
         }
        

         const h3 = document.querySelector('.f .active  .amount')
         
         setObj(prev => {
            return {
               ...prev,
               amount: prev.amount = h3.textContent
            }
         })
      }
   }
   function activeClick4(e){
      const elements = multiRef()
      for(const el of elements[8].children ){
      el.classList.remove('active')
      }
      

      e.target.parentElement.classList.toggle('active')

         if( e.target.parentElement.classList.contains('active') ){
          // writing this statement bc if the user clicked on the blank (white space above the p tag) the app will crash
         if(e.target.parentElement.classList.contains('f')){
            return
         }
        

         const h3 = document.querySelector('.f .active  .grind')
         
         setObj(prev => {
            return {
               ...prev,
               grind: prev.grind = h3.textContent
            }
         })
      }
   }
   function activeClick5(e){
      const elements = multiRef()
      for(const el of elements[10].children ){
         el.classList.remove('active')
      }
   

      e.target.parentElement.classList.toggle('active')
         if( e.target.parentElement.classList.contains('active') ){
          // writing this statement bc if the user clicked on the blank (white space above the p tag) the app will crash
         if(e.target.parentElement.classList.contains('f')){
            return
         }
        

         const h3 = document.querySelector('.f .active  .time--of--delivery')
         const p = document.querySelector('.f .active  span ')
       
         setPriceOfDelivery(p.textContent)
         setObj(prev => {
            return {
               ...prev,
               oftenDelivery: prev.oftenDelivery = h3.textContent
            }
         })
      }
   }
   // console.log(obj)
   function click(){
      const elements = multiRef()
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      elements[11].style.display='block'
    
   }
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
                 <img ref={addMultiRef} src={arrow} alt='' className={`${windowWidth >= 1122 && 'arrow'}`}  />
            </div>
            <div className={`f ${windowWidth >= 1122 ?'' :'hide'}`} ref={addMultiRef}  >
               <div  onClick={activeClick}>
                  <h3 className='user--coffee'>Capsule</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
               </div>
               <div onClick={activeClick}>
                  <h3 className='user--coffee'>Filter</h3>
                  <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
               </div>
               <div  onClick={activeClick}>
                  <h3 className='user--coffee'>Espresso</h3>
                  <p>Dense and finely ground beans for an intense, flavorful experience</p>
               </div>
            </div>

            <div  className='Q'  onClick={() => handleClick(2)}>
                 <h3 >What type of coffee? </h3>
                 <img  ref={addMultiRef} src={arrow} alt='' />
            </div>

            <div className='f hide' ref={addMultiRef}  >
               <div  onClick={activeClick2}>
                  <h3 className='type--of--coffee'>Single origin</h3>
                  <p> Distinct, high quality coffee from a specific family-owned farm</p>
               </div>
               <div  onClick={activeClick2}>
                  <h3 className='type--of--coffee'>Decaf</h3>
                  <p>Just like regular coffee, except the caffeine has been removed</p>
               </div>
               <div  onClick={activeClick2}>
                  <h3 className='type--of--coffee'>Blended</h3>
                  <p>Combination of two or three dark roasted beans of organic coffees</p>
               </div>
            </div>
            <div  className='Q'  onClick={() => handleClick(3)}>
                 <h3 >How much would you like? </h3>
                 <img  ref={addMultiRef} src={arrow} alt=''  />
            </div>
            <div className='f hide' ref={addMultiRef}  >
               <div  onClick={activeClick3}>
                  <h3 className='amount'>250g</h3>
                  <p> Perfect for the solo drinker. Yields about 12 delicious cups.</p>
               </div>
               <div  onClick={activeClick3}>
                  <h3 className='amount'>500g</h3>
                  <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
               </div>
               <div onClick={activeClick3}>
                  <h3 className='amount'>1000g</h3>
                  <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
               </div>
            </div>
            <div   className='Q'  onClick={() => handleClick(4)}>
                 <h3> Want us to grind them?</h3>
                 <img  ref={addMultiRef} src={arrow} alt=''  />
            </div>
            <div className='f hide' ref={addMultiRef}  >
               <div onClick={activeClick4}>
                  <h3 className='grind'>Wholebean</h3>
                  <p> Best choice if you cherish the full sensory experience</p>
               </div>
               <div  onClick={activeClick4}>
                  <h3 className='grind'>Filter</h3>
                  <p>For drip or pour-over coffee methods such as V60 or Aeropress</p>
               </div>
               <div  onClick={activeClick4}>
                  <h3 className='grind'>Cafetiére</h3>
                  <p>Course ground beans specially suited for french press coffee</p>
               </div>
            </div>
            <div  className='Q'  onClick={() => handleClick(5)}>
                 <h3 >How often should we deliver?</h3>
                 <img  ref={addMultiRef} src={arrow} alt='' />
            </div>
            <div className='f hide' ref={addMultiRef}  >
               <div onClick={activeClick5}>
                  <h3 className='time--of--delivery'>Every week</h3>
                  <p>$<span>7.20</span> per shipment. Includes free first-class shipping.</p>
               </div>
               <div onClick={activeClick5}>
                  <h3 className='time--of--delivery'>Every 2 weeks</h3>
                  <p> $<span>9.50</span> per shipment. Includes free priority shipping.</p>
               </div>
               <div onClick={activeClick5}>
                  <h3 className='time--of--delivery'>Every month</h3>
                  <p>$<span>12.00</span> per shipment. Includes free priority shipping.</p>
               </div>
            </div>
               <div className='summary'>
                  <h4>Order Summary</h4>
                  <p>
                     “I drink coffee my coffee as {obj.userCoffee ?  <span>{obj.userCoffee}</span> : '____'},
                        with a {obj.typeOfCoffee ? <span>{obj.typeOfCoffee}</span> : '____'} type of bean. {obj.amount ? <span>{obj.amount}</span>:'___'} ground ala 

                        {obj.grind ? <span> {obj.grind}</span>: '____'}, 
                        sent to me { obj.oftenDelivery? <span>{obj.oftenDelivery}</span>:'___'}.”
                  </p>
               </div>
            
          
         </div>
      </div>
   </div>
   
      <div className='submit'>
         <button disabled={!obj.oftenDelivery} onClick={click}><a>Create My Plan</a></button>
      </div>
      <div className='modal--container' ref={addMultiRef}>
         <div className='f1st--div'>
            <h4>
               Order Summary
            </h4>
            <div className='s2nd--div'>
                <p>
                  “I drink coffee my coffee as {obj.userCoffee ?  <span>{obj.userCoffee}</span> : '____'},
                     with a {obj.typeOfCoffee ? <span>{obj.typeOfCoffee}</span> : '____'} type of bean. {obj.amount ? <span>{obj.amount}</span>:'___'} ground ala 

                     {obj.grind ? <span> {obj.grind}</span>: '____'}, 
                     sent to me { obj.oftenDelivery? <span>{obj.oftenDelivery}</span>:'___'}.”
                  </p>
                  <small>
                      Is this correct? You can proceed to checkout or go back to plan selection if something 
                     is off. Subscription discount codes can also be redeemed at the checkout.
                  </small>

                  <div className='t3rd--div'>
                     <p>
                        ${priceOfDelivery}/{priceOfDelivery == 7.20 ? 'week' : priceOfDelivery == 9.50 ? '2 weeks' : 'month'}
                     </p>
                     <button>Checkout</button>
                  </div>
            </div>
         </div>
      </div>


  </>

   );
}

export default Plan;