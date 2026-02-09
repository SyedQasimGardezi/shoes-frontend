import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar" aria-label="Task categories">
      <h2 className="sidebar__title">Lists</h2>
      <ul className="sidebar__list">
        <li className="sidebar__item sidebar__item--active">Today</li>
        <li className="sidebar__item">Upcoming</li>
        <li className="sidebar__item">Work</li>
        <li className="sidebar__item">Personal</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
