import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} bttnClicked={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} bttnClicked={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" bttnClicked={fn} disabled={true} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" bttnClicked={fn} disabled={false} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });

  it('should render the button whith disabled true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" bttnClicked={fn} disabled={true} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} bttnClicked={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
