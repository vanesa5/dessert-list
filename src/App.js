import iAddToCart from "./assets/images/icon-add-to-cart.svg";
import "./App.css";
import "./index.css";

function App() {
    return (
        <div className="App">
            <header className="App-header bg-yellow">
                <img src={iAddToCart} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link p-2"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
