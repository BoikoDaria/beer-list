import React from 'react';
import List from './components/List'
import getFavorites from './getFavorites';
import './App.css';
import { FAVORITE_KEY } from './constants';
import getBeer from './data-providers/getBeer';
import toggleFavorites from './toggleFavorites';

class App extends React.Component {
  constructor(props) {
    super(props);

    const favorites = getFavorites();

    this.state = { favorites, items: [] };
    this.toggleFavorites = this.toggleFavorites.bind(this);
  }

  componentDidMount() {
    getBeer().then((items) => {
      this.setState({ items });
    })
  }

  toggleFavorites(item) {
    this.setState(toggleFavorites.bind(null, item), () => {
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(this.state.favorites));
    });
  }

  render() {
    const { favorites, items } = this.state;

    return (
      <div className="app-container">
        <List title='Beer which pair well with taco' toggleFavorites={this.toggleFavorites} items={items} />
        <List title='Favorite beers' toggleFavorites={this.toggleFavorites} items={favorites} />
      </div>
    );
  }
}

export default App;
