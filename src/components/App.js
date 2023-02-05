import React from "react";
import Header from "./Header";
import Book from "./Book";
import { books } from "./Books-data";

const App = () => {
  const BookList = () => {
    return (
      <>
        <section className="book-list">
          {books.map((book) => {
            return <Book {...book} />;
          })}
        </section>
      </>
    );
  };

  return (
    <>
      <Header />
      <BookList />
    </>
    // <>
    //   <Header />
    //   <section className="book-list">
    //     {books.map((book) => {
    //       return <Book {...book} />;
    //     })}
    //   </section>
    // </>
  );
};

export default App;
