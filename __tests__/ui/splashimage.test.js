import { screen, render } from '@testing-library/react';

import SplashImage from '../../components/ui/splashImage/SplashImage';

test('does img render', () => {
    render(<SplashImage />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
});