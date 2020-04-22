import React from 'react';
import List from './components/List'
import getFavorites from './getFavorites';
import './App.css';
import { FAVORITE_KEY } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);

    const favorites = getFavorites();

    this.state = { favorites, items: [] };
    this.toggleFavorites = this.toggleFavorites.bind(this);
  }

  componentDidMount() {
      fetch('https://api.punkapi.com/v2/beers?ibu_gt=30&food=taco').then((response) => {
          return response.json && response.json();
      }).then((items) => {
          this.setState({ items });
      })
  }

  toggleFavorites(item) {
    this.setState((state) => {
      const { favorites } = state;
      const favCopy = favorites.slice();
  
      const itemIndex = favCopy.findIndex((favItem) => favItem.id === item.id);
  
      if (itemIndex > -1) {
        favCopy.splice(itemIndex, 1);
      } else {
        favCopy.unshift(item);
      }

      return { favorites: favCopy };
    }, () => {
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(this.state.favorites));
    })
  }

  render() {
    const { favorites, items } = this.state;

    return (
      <div className="App">
        <List toggleFavorites={this.toggleFavorites} items={items} favorites={favorites} />
        <List toggleFavorites={this.toggleFavorites} items={favorites} favorites={favorites} />
      </div>
    );
  }
}

export default App;
