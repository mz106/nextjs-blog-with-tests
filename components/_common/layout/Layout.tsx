import React from "react";
import { Fragment } from 'react';

import { NavBar } from '../navbar/NavBar';
import { Footer } from '../footer/Footer';

import classes from './layout.module.css';


export function Layout({ children }: { children: React.ReactNode }) {
    return (
        // <div className={classes.layout_wrapper}>
        //     <NavBar />
        //     <main className={classes.main_wrapper}>{children}</main>
        //     <Footer />
        // </div>
        <Fragment>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </Fragment>
    );
};