import './App.css';
import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRandomQuote, setRandomColor } from './features/quoteSlice';
import './custom.scss'

function Quote() {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-quote align-text-top me-3" viewBox="0 0 16 16">
    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
  </svg>)
}

function XLogo() {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x text-calm" viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
  </svg>)
}

function App() {
  const currentQuote = useSelector((state) => state.quotes.currentQuote);
  const currentColor = useSelector((state) => state.quotes.currentColor);
  const nextColor = useSelector((state) => state.quotes.nextColor);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    document.body.classList = `bg-${currentColor}-body`
  }, [currentColor])

  useEffect(() => {
    dispatch(setRandomQuote());
  }, [dispatch])

  const handleNewQuote = () => {
    dispatch(setRandomQuote());
    dispatch(setRandomColor());
    document.body.classList = `bg-${nextColor}-body`
  }

  const getTwitterUrl = () => {
    const encoded = encodeURIComponent(currentQuote);
    return `https://twitter.com/intent/tweet?text=${encoded}`
  }


  return (
    <div className="container-fluid my-5 py-5 justify-content-center align-items-center" >
      <div className={`container-fluid-lg  d-flex text-align-center bg-${currentColor} shadow rounded border-5 custom-h-container`}  ><h1 className='h1 row mx-auto noto-serif-hentaigana-bold'>Inspirational Quotes</h1></div>
      <hr style={{ border: "none" }}/>
        <div className={`container-fluid-lg text-center align-self-top shadow rounded bg-${currentColor} bg-gradient pb-3 custom-container`} id='quote-box'>
        { currentQuote ? (
          <>
          <div className='row pt-2'>
            <h3 className="h3 text-calm text-center noto-serif-hentaigana-bold" id='text'><Quote />{currentQuote.quote}</h3>
          </div>
          <div className='row h-10'>
            <p className='text-calm text-end px-5 noto-serif-hentaigana-normal' id='author'>- {currentQuote.author}</p>
          </div>
          </>
        ) : ( <p>Loading new Quote...</p>)}
          <div className='container d-grid d-md-flex gap-md-4 gap-1'>
            <a className={`btn btn-outline-custom border border-calm border-1 w-100 w-md-25`} href={getTwitterUrl()} id='tweet-quote' target='_blank'>
              <XLogo />
            </a>
            <button className={`btn btn-outline-${currentColor}-compliment text-calm border border-1 border-calm w-100 w-md-10`} id='new-quote' onClick={handleNewQuote}>New Quote</button>
          </div>
      </div>
    </div>
  );
}



export default App;
