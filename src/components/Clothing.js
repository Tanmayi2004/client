import React, { useState } from 'react';
import andhraImage from '../images/andhra.jpg';
import keralaImage from '../images/kerala.jpg';
import gujaratImage from '../images/gujarat.jpg';
import madhyaPradeshImage from '../images/madhyapradesh.jpg';
import mizoramImage from '../images/mizoram.jpg';

function Clothing() {
  const [showPlaces, setShowPlaces] = useState(false); 
  
  const [selectedImage, setSelectedImage] = useState(null); 
  
  // Function to handle image click
  const handleImageClick = (imageInfo) => {
    setSelectedImage(imageInfo);
  };

  // Function to handle click event on the "Places" button
  const handlePlacesButtonClick = () => {
    setShowPlaces(true);
    setSelectedImage(null); 
  };

  

  return (
    <div>
      <h2>You are in the world of Clothing❤️</h2>     
      <button onClick={handlePlacesButtonClick}>Clothes</button>

      {showPlaces && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <img src={andhraImage} alt="Andhra Pradesh" onClick={() => handleImageClick({ title: 'Andhra Pradesh', description: 'Andhra Pradesh is known for its vibrant and colorful clothing. The traditional dress for women is the Saree, which is draped around the body and worn with a blouse and petticoat. Men wear the Dhoti and Kurta, which is a long tunic worn over the Dhoti.' })} style={{ width: '200px', margin: '10px' }} />
          <img src={keralaImage} alt="Kerala" onClick={() => handleImageClick({ title: 'Kerala', description: 'Kerala is known for its simple yet elegant clothing. The traditional dress for women is the Saree, which is draped around the body and worn with a blouse and petticoat. Men wear the Mundu and Shirt, which is a long piece of cloth wrapped around the waist and legs, worn with a shirt.' })} style={{ width: '200px', margin: '10px' }} />
          <img src={gujaratImage} alt="Gujarat" onClick={() => handleImageClick({ title: 'Gujarat', description: 'Gujarat is known for its colorful and vibrant clothing. The traditional dress for women is the Chaniya Choli, which is a long skirt and a blouse. Men wear the Dhoti and Kurta, which is a long tunic worn over the Dhoti.' })} style={{ width: '200px', margin: '10px' }} />
          <img src={madhyaPradeshImage} alt="Madhya Pradesh" onClick={() => handleImageClick({ title: 'Madhya Pradesh', description: 'Madhya Pradesh is known for its vibrant and colorful clothing. The traditional dress for women is the Lehenga Choli, which is a long skirt and a blouse. Men wear the Dhoti and Kurta, which is a long tunic worn over the Dhoti.' })} style={{ width: '200px', margin: '10px' }} />
          <img src={mizoramImage} alt="Mizoram" onClick={() => handleImageClick({ title: 'Mizoram', description: 'Mizoram is known for its unique and colorful costumes. The traditional dress for women is the Puan, which is a wrap-around skirt and a shawl-like wrap. Men wear the Puanchei, which is a long tunic worn over pants.' })} style={{ width: '200px', margin: '10px' }} />
        </div>
      )}


      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <h2>{selectedImage.title}</h2>
          <p>{selectedImage.description}</p>
        </div>
      )}
    </div>
  );
}

export default Clothing;
