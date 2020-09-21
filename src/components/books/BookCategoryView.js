import React from 'react'

function BookCategoryView(props) {
    const CATEGORY = props.match.params.category;
    
    return (
        <div style={{marginTop: "200px"}}>
            {CATEGORY}
        </div>
    )
}

export default BookCategoryView
