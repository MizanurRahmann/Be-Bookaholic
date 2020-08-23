import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { db } from '../../firebase/util';
import Book from './Book';
import '../../styles/css/BookList.css';
import settings from '../../styles/js/SliderConfig';

function BookList() {
    const [ classicBook, setClassicBook ] = useState([]);
    const [ fictionBook, setFictionBook ] = useState([]);
    const [ nonFictionBook, setNonFictionBook ] = useState([]);


    useEffect(() => {
        const BooksTable = db.collection('Books');
        //Find Classic books
        BooksTable.where('categories', 'array-contains', 'Classic')
            .get().then(querySnapshot => {
                let classic = [];
                querySnapshot.forEach(doc => { classic.push({id:doc.id, ...doc.data()}); });
                setClassicBook(classic);
            })
        //Find Fiction books
        BooksTable.where('categories', 'array-contains', 'Fiction')
            .get().then(querySnapshot => {
                let fiction = [];
                querySnapshot.forEach(doc => { fiction.push({id:doc.id, ...doc.data()}); });
                setFictionBook(fiction);
            })
        //Find Non fiction book
        BooksTable.where('categories', 'array-contains', 'Nonfiction')
            .get().then(querySnapshot => {
                let nonfiction = []
                querySnapshot.forEach(doc => { nonfiction.push({id:doc.id, ...doc.data()}); });
                setNonFictionBook(nonfiction);
            })
    }, [])


    return (
        <div>
            <div className="book__list">
                <div className="book__category">Classic</div>
                <div className="book__category__heading">
                    <h1>Classic</h1>
                    <p>view all</p>
                </div>
                <Slider {...settings} className="book__carousel">
                    {
                        classicBook.map(cb => ( <Book id={cb.id} name={cb.name} price={cb.price}/> ))
                    }
                </Slider>
            </div>
            <div className="book__list">
                <div className="book__category">Fiction</div>
                <div className="book__category__heading">
                    <h1>Fiction</h1>
                    <p>view all</p>
                </div>
                <Slider {...settings} className="book__carousel">
                    { 
                        fictionBook.map(fb => ( <Book id={fb.id} name={fb.name} price={fb.price}/> )) 
                    }
                </Slider>
            </div>
            <div className="book__list">
                <div className="book__category">Nonfiction</div>
                <div className="book__category__heading">
                    <h1>Nonfiction</h1>
                    <p>view all</p>
                </div>
                <Slider {...settings} className="book__carousel">
                    {
                         nonFictionBook.map(nfb => ( <Book id={nfb.id} name={nfb.name} price={nfb.price}/> )) 
                    }
                </Slider>
            </div>
        </div>
    )
}

export default BookList
