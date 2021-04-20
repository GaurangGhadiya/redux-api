import { Route, Switch } from "react-router";
import "./App.css";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AboutContainer from "./Containers/AboutContainer";
import AddAuthorsContainer from "./Containers/AddAuthorsContainer";
import AuthorsContainer from "./Containers/AuthorsContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/authors/add-author"
          component={AddAuthorsContainer}
        />

        <Route path="/authors/:id" component={AboutContainer} />
        <Route exact path="/authors" component={AuthorsContainer} />
      </Switch>
    </div>
  );
}

export default App;
