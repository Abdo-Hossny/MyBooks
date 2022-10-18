import React, {useState} from "react";

import './AddButton.css';
import AddBook from '../../icons/add.svg';
import BookStore from "./BookStore";

const AddButton = () => {

   const activeStatus = () => {setActive(false);}
    
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(true);
        };
    
        const stopEditing = () => {
            setActive(false);
        }
    return(
        <>
            
            <button className='addButton'  onClick={handleToggle}><img src={AddBook} alt="add"/></button>
            {isActive && <BookStore onCancle={stopEditing}/>}
        </>
        
    )
}

export default AddButton;