import React from 'react';
import './Menu.css'; 
import { MENU_ITEMS } from '../../constants/constants';
import { SELECTED_MENU_ITEM } from '../../constants/constants';

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                {MENU_ITEMS.map((item, index) => (
                    <li key={index} className={`menu-item ${SELECTED_MENU_ITEM === item ? 'active' : ''}`}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Menu;