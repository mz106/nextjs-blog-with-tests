
import React from 'react'
import Link from 'next/link';

import classes from "./navbar.module.css";


export function NavBar(): React.ReactElement {

    const links = [
        { display: 'All Articles' },
        { display: 'Search' },
        { display: 'Shop'}
    ];

    return (
        <div className={classes.container_nav}>
            <div className={classes.container_nav_inner}>
                <div className={classes.container_logo}>
                    <Link href="/">
                        DevBlog
                    </Link>
                </div>
                <ul className={classes.nav_list}>
                    {links.map((link, index) => (
                        <li key={index} className={classes.nav_listitem_link}>
                            <Link 
                            href="/"
                            >
                                {link.display}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};