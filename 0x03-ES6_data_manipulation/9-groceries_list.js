// Create a function named groceryItemList that returns a map of groceries with the
// following items (name, quantity):

export default function groceryItemList() {
  const groceryItem = new Map();
  groceryItem.set('Apples', 10);
  groceryItem.set('Tomatoes', 10);
  groceryItem.set('Pasta', 1);
  groceryItem.set('Rice', 1);
  groceryItem.set('Banana', 5);
  return groceryItem;
}
