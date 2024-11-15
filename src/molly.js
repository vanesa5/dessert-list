import React from 'react';
import data from '../src/items-list/data.json'; 
// import images from './images/image-waffle-thumbnail.jpg';


const DessertComponent = () => {
  return (
    <div>
      <h2>Dessert</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}> 
          <img src={user.image.mobile} alt={user.name}/>
            <button className='bg-orange rounded-full w-[200px] p-2 '>
              <img src={`${process.env.PUBLIC_URL}/images/icon-add-to-cart.svg`}
              alt="Icon" class="w-6 h-6 mr-2"/>
              <span>Add to Cart</span>
            </button><br></br>

            {user.category}<br></br>
            {user.name} - $ {user.price}
          </li>
        ))}
      </ul>
      {/* <ul>
            {images.map((image) => (
            <li key={image.id}>
            {image.mobile}
            </li>
          ))} 
      </ul> */}
    </div>
  );
};

export default DessertComponent;