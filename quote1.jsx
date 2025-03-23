import React, { useState } from 'react'
import '../styleCss/quote.css'

function Quote1() {
  const quotes = ["محبت اور روشنی ہی دنیا میں مثبت تبدیلی لاتی ہیں۔",
    "The best way to predict the future is to invent it.",
    "مشکل کام صرف شروعات میں مشکل لگتا ہے، لیکن عزم سے ممکن ہو جاتا ہے۔",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "کامیابی کا راز محنت میں ہے۔",

    "The only way to do great work is to love what you do.",
    "اپنی ذات کو مضبوط اور بلند بنائیں تاکہ آپ اپنی تقدیر خود لکھ سکیں۔",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
  ];
  const [quote, setQuote] = useState("");
  function generate() {
    const x = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[x])
  }
  return (
    <div className='mainy'>
      <h1>Listen</h1>
      <p>{quote}</p>
      <button onClick={generate}>
        Generate Quote
      </button>


    </div>
  )
}

export default Quote1
