import React from 'react';
import CartList from './CartList.jsx';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { toHaveTextContent, toHaveStyle } from '@testing-library/jest-dom';
import { requests } from './requests.js';

describe ('cartList tests', () => {

  it('should correctly render the count from the 2nd id in the cart', async () => {

    const mockGetCart = (requests.getCart = jest.fn());

    const fakeReturnData = {
      data: [
      {
        sku_id: 123123,
        count: 20
      },
      {
        sku_id: 123456,
        count: 52
      },
    ]
    }

    mockGetCart.mockResolvedValueOnce(fakeReturnData);
    const renderedObject = render (<CartList />);

    expect(mockGetCart).toHaveBeenCalledTimes(1);
    expect(mockGetCart).toHaveBeenCalledWith();

    await waitFor(() => renderedObject.getByText(52));

  });

});