import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../Components/ui/Rating";
import Price from "../Components/ui/Price";

const Bookinfo = ({ books }) => {
  const {id} = useParams();
  const book = books.find(book => +book.id === +id);
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
                <img
                  src="https://covers.openlibrary.org/b/id/10958382-L.jpg"
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Atomic Habits</h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={12} salePrice={8} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
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
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus ipsum aliquid soluta enim, molestiae nesciunt
                    ut eaque est odit explicabo ipsa laborum quod placeat
                    recusandae itaque architecto omnis, eligendi veniam.
                  </p>
                </div>
                <button className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>

          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Bookinfo;
