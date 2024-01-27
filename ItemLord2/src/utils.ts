import allItemsNames from "./items";
import { Item, Notification } from "./types";

export const initPocket = (): Item[] => [
  { name: allItemsNames[0], qty: 1, price: 3000 },
  { name: allItemsNames[1], qty: 2, price: 100 },
  { name: allItemsNames[2], qty: 1, price: 10 },
  { name: allItemsNames[3], qty: 3, price: 3500 },
  { name: allItemsNames[4], qty: 2, price: 5 },
];

export const generateItemsForSale = (): Item[] => {
  const itemsForSale: Item[] = [];
  const randomLength = Math.floor(Math.random() * allItemsNames.length) + 5;

  for (let i = 0; i < randomLength && i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * allItemsNames.length);
    const randomQty = Math.floor(Math.random() * 10) + 1;
    const randomPrice = Math.floor(Math.random() * 1000) + 1;

    itemsForSale.push({
      name: allItemsNames[randomIndex],
      qty: randomQty,
      price: randomPrice,
    });

    // Remove selected element from the array to avoid duplicates
    allItemsNames.splice(randomIndex, 1);
  }

  return itemsForSale;
};

export const notifications: Notification[] = [
  {
    color: "magenta",
    text: "This is the last day! Better sell all you can!",
  },
  {
    color: "red",
    text: "This is the last day! Better sell all you can!",
  },
];

// Returns the quantity of all items in pocket
export const getAllItemsQty = (pocket: Item[]): number => {
  let qtySum = 0;
  pocket.forEach((item) => {
    qtySum += item.qty;
  });
  return qtySum;
};

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
