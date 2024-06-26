import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../Components/ui/Rating";
import Price from "../Components/ui/Price";
import Book from "../Components/ui/Book";

const Bookinfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    setAddedToCart(cart?.some((book) => book.id === +id));
  }, [cart, id]);

  const handleAddToCart = () => {
    const selectedBook = books.find((book) => +book.id === +id);
    addToCart(selectedBook); 
    setAddedToCart(true);
  };


  const book = books.find((book) => +book.id === +id);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus ipsum aliquid soluta enim, molestiae nesciunt
                    ut eaque est odit explicabo ipsa laborum quod placeat
                    recusandae itaque architecto omnis, eligendi veniam.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus ipsum aliquid soluta enim, molestiae nesciunt
                    ut eaque est odit explicabo ipsa laborum quod placeat
                    recusandae itaque architecto omnis, eligendi veniam.
                  </p>
                </div>
                {addedToCart ? (
                  <Link to={`/cart`} className="book__link">
                  <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={handleAddToCart}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bookinfo;
