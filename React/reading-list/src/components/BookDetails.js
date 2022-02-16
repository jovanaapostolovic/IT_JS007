import React, {createContext, useReducer} from "react";

const BookDetails = ({book}) => {
    return (
        <div>
            <h3>{book.title}</h3>
            <h5>{book.author}</h5>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default BookDetails;