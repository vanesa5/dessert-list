import React from 'react';
import data from '../src/items-list/data.json'; 
// import images from './images/image-waffle-thumbnail.jpg';


const ExampleComponent = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}> 
          <img src={user.image.mobile} alt={user.name}/>
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

export default ExampleComponent;