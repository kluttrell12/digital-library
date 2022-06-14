
// getter Functions
export const getMoods = () => {
    return fetch(`http://localhost:8088/moods`)
    .then(response => response.json())
}

export const getBooks = () => {
    return fetch(`http://localhost:8088/books?_expand=bookGenre`)
    .then(response => response.json())
}

export const getBookGenres = () => {
    return fetch(`http://localhost:8088/bookGenres`)
    .then(response => response.json())
}