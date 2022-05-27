import { screen, render } from '@testing-library/react';

import Home from '../pages/index';

test('to delete - testing workflows - does Create Next App render', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /Welcome to Next.js!/i });
    expect(heading).toBeInTheDocument();
});

