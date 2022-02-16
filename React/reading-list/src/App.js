import './App.css';
import CounterReducer from './components/CounterReducer';
import BookContextProvider from './context/BookContext';
import BookReducer from './reducer/BookReducer';
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <CounterReducer/>

      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
