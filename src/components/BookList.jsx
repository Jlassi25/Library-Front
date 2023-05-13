
import { Link } from 'react-router-dom';
const BookList = ({ books }) => {


  return (
    <>
      <div id="large-th">
        <div className="cont">
          <h1> A list of books</h1>
          <br />
          <div className="choose">
            <a href="#list-th"><i className="fa fa-th-list" aria-hidden="true" /></a>
            <a href="#large-th"><i className="fa fa-th-large" aria-hidden="true" /></a>
          </div>
          <div id="list-th">
            {books.map((book) => (
              <div className="book read" key={book.isbn}>
                <Link to={`/book/${book.isbn}`}>
                  <div className="cover">
                    <img src="https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg" alt="rr" />
                  </div>
                  <div className="description">
                    <p className="title">{book.title}<br />
                      <span className="author">{book.author}</span></p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>

  );
}

export default BookList;