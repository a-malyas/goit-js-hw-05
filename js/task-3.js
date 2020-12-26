class Storage {
    constructor(items) {
        this._items = items;
    }

    getItems() {
        return this._items;
    }

    addItem(item) {
        if (this._items.includes(item)) return;
                
        this._items.push(item);        
    }

    removeItem(itemToDelete) {
        const newItem = [];

        for (const item of this._items) {
            if (item === itemToDelete) continue;
                
            newItem.push(item)
        }
        this._items = newItem;
    }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.getItems()); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.getItems()); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]