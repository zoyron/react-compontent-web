import React from 'react';
import Cards from "./Cards";

const GetInTouch = () => (
  <section class="contact bg-success ">
      <div class="container ">
        <h2 class="text-white">
          We love new friends!
        </h2>
        <div class="row">
          <Cards title="Card title" imgSrc="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" textVal="Some quick example text to build on the card title and make up
                  the bulk of the card's content." bttnName="Go somewhere"></Cards>
          <Cards title="Card title" imgSrc="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" textVal="Some quick example text to build on the card title and make up
                  the bulk of the card's content." bttnName="Go somewhere"></Cards>
          <Cards title="Card title" imgSrc="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" textVal="Some quick example text to build on the card title and make up
                  the bulk of the card's content." bttnName="Go somewhere"></Cards>
          <Cards title="Card title" imgSrc="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" textVal="Some quick example text to build on the card title and make up
                  the bulk of the card's content." bttnName="Go somewhere"></Cards>
            </div>
        
        
        
      </div>
    </section>
)

export default GetInTouch;