import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Similarly, the App component holds the components that make up the application, and these are then exported so that they can be imported into index.js

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
