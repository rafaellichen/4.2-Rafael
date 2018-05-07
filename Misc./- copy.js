import React from 'react';

const NewQuote = (props) => {
  const { quotes, newQuote, handleInput, handleSubmit } = props;

  return (
    <div>
      <input
        onInput={handleInput}
        value={newQuote}
        type="text"
        placeholder="enter a quote"
      />
      <button onClick={handleSubmit}>
        SUBMIT QUOTE
      </button>

      <p>{quotes[quotes.length - 1]}</p>
    </div>
  );
}

export default NewQuote;