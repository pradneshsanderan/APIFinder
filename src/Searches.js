import React from 'react';
import style from './searches.module.css'

const Searches = ({ title, category, HTTPS, link, description, Auth }) => {
    return (
        <div className={style.Searches}>
            <h1 className={style.title}>{title}</h1>
            <h2 className={style.category}> Category: {category}</h2>
            <h4 className={style.description}>Description: {description}</h4>
            <p>{HTTPS}</p>
            <a style={{display: "table-cell"}} href={link} target="_blank">
                <button className={style.button} onClick={link}>Get API</button>
            </a>
        </div>
    );
}

export default Searches