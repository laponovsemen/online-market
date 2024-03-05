import React from 'react';
import styles from "../../styles/Sidebar.module.css"
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useSelector} from "react-redux";

const SideBar = () => {
    const {list} = useSelector(({categories}) => categories)
    console.log(list, "list")
    return (
        <section className={styles.sidebar}>
            <div className="title">
                CATEGORIES
            </div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({id, name}) => {
                        return (
                            <li key={id}>
                                <NavLink
                                    className={({isActive}) => `${styles.link} ${isActive ? styles.active : ""}`}
                                    to={`/categories/${id}`}
                                >
                                    {name}</NavLink>
                            </li>
                        )
                    })}
                    <li>
                        <NavLink to={`/categories/${1}`}>
                            Link
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className={styles.footer}>
                <a href={"/help"} target={"_blank"} className={styles.link}>
                    Help
                </a>
                <a href={"/terms"} target={"_blank"} className={styles.link} style={{textDecoration: "underline"}}>
                    Terms & Conditions
                </a>
                <a href={"/help"} target={"_blank"} className={styles.link}>
                    Help
                </a>
            </div>
        </section>
    );
};

export default SideBar;
