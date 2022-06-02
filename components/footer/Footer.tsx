import React from "react";

import classes from './footer.module.css';

export function Footer(): React.ReactElement {
    return (
        // <Flex bg="rgba(60, 60, 60, 0.6)" px={4} style={{ fontFamily: "Unica One" }} h="20vh" alignItems="center">
        //     <p>This is the footer</p>
        // </Flex>
        <div className={classes.footer_wrapper}>
            <p>This is the footer</p>
        </div>
    );
};