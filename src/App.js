import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent.js';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponents} />
              <Route path="/employees" component={ListEmployeeComponents} />
              <Route path="/view-employee/:id" component={ViewEmployeeComponent}/>
              {/* // step 1 */}
              <Route path="/add-employee/:id" component={CreateEmployeeComponent} />
              {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent} /> */}
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>

    </div>
  );
}

export default App;
