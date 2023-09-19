const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');

const numberOfCategories = categoryItems.length;

console.log(`Number of categories: ${numberOfCategories}\n`);

categoryItems.forEach((categoryItem) => {

  const categoryName = categoryItem.querySelector('h2').textContent;

  const categoryElements = categoryItem.querySelectorAll('ul li');

  const numberOfElements = categoryElements.length;

  console.log(`Category: ${categoryName}`);
  
  console.log(`Elements: ${numberOfElements}\n`);
});