import useFetch from "../Hooks/useFetch";
import BookList from "./BookList";

const Book = () => {
  const {data : books , ispending,err} = useFetch("http://localhost:8080/book")

    return ( 
      <>
      { books && <BookList books={books}/>}
      {ispending && <div> Loading ....</div>}
      { err && <div>{err}</div>}
      </>

     );
}
 
export default Book;