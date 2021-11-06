import React from 'react'
import '../Styles/SidebarOption.css';

const SidebarOption = ({Icon,option}) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption-icon"/>}
            <h4>{option}</h4>
        </div>
    );
}

export default SidebarOption
