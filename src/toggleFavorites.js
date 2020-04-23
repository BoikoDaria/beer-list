export default (item, state) => {
    const { favorites } = state;
    const favCopy = favorites.slice();

    const itemIndex = favCopy.findIndex((favItem) => favItem.id === item.id);

    if (itemIndex > -1) {
      favCopy.splice(itemIndex, 1);
    } else {
      favCopy.unshift(item);
    }

    return { favorites: favCopy };
  }