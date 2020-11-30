import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { db } from "../../firebase/util";
import { Link } from "react-router-dom";
import Book from "./Book";
import BookLoading from "./BookLoading";
import "../../styles/css/BookList.css";
import settings from "../../styles/js/SliderConfig";

function BookList() {
    const [classicBook, setClassicBook] = useState([]);
    const [fictionBook, setFictionBook] = useState([]);
    const [nonFictionBook, setNonFictionBook] = useState([]);
    const [islamikBook, setIslamikBook] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            const BooksTable = db.collection("Books");
            //Get Classic books
            BooksTable.where("categories", "array-contains", "Classic")
                .get()
                .then((querySnapshot) => {
                    let classic = [];
                    querySnapshot.forEach((doc) => {
                        classic.push({ id: doc.id, ...doc.data() });
                    });
                    setClassicBook(classic);
                });
            //Get Fiction books
            BooksTable.where("categories", "array-contains", "Fiction")
                .get()
                .then((querySnapshot) => {
                    let fiction = [];
                    querySnapshot.forEach((doc) => {
                        fiction.push({ id: doc.id, ...doc.data() });
                    });
                    setFictionBook(fiction);
                });
            //Get Non fiction books
            BooksTable.where("categories", "array-contains", "Nonfiction")
                .get()
                .then((querySnapshot) => {
                    let nonfiction = [];
                    querySnapshot.forEach((doc) => {
                        nonfiction.push({ id: doc.id, ...doc.data() });
                    });
                    setNonFictionBook(nonfiction);
                });
            //Get Non islamik books
            BooksTable.where("categories", "array-contains", "Islamik")
                .get()
                .then((querySnapshot) => {
                    let islamik = [];
                    querySnapshot.forEach((doc) => {
                        islamik.push({ id: doc.id, ...doc.data() });
                    });
                    setIslamikBook(islamik);
                });
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timing);
    }, []);

    return (
        <div style={{ width: "100%" }}>
            <div className="book__list">
                <div className="book__category">Classic</div>
                <div className="book__category__heading">
                    <h1>Classic</h1>
                    <Link to="/view/Classic">view all</Link>
                </div>
                {loading && (
                    <Slider {...settings} className="book__carousel">
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                    </Slider>
                )}

                {!loading && (
                    <Slider {...settings} className="book__carousel">
                        {classicBook.map((cb) => (
                            <Book
                                key={cb.id}
                                id={cb.id}
                                name={cb.name}
                                price={cb.price}
                                author={cb.author}
                            />
                        ))}
                    </Slider>
                )}
            </div>

            <div className="book__list">
                <div className="book__category">Nonfiction</div>
                <div className="book__category__heading">
                    <h1>Nonfiction</h1>
                    <Link to="/view/Nonfiction">view all</Link>
                </div>
                {loading && (
                    <Slider {...settings} className="book__carousel">
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                    </Slider>
                )}

                {!loading && (
                    <Slider {...settings} className="book__carousel">
                        {nonFictionBook.map((nfb) => (
                            <Book
                                key={nfb.id}
                                id={nfb.id}
                                name={nfb.name}
                                price={nfb.price}
                                author={nfb.author}
                            />
                        ))}
                    </Slider>
                )}
            </div>

            <div className="book__list">
                <div className="book__category">Fiction</div>
                <div className="book__category__heading">
                    <h1>Fiction</h1>
                    <Link to="/view/Fiction">view all</Link>
                </div>
                {loading && (
                    <Slider {...settings} className="book__carousel">
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                    </Slider>
                )}

                {!loading && (
                    <Slider {...settings} className="book__carousel">
                        {fictionBook.map((fb) => (
                            <Book
                                key={fb.id}
                                id={fb.id}
                                name={fb.name}
                                price={fb.price}
                                author={fb.author}
                            />
                        ))}
                    </Slider>
                )}
            </div>

            <div className="book__list">
                <div className="book__category">Islamik</div>
                <div className="book__category__heading">
                    <h1>Islamik</h1>
                    <Link to="/view/Islamik">view all</Link>
                </div>
                {loading && (
                    <Slider {...settings} className="book__carousel">
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                        <BookLoading />
                    </Slider>
                )}
                {!loading && (
                    <Slider {...settings} className="book__carousel">
                        {islamikBook.map((ib) => (
                            <Book
                                key={ib.id}
                                id={ib.id}
                                name={ib.name}
                                price={ib.price}
                                author={ib.author}
                            />
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default BookList;
