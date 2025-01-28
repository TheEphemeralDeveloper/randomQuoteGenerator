import './App.css';
import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRandomQuote, setRandomColor } from './features/quoteSlice';
import './custom.scss'

function App() {
  const currentQuote = useSelector((state) => state.quotes.currentQuote);
  const currentColor = useSelector((state) => state.quotes.currentColor);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList = 'bg-custom'
    dispatch(setRandomQuote());
  }, dispatch)

  const handleNewQuote = () => {
    dispatch(setRandomQuote());
    dispatch(setRandomColor());
  }

  console.log('Current Quote:', currentQuote);
  return (
    <div className="d-flex justify-content-center align-items-center" >
      <div className={`container text-center justify-content-center align-items-center mx-auto border border-4 border-calm rounded m-5 py-2 bg-${currentColor}`} id='quote-box'  style={{maxWidth: 1000, maxHeight: 700, minHeight: 250}}>
        { currentQuote ? (
          <>
          <h3 className="h3 text-calm" id='text'>{currentQuote.quote}</h3>
          <p className='text-calm text-end' id='author'>- {currentQuote.author}</p>
          </>
        ) : ( <p>Loading new Quote...</p>)}
        <button className={`btn btn-calm d-inline justify-bottom`} id='new-quote' onClick={handleNewQuote}>New Quote</button>
      </div>
    </div>
  );
}



export default App;
