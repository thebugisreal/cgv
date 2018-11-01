import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { connect } from 'react-redux';
import { fetchMovies } from './actions/movieActions';
import { fetchPosts } from './actions/postActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faUser, faSearch, faAngleLeft, faFilm, faTimes } from '@fortawesome/free-solid-svg-icons';
// add font icon to library
library.add(fab, far, faUser, faSearch, faAngleLeft, faFilm, faTimes, far)

class App extends Component {

  // fetch data from API only once when app access
  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchPosts();
  }

  render() {
    return (
      <Router>
        <div className="position-relative">
          <Header />
          <Switch>
            { this.showContent(routes) }
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

  // map routes
  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route 
            key={ index }
            path={ route.path } 
            exact={ route.exact }
            component={ route.main }
          />
        );
      });
    }
    return result;
  }
}

export default connect(null, { fetchMovies, fetchPosts })(App);