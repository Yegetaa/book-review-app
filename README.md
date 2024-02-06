# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The code in App.js is of a React functional component that uses the useState and useEffect hooks to fetch data from the Google Books API and display it in a list.

In the useEffect hook, the fetchBooks function is defined that makes an API request to the Google Books API using the query state variable as the search query.

If the response status is not 200 (OK), an error is thrown.
The response data is then converted to JSON and stored in the data variable.
The setBooks function is called with the data as an argument, which updates the books state variable with the new list of books.

The if statement checks if the query state variable is truthy, which means a search query has been entered, and if so, the fetchBooks function is called.
The map function iterates over the books state variable and returns an <ul> element for each book with its title as its child.

