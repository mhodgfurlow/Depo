import { render, screen, fireEvent } from '@testing-library/react';
import WaitlistPage from '../pages/waitlist';

test('renders Waitlist form and handles submit', async () => {
    render(<WaitlistPage />);

    const input = screen.getByPlaceholderText(/Enter your Solana wallet address/i);
    fireEvent.change(input, { target: { value: '0x12345abcdef' } });
    const button = screen.getByText(/Join Waitlist/i);
    fireEvent.click(button);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
