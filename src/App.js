import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app"> 
      <Nav />
      <Header />
      <Main/>
      <Contact />
    </div>
  );
}

export default App;
