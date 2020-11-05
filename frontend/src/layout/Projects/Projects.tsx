import React, { FunctionComponent } from 'react';
import styles from './Projects.module.css';
import { Link } from "react-router-dom";

const projects = [
    {name: "AviaSales", link: '/aviasales', id: -1}
];

projects.forEach(project => project.id = (Math.floor(Math.random() * 999999 + 1) * Math.floor(Math.random() * 999999 + 1)));

export const Projects: FunctionComponent<any> = () => {
    return <div className={styles.container}>
        <Link to="/" className={styles.backButton}>Go back</Link>
        <ul className={styles.projectList}>
            {
                projects.map(project => {
                    return <li key={project.id} className={styles.projectListItem}>
                        <Link to={project.link}>{project.name}</Link>
                    </li>;
                })
            }
        </ul>
    </div>;
};
