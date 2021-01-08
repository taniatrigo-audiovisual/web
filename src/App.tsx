import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.less";
import { Bio } from "./pages/Bio";
import { Contact } from "./pages/Contact";
import { Video } from "./pages/Video";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="p-6 fixed mt-0 w-full z-10 top-0 bg-black bg-opacity-40">
            <div className="container mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 items-start md:justify-start text-white">
                <h3 className="text-white no-underline hover:text-white hover:no-underline mr-4">
                  <span className="text-2xl pl-2 text-pink-900 mr-4">
                    Tania Trigo
                  </span>
                  <span className="text-lg pl-2 text-pink-100">
                    Diseñadora de Imagen y Sonido
                  </span>
                </h3>
              </div>
              <div className="visible flex w-full pt-2 content-center justify-between text-white md:w-1/2 md:justify-end xs:invisible">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="mr-3">
                    <Link to="/">Reel</Link>
                  </li>
                  <li className="mr-3 text-pink-600">|</li>
                  <li className="mr-3">
                    <Link to="/bio">Bio</Link>
                  </li>
                  <li className="mr-3 text-pink-600">|</li>
                  <li className="mr-3">
                    <Link to="/contacto">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/bio">
              <Bio />
            </Route>
            <Route path="/contacto">
              <Contact />
            </Route>
            <Route path="/">
              <Video />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
