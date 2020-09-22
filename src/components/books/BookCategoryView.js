import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/util';
import Book from './Book';
import BookLoading from './BookLoading';

function BookCategoryView(props) {
    const CATEGORY = props.match.params.category;
    const [ BOOKS, setBOOKS ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            const BooksTable = db.collection('Books');
            BooksTable.where(`categories`, `array-contains`, `${CATEGORY}`)
                .get().then(querySnapshot => {
                    let books = [];
                    querySnapshot.forEach(doc => { books.push({ id: doc.id, ...doc.data() }); });
                    setBOOKS(books);
                })
            setLoading(false)
        }, 3000);
        return () => clearTimeout(timing);
    }, [CATEGORY]);

    return (
        <div style={{marginTop: "80px"}} className="categoryView">
            {!loading && BOOKS.map(book => (
                <div className="individualBooks">
                    : <Book key={book.id} id={book.id} name={book.name} price={book.price} />
                </div>
            ))}
            {loading && Array(10).fill().map((_) => (
                <div className="individualBooks">
                    <BookLoading />
                </div>
            ))}
        </div>
    )
}

export default BookCategoryView
