import React, { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
    link?: {
        url: string,
        productId: number,
    },
    handler?: MouseEventHandler,
    children?: ReactNode, 
};