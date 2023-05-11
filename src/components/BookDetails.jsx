import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch";

const BookDetails = () => {
    const { id } = useParams()
    const {data:book,err,ispending} = useFetch("http://localhost:8080/book/"+id)
    console.log(book && book);
    return ( 

    <>
        { ispending && <div>Loading...</div> }
        { err && <div>{ err }</div> }
        {book && 
            <section className="profile_container">
            <div className="profile_img_section">
            <img className="profile_img-LG" src="https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg" />
          
            </div>
            <div className="profile_desc_section">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p className="description">{book.description}</p>
            <div className="interests">
                <span className="interests_item">Technology</span>
                <span className="interests_item">Management</span>
                <span className="interests_item">Leadership</span>
            </div>
            </div>
        </section>
        
        }

   
    </>

     );
}
 
export default BookDetails;