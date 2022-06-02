import React from "react";

import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from '@/components/footer/Footer';

import classes from './layout.module.css';


export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={classes.layout_wrapper}>
            <NavBar />
            <main className={classes.main_wrapper}>{children}</main>
            <Footer />
        </div>
    );
};