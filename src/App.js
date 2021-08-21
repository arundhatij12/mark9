import React from "react";

import "./styles.css";

import { useState } from "react";

const bookList = {
  Technology: [
    {
      NAME: "The Innovator's Dilemma",
      RATINGS: "4/5",
      SYNOPSIS:
        " It took a Harvard Business School professor to see why new technologies can cause great companies to fail. After studying industries from steel to hard drives, Christenson discovered that listening to customers can cause a great executive to misread the market."
    },
    {
      NAME: "Clean Code",
      RATINGS: "4/5",
      SYNOPSIS:
        "Code is clean if it can be understood easily – by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability."
    },
    {
      NAME: "javascript.info",
      RATINGS: "4/5",
      SYNOPSIS:
        "get the fundamentals of javascript and in depth understanding of the quirks of the language."
    }
  ],
  Fiction: [
    {
      NAME: "The Alchemist",
      RATINGS: "4/5",
      SYNOPSIS:
        "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. "
    },
    {
      NAME: " Pride and Prejudice",
      RATINGS: "4/5",
      SYNOPSIS:
        "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. Its humour lies in its honest depiction of manners, education, marriage, and money during the Regency era in England."
    },
    {
      NAME: " Jane Eyre",
      RATINGS: "4/5",
      SYNOPSIS:
        "Jane Eyre is a novel by English writer Charlotte Brontë, published under the pen name  on 16 October 1847, by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York.[1] Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall"
    }
  ],

  NonFiction: [
    {
      NAME: " My Experiments with Truth",
      RATINGS: "4/5",
      SYNOPSIS:
        "It is the autobiography of Mohandas K. Gandhi, covering his life from early childhood through to 1921"
    },
    {
      NAME: "The Discovery of India",
      RATINGS: "4/5",
      SYNOPSIS:
        "It was written by the Indian Independence leader, Jawaharlal Nehru (later India's first Prime Minister) during his incarceration in 1942–1945 at Ahmednagar fort in present day Indian state of Maharashtra by British colonial authorities before the independence of India"
    },
    {
      NAME: " Wings of Fire",
      RATINGS: "4/5",
      SYNOPSIS:
        "Wings of Fire: An Autobiography of APJ Abdul Kalam is an autobiography of A P J Abdul Kalam, former President of India. It was written by Dr. Kalam and Arun Tiwari. Kalam examines his early life, effort"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>BOOK REVIEW</h1>
      <h2 style={{ color: "purple" }}>
        Get honest book reviews right over here!
      </h2>
      <div>
        {Object.keys(bookList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "cursor",
              color: "blue",
              background: "grey",
              borderRadius: ".5rem",
              borderBlockColor: "white",
              padding: "0.5rem  1rem",
              border: "3px solid white",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookList[selectedGenre].map((book) => (
            <li
              key={book.NAME}
              style={{
                color: "green",
                listStyle: "none",
                padding: "2rem",
                border: "1px solid white",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.NAME} </div>
              <div style={{ fontSize: "larger" }}> {book.RATINGS} </div>
              <div style={{ fontSize: "larger" }}> {book.SYNOPSIS} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
