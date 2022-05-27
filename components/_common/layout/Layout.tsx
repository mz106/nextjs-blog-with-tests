import { Box } from "@chakra-ui/react";
import React from "react";

import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from '@/components/footer/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box h="100vh" w="100vw">
            <Box zIndex={50} w="100wv">
                <NavBar />
            </Box>
            <Box w="100vw" mt={4}>
                <main>{children}</main>
            </Box>
            <Box zIndex={50} w="100wv">
                <Footer />
            </Box>
        </Box>
    );
};