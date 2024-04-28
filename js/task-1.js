// Оголошення функції isEnoughCapacity
function isEnoughCapacity(products, containerSize) {
  // Розрахунок загальної кількості товарів
  let totalQuantity = 0;
  for (const [productName, productQuantity] of Object.entries(products)) {
    totalQuantity += productQuantity;
  }

  // Перевірка, чи помістяться всі товари в контейнер
  return totalQuantity <= containerSize;
}

// Тестування функції
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false