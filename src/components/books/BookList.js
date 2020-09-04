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
    const [islamikBook, setIslamikBook] = useState([]);


    useEffect(() => {
        const BooksTable = db.collection('Books');
        //Get Classic books
        BooksTable.where('categories', 'array-contains', 'Classic')
            .get().then(querySnapshot => {
                let classic = [];
                querySnapshot.forEach(doc => { classic.push({id:doc.id, ...doc.data()}); });
                setClassicBook(classic);
            })
        //Get Fiction books
        BooksTable.where('categories', 'array-contains', 'Fiction')
            .get().then(querySnapshot => {
                let fiction = [];
                querySnapshot.forEach(doc => { fiction.push({id:doc.id, ...doc.data()}); });
                setFictionBook(fiction);
            })
        //Get Non fiction books
        BooksTable.where('categories', 'array-contains', 'Nonfiction')
            .get().then(querySnapshot => {
                let nonfiction = []
                querySnapshot.forEach(doc => { nonfiction.push({id:doc.id, ...doc.data()}); });
                setNonFictionBook(nonfiction);
            })
        //Get Non islamik books
        BooksTable.where('categories', 'array-contains', 'Islamik')
            .get().then(querySnapshot => {
                let islamik = []
                querySnapshot.forEach(doc => { islamik.push({id:doc.id, ...doc.data()}); });
                setIslamikBook(islamik);
            })
    }, [])


    return (
        <div style={{width: "100%"}}>
            <div className="book__list">
                <div className="book__category">Classic</div>
                <div className="book__category__heading">
                    <h1>Classic</h1>
                    <p>view all</p>
                </div>
                <Slider {...settings} className="book__carousel">
                    {
                        classicBook.map(cb => ( <Book key={cb.id} id={cb.id} name={cb.name} price={cb.price}/> ))
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
                         nonFictionBook.map(nfb => ( <Book key={nfb.id} id={nfb.id} name={nfb.name} price={nfb.price}/> )) 
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
                        fictionBook.map(fb => ( <Book key={fb.id} id={fb.id} name={fb.name} price={fb.price}/> )) 
                    }
                </Slider>
            </div>
            
            <div className="book__list">
                <div className="book__category">Islamik</div>
                <div className="book__category__heading">
                    <h1>Islamik</h1>
                    <p>view all</p>
                </div>
                <Slider {...settings} className="book__carousel">
                    {
                         islamikBook.map(ib => ( <Book key={ib.id} id={ib.id} name={ib.name} price={ib.price}/> )) 
                    }
                </Slider>
            </div>

        </div>
    )
}

export default BookList