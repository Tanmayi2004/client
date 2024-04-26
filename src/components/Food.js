
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Food.css'; // Add your CSS file for custom styling if needed

import food1 from '../images/food1.jpeg';
import food2 from '../images/food2.jpeg';
import food3 from '../images/food3.jpeg';
import food4 from '../images/food4.jpeg';
import food5 from '../images/food5.jpeg';
import food6 from '../images/food6.jpeg';
import food7 from '../images/food7.jpeg';
import food8 from '../images/food8.jpeg';

function Food() {
  const [selectedFood, setSelectedFood] = useState(null);

  const foodItems = [
    {
      name: "Idly",
      image: food3,
      benefits: [
        "Nutritious: Idly is made from a batter of fermented rice and urad dal (black lentils), making it rich in carbohydrates, proteins, and essential amino acids.",
        "Easily Digestible: The fermentation process breaks down the starches in the rice and dal, making idly easily digestible and suitable for people with sensitive stomachs.",
        "Low in Calories: Idly is steamed rather than fried, making it low in calories and a healthy option for weight management."
      ]
    },
    {
      name: "Full Plate Meals",
      image: food2,
      benefits: [
        "Balanced Nutrition: Full plate meals typically consist of rice, sambar, rasam, vegetables, curry, papad, pickle, and yogurt, providing a balanced combination of carbohydrates, proteins, vitamins, and minerals."
      ]
    },
    {
      name: "South Indian Thali",
      image: food1,
      benefits: [
        "Variety: South Indian thali typically includes a wide array of dishes such as rice, sambar, rasam, various vegetable curries, yogurt, pickles, papad, sweets, and sometimes even non-vegetarian options, offering a diverse culinary experience in a single meal.",
        "Nutrient-Rich: South Indian thali incorporates a variety of ingredients including grains, lentils, vegetables, spices, and dairy products, ensuring a rich and diverse nutrient profile with essential vitamins, minerals, and antioxidants.",
        "Filling: The generous portions of rice and accompanying dishes make full plate meals filling and satisfying, providing sustained energy throughout the day."
      ]
    },
    {
      name: "Dosa",
      image: food4,
      benefits: [
        "Nutrient-rich: Dosa is made from fermented rice and lentils, which makes it rich in carbohydrates, proteins, and dietary fiber.",
        "Easy to Digest: The fermentation process breaks down complex carbohydrates, making dosa easier to digest."
      ]
    },
    {
      name: "Vegetable Salad",
      image: food5,
      benefits: [
        "Nutrient-dense: Vegetable salads are packed with essential vitamins, minerals, and antioxidants.",
        "High in Fiber: Vegetables like lettuce, spinach, and carrots are rich in fiber, which aids digestion and promotes satiety."
      ]
    },
    {
      name: "Chicken Biryani",
      image: food6,
      benefits: [
        "Protein Source: Chicken biryani provides a good amount of high-quality protein, essential for muscle repair and growth.",
        "Energy Boost: The combination of rice and chicken provides carbohydrates for energy, making it a satisfying meal."
      ]
    },
    {
      name: "Fruit Salad",
      image: food7,
      benefits: [
        "Vitamins and Minerals: Fruit salads are rich in vitamins A, C, and K, as well as potassium and magnesium.",
        "Hydration: Fruits like watermelon, oranges, and grapes have high water content, aiding in hydration."
      ]
    },
    {
      name: "Jilebi",
      image: food8,
      benefits: [
        "Rich in Calories: Jalebi is calorie-dense, making it suitable for individuals who need to increase their calorie intake.",
        "Enjoyment: Jalebi is a popular Indian dessert enjoyed on special occasions and festivals, adding joy and sweetness to celebrations."
      ]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Adjust autoplay speed as needed
  };

  const handleFoodClick = (index) => {
    setSelectedFood(foodItems[index]);
  };

  return (
    <div>
      <h2>Food Slideshow</h2>
      <Slider {...settings}>
        {foodItems.map((food, index) => (
          <div key={index} onClick={() => handleFoodClick(index)}>
            <img src={food.image} alt={food.name} />
          </div>
        ))}
      </Slider>
      {selectedFood && (
        <div>
          <h3>{selectedFood.name}</h3>
          <ul>
            {selectedFood.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Food;
