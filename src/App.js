import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page1/page.js";
import Header from "./components/Page1/header.js";
import About from "./components/about.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header className="header" />

                <div className="about">
                  <About />
                </div>
                <Page />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
