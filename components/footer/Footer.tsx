import React from "react";
import { Flex } from '@chakra-ui/react';


export function Footer(): React.ReactElement {
    return (
        <Flex bg="rgba(60, 60, 60, 0.6)" px={4} style={{ fontFamily: "Unica One" }} h="25vh" alignItems="center">
            <p>This is the footer</p>
        </Flex>
    );
};