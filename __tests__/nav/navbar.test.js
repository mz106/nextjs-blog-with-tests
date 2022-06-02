import { screen, render } from '@testing-library/react';

import { NavBar } from "@/components/navbar/NavBar";

test('does logo render', () => {
    render(<NavBar />);
    const logo = screen.getByRole('link', {name: /devblog/i});
    expect(logo).toBeInTheDocument();
});

test('do all four links render', () => {
    render(<NavBar />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
        console.log('link has rendered');
        expect(link).toBeInTheDocument();
    });
});