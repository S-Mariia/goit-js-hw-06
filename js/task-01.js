const categories = document.querySelectorAll('.item');
const numbOfCategories = categories.length;

console.log('Number of categories:', numbOfCategories);

categories.forEach(item => { 
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
});
