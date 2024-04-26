import React, { useState } from 'react';
import tajMahalImage from '../images/taj.jpg';
import goldenTempleImage from '../images/golden.jpg';
import indianGateImage from '../images/imdiangate.jpg';
import hampiImage from '../images/hampi.jpg';
import redFortImage from '../images/redfort.jpg';
import person1Image from '../images/person1.jpg';
import person2Image from '../images/person2.jpg';
import person3Image from '../images/person3.jpg';
import person4Image from '../images/person4.jpg';
import person5Image from '../images/person5.jpg';

function History() {
  const [showPlaces, setShowPlaces] = useState(false); // State to toggle display of historical places images
  const [showPersons, setShowPersons] = useState(false); // State to toggle display of persons' images
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image information

  // Function to handle image click
  const handleImageClick = (imageInfo) => {
    setSelectedImage(imageInfo);
  };

  // Function to handle click event on the "Places" button
  const handlePlacesButtonClick = () => {
    setShowPlaces(true);
    setShowPersons(false);
    setSelectedImage(null); // Reset selected image when switching between places and persons
  };

  // Function to handle click event on the "Personalities" button
  const handlePersonalitiesButtonClick = () => {
    setShowPersons(true);
    setShowPlaces(false);
    setSelectedImage(null); // Reset selected image when switching between places and persons
  };

  return (
    <div>
      <h1>You are in the world of History❤️</h1>
      
      {/* Button to toggle display of historical places images */}
      <button style={{ fontSize: '20px' }} onClick={handlePlacesButtonClick}>Places</button>

      <br /><br /> {/* Line break added here */}

      {/* Button to toggle display of persons' images */}
      <button style={{ fontSize: '20px' }} onClick={handlePersonalitiesButtonClick}>Personalities</button>

      {/* Display list of historical places images if showPlaces is true */}
      {showPlaces && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Taj Mahal */}
          <img src={tajMahalImage} alt="Taj Mahal" onClick={() => handleImageClick({ title: 'Taj Mahal', description: 'A big, beautiful palace made of white marble that looks like it\'s been sprinkled with powdered sugar. It\'s like the king of all buildings, standing tall and proud in India. They say a guy built it for his wife who passed away, and let\'s just say, he didn\'t hold back on the romance. It\'s like the ultimate love letter in stone form, making all other gestures look like sending flowers on Valentine\'s Day.' })} style={{ width: '200px', margin: '10px' }} />
          {/* Golden Temple */}
          <img src={goldenTempleImage} alt="Golden Temple" onClick={() => handleImageClick({ title: 'Golden Temple', description: 'Imagine stumbling upon a glistening temple that looks like it\'s been dunked in a pool of gold paint. This place is so shiny, even your sunglasses might need sunglasses! It\'s not just any temple though, it\'s a Sikh temple where everyone is welcome, and they even serve free meals to anyone who\'s hungry. It\'s like a food court for the soul, where you can munch on spiritual enlightenment with a side of delicious curry. Who knew enlightenment could taste so good?' })} style={{ width: '200px', margin: '10px' }} />
          {/* India Gate */}
          <img src={indianGateImage} alt="Indian Gate" onClick={() => handleImageClick({ title: 'India Gate', description: 'Imagine if the Eiffel Tower and the Arc de Triomphe had a desi baby – that\'s India Gate! It\'s like the rockstar of arches, standing there in Delhi, flexing its architectural muscles for all to see. People flock to it like it\'s the latest celebrity hotspot, snapping selfies and trying to get that perfect angle. If monuments had a talent show, India Gate would be belting out tunes like Beyoncé at a karaoke bar – it\'s just that iconic. And let\'s not forget the pigeons, they\'ve claimed it as their own VIP lounge, strutting around like they own the place. So, next time you\'re in Delhi, swing by India Gate for a dose of history, a dash of glamour, and maybe even a pigeon photobomb or two!' })} style={{ width: '200px', margin: '10px' }} />
          {/* Hampi */}
          <img src={hampiImage} alt="Hampi" onClick={() => handleImageClick({ title: 'Hampi', description: 'Imagine a huge rocky area with old buildings hidden inside, like a giant puzzle waiting to be solved. Monkeys roam around like they own the place, adding a touch of comedy to the ancient scenery. It\'s like stepping into a history book written by a comedian – entertaining, surprising, and always full of laughs!' })} style={{ width: '200px', margin: '10px' }} />
          {/* Red Fort */}
          <img src={redFortImage} alt="Red Fort" onClick={() => handleImageClick({ title: 'Red Fort', description: 'It\'s a huge, old red fortress in Delhi that\'s so famous, even the bricks have their own fan club. It\'s like a grandpa telling stories from the good ol\' days, except this grandpa once hosted emperors and probably has a few ghosts roaming around. It\'s history with a side of sass – because who knew forts could be so fabulous?' })} style={{ width: '200px', margin: '10px' }} />
        </div>
      )}

      {/* Display list of persons' images if showPersons is true */}
      {showPersons && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Gandhi */}
          <img src={person1Image} alt="Gandhi" onClick={() => handleImageClick({ title: 'Mahatma Gandhi', description: 'Picture a guy in round glasses and a simple white dhoti, armed with nothing but truth and determination. He\'s like the original rockstar of peaceful protest, leading millions to freedom without raising a fist. Gandhi\'s philosophy of nonviolence shook empires and inspired generations worldwide. Plus, that spinning wheel he\'s always got? It\'s not just a fashion statement – it\'s a symbol of self-reliance and resilience.' })} style={{ width: '200px', margin: '10px' }} />
          {/* Mother Teresa */}
          <img src={person2Image} alt="Mother Teresa" onClick={() => handleImageClick({ title: 'Mother Teresa', description: 'Imagine a tiny nun with a big heart, wandering the streets of Kolkata like a modern-day saint. She\'s like a beacon of hope in a sea of despair, comforting the sick and feeding the hungry with nothing but love and compassion. Mother Teresa didn\'t just talk the talk – she walked the walk, living a life of service and humility that touched countless lives. She\'s proof that sometimes, the smallest gestures can make the biggest difference.' })} style={{ width: '200px', margin: '10px' }} />
          {/* Jawaharlal Nehru */}
          <img src={person3Image} alt="Jawaharlal Nehru" onClick={() => handleImageClick({ title: 'Jawaharlal Nehru', description: 'He\'s like the suave elder statesman of India, with a rose tucked behind his ear and a twinkle in his eye. Jawaharlal Nehru was the first Prime Minister of independent India, and boy, did he make an entrance. With his fancy suits and fancy words, he put India on the map as a force to be reckoned with. Plus, he had killer dance moves – just ask anyone who\'s seen him bust a move at one of those fancy state dinners.' })} style={{ width: '200px', margin: '10px' }} />
          {/* Mangal Pandey */}
          <img src={person4Image} alt="Mangal Pandey" onClick={() => handleImageClick({ title: 'Mangal Pandey', description: 'He\'s like the original rebel with a cause, fighting for freedom before it was cool. Mangal Pandey was a soldier in the British Indian Army who sparked the first war of independence with a single gunshot. Talk about making history – this guy practically wrote the book on it! With his fiery spirit and unwavering courage, he inspired a nation to rise up and fight for their rights. So, next time you\'re feeling rebellious, just remember Mangal Pandey – the OG freedom fighter.' })} style={{ width: '200px', margin: '10px' }} />
          {/* Rani Lakshmi Bai */}
          <img src={person5Image} alt="Rani Lakshmi Bai" onClick={() => handleImageClick({ title: 'Rani Lakshmi Bai', description: 'She\'s like the warrior queen of your dreams, riding into battle with a sword in one hand and her son strapped to her back. Rani Lakshmi Bai was a fearless leader who fought against the British during the Indian Rebellion of 1857. With her indomitable spirit and unwavering courage, she became a symbol of resistance and freedom for generations to come. Plus, she had killer horseback riding skills – just ask anyone who\'s seen her charge into battle like a boss.' })} style={{ width: '200px', margin: '10px' }} />
        </div>
      )}

      {/* Display selected image information */}
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <h2>{selectedImage.title}</h2>
          <p>{selectedImage.description}</p>
        </div>
      )}
    </div>
  );
}

export default History;