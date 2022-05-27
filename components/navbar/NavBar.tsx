import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react'
import Link from 'next/link';


export function NavBar(): React.ReactElement {

    const links = [
        { display: 'All Articles' },
        { display: 'Search' },
    ];

    return (
        <Flex bg="rgba(60, 60, 60, 0.6)" px={4} style={{ fontFamily: "Unica One" }} h="10vh" alignItems="center">
            <Flex alignItems="center" justify="space-between">
                <Box pr={2} borderRight="2px">
                    <Link href="/">
                        DevBlog
                    </Link>
                </Box>
                <HStack as="nav" spacing={4} marginLeft="0.7vw">
                    {links.map(link => (
                        <Link href="/">
                            {link.display}
                        </Link>
                    ))}
                </HStack>
            </Flex>
        </Flex>
    );
};