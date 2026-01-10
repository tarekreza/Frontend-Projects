const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', (e) => {
    if (!search.classList.contains('active')) {
        e.preventDefault();
        search.classList.add('active');
        input.focus();
    }
});

search.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
        console.log('Search query:', query);
        // Add your search logic here
    }
});

document.addEventListener('click', (e) => {
    if (!search.contains(e.target)) {
        search.classList.remove('active');
    }
});
