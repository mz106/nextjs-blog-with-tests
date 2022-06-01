import { Box } from "@chakra-ui/react";
import React from "react";

import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from '@/components/footer/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <main>{children}</main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};