import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
  <Router>

    <div className="max-w-4xl mx-auto p-2">

      <Header/>

    </div>

  </Router>
    
  );
}

export default App;
