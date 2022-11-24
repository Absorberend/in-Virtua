import React, {useState, useEffect} from 'react'
import './Reviews.css';

export default function Reviews() {
  const quotes = [
    { 
      quote: "Virtual reality was once the dream of science fiction. But the internet was also once a dream, and so were computers and smartphones. The future is coming.",
      author: "MARK ZUCKERBERG"
    },
    { 
      quote: "Virtual reality is like dreaming with your eyes open.",
      author: "BRENNAN SPIEGEL"
    },
    { 
      quote: `There's nobody who works in VR saying, "Oh, I'm bored with this." Everybody comes back.`,
      author: "GABE NEWELL"
    },
    {
      quote: "What is it like to walk in someone else's shoes? Books allow us to imagine it, and movies allow us to see it, but VR is the first medium that actually allows us to experience it.",
      author: "NICK MOKEY"
    },
    {
      quote: "VR at its best shouldn't replace real life, just modify it, giving us access to so much just out of reach physically, economically. If you can dream it, VR can make it.",
      author: "MATTHEW SCHNIPPER"
    }  
  ];
  
  const [quoteData, getQuoteData] = useState(quotes);
  const [current, setCurrent] = useState(0);
  const [quote, getQuote] = useState(quoteData[current])
  
  useEffect(
    () => {
      getQuote(quoteData[current]);
      window.addEventListener("keydown", handleKeyPress);
    
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };

    }, 
    [current, quote]
  )

  useEffect(() => {

  }, []); 
  
  const nextQuote = () => {
    current === quoteData.length-1 ?
      setCurrent(0)
    :
      setCurrent(prevCurrent => prevCurrent + 1)
  }
  
  const prevQuote = () => {
    current === 0 ?
      setCurrent(quoteData.length-1)
    :
      setCurrent(prevCurrent => prevCurrent - 1)
  }
  
  const dotPicksQuote = (e) => setCurrent(Number(e.target.id));

  function Slide({quote}) {
    return (
      <div className="mySlides">
        <q>{quote.quote}</q>
        <p className="author">&mdash;{quote.author}</p>
      </div>
    )
  }
  
  function Arrows({nextQuote, prevQuote}) {
    return (
      <>    
        <a onClick={prevQuote} className="prev" id="prev">&#10094;</a>
        <a onClick={nextQuote} className="next" id="next">&#10095;</a>
      </>
    )
  }

  function handleKeyPress(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevQuote();
    } 
    
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextQuote();
    }
  }
  
  function Dots({dotQty, current, dotPicksQuote}) {
    return (
      <div className="dot__container">
        {
          dotQty.map((dot, i) => {
            return <span key={i} id={i} className={current === i ? "dot dotActive" : "dot"}
                          onClick={dotPicksQuote}></span>
          })
        }
      </div>
    )
  }
  
  return (
    <section id="reviews" className="review__section">
      <div className="slideshow__container">
        <h1 className="review__header">What people say.</h1>
        <Slide quote={quote} />
        <Arrows nextQuote={nextQuote}
                prevQuote={prevQuote} />
      </div>
      <Dots dotQty={quoteData} 
            current={current}
            dotPicksQuote={dotPicksQuote} />
    </section>
  )
}
