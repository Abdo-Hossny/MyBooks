import React from 'react';
import ArrowBack from '../../icons/arrow-back.svg';
import './BookStore.css'
const BookStore = (props) => {
    return (
        <div className="bookstore">
            <div className="header">
                <button type='button' onClick={props.onCancle}><img src={ArrowBack} alt="Arrow-Back" /></button>
                <form>
                    <input type="text" name="Search" placeholder="Search..." />
            </form>
            </div>
            <div className="books">
                <div className="book-item">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default BookStore;
