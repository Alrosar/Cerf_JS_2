console.log("Main JS >>>>> Active");
let result;


const search = async (value, type) => {
    fetch(`https://www.omdbapi.com/?apikey=9d7e1492&type=${type}&s=${value}`).then((response) => response.json()).then((data) => {
        console.log(data);
        result = data;
    })
}

window.onload = function() {
    console.log("Main JS >>>>> Window Loaded");
    const SEARCH_INPUT = document.querySelector('.search-input');
    const SEARCH_SELECT = document.querySelector('#search-select');
    SEARCH_INPUT.addEventListener('input', function(e) {
        console.log(SEARCH_INPUT.value, SEARCH_SELECT.value,'value');
        let searchValue = SEARCH_INPUT.value;
        let searchType = SEARCH_SELECT.value;

        if (searchValue.length > 3) {
            console.log('Searching...');
            search(searchValue, searchType);
        }
    })
};