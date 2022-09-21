// filter out specific items from the sidebar
function filterItems(items, itemsToFilter) {

    // filter out items of categories
    let result = items.map((item) => {
      if (item.type === 'category') {
        return {...item, items: filterItems(item.items, itemsToFilter)};
      }
      return item;
    });
  
    // filter out items in current level
    return result.filter( item => !itemsToFilter.includes(item.id) );
  }

  module.exports = {
    filterItems
  };