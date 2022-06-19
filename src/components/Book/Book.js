

export const Book = ({ book }) => {
    return <>

        <div key={book.id}>{book?.book?.title} written by {book?.book?.author}</div>
        

    </>

}


