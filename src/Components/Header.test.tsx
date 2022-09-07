import {render, screen, cleanup} from '@testing-library/react';
import Header from './Header';

test('should render header', () =>{
    render(<Header></Header>);
    const todoElement = screen.getByTestId('header-2');
    expect(todoElement).toBeInTheDocument();
})
export{}