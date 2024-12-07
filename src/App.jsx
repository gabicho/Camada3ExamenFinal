import { Route, Routes } from "react-router";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layout/Layout";
import Context from "./Context/Context";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Context/>
      <Routes>
        <Route path="/" element={<Layout />}>        
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>Page not found - Error 404</h1>} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
