import React from 'react';
import '../Menu/Menu.css';

const Menu = () => {
  return (
    <div className="wrapper">
        <div className="container-menu">
            <nav className="menu">
                <ul className="menu-list">
                    <li><a href="/">Спальня</a></li>
                    <li><a href="/">Ванна</a></li>
                    <li><a href="/">Офіс</a></li>
                    <li><a href="/">Вітальня</a></li>
                    <li><a href="/">Кухня та їдальня</a></li>
                    <li><a href="/">Зберігання</a></li>
                    <li><a href="/">Для вікон</a></li>
                    <li><a href="/">Для саду</a></li>
                    <li><a href="/">Для дому</a></li>
                    <li><a href="/">Outlet</a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Menu;
