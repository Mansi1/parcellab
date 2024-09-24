import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import React from 'react';
import LoginPage from '../src/page/login/login-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{ path: '*', element: <LoginPage /> }]);

describe('login form', () => {
  it('renders login', () => {
    render(<RouterProvider router={router} />);

    const orderNumberInput =
      screen.queryByTestId<HTMLInputElement>('orderNumber');
    const zipCodeInput = screen.queryByTestId<HTMLInputElement>('zipcode');
    const form = screen.queryByTestId<HTMLFormElement>('form');
    const btn = screen.queryByTestId<HTMLButtonElement>('btn');

    console.log(btn);

    expect(btn).not.toBeNull();
    expect(form).not.toBeNull();
    expect(orderNumberInput).not.toBeNull();
    expect(zipCodeInput).not.toBeNull();

    act(() => {
      fireEvent.change(orderNumberInput!, { target: { value: 'myOrderId' } });
      fireEvent.change(zipCodeInput!, { target: { value: 'myZipCode' } });
    });

    const handleClick = vi.fn();
    form!.onsubmit = handleClick;

    act(() => {
      fireEvent.click(btn!);
    });
    //check that form sumbit works
    expect(handleClick).toHaveBeenCalledOnce();
    expect(orderNumberInput?.value).toEqual('myOrderId');
    expect(zipCodeInput?.value).toEqual('myZipCode');
  });
});
