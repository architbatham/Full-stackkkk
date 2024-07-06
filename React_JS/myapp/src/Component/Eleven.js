import React, { useState } from 'react'

export default function Eleven() {

    let quotes = [
      "The best way to predict the future is to invent it. – Alan Kay",
      "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
      "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
      "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
      "The only way to do great work is to love what you do. – Steve Jobs",
      "Believe you can and you're halfway there. – Theodore Roosevelt",
      "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
      "It does not matter how slowly you go as long as you do not stop. – Confucius",
      "Act as if what you do makes a difference. It does. – William James",
      "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
  ];

  const [quote,setQuote] = useState( quotes[Math.floor(Math.random() * quotes.length)]);
 const handleClick = () =>{
  const randomIndex = Math.floor(Math.random()*quotes.length);
  setQuote(quote[randomIndex]);
 };

  return (
    <div>
    <p>{quote}</p>
      <br/>
      <button onClick={handleClick}>Click fornew quote</button>
    </div>
  );
}
