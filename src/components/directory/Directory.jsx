import React, { useState } from 'react'
import MenuItem from '../menu-item/MenuItem'
import './Directory.scss'
import SECTIONS_DATA from "./sections.data.js";

const Directory = () => {
    const [sections, setSections] = useState(SECTIONS_DATA);
    return (
        <div className='directory-menu'>
            {sections.map(({id, ...sectionProps}) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </div>
    )
}

export default Directory
