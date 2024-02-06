
import './App.css';
import { useState, useEffect} from "react"

//example: // https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyDx65CFmR8zVn7o1UZXYmDJycgSwV-GNx8

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiKey = 'AIzaSyDx65CFmR8zVn7o1UZXYmDJycgSwV-GNx8';
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    if (query) {
      fetchBooks();
    }

  }, [query]); 

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
     <h1>Book Review Blog App</h1>
     <h4>Search Books</h4>
      <input
        type="text"
        placeholder="Search Book Here"
        value={query}
        onChange={handleInputChange}
      />
      <div>
        {books.map((book, index) => (
          <ul key={index}>{book.volumeInfo.title}</ul>//couldn't figure out the pic to show up instead
        ))}
      </div>
    </div>
  );
}

export default App;
