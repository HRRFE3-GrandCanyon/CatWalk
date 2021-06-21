import React from 'react';
import DescriptiveProductInfo from './DescriptiveProductInfo.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import { toHaveTextContent, toHaveStyle } from '@testing-library/jest-dom';
import { productId, productInfo } from './OverviewSampleTestData.js';

describe('descriptive product info tests', () => {

  it('correctly renders the slogan', () => {

    const renderedObject = render (<DescriptiveProductInfo productId={productId} productInfo={productInfo} />);

    const slogan = renderedObject.getAllByRole('slogan');
    expect(slogan[0]).toHaveTextContent('Blend in to your crowd');

  });

  it('correctly renders the description', () => {

    const renderedObject = render (<DescriptiveProductInfo productId={productId} productInfo={productInfo} />);

    const description = renderedObject.getAllByRole('description');
    expect(description[0]).toHaveTextContent('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');

  });

  it('correctly changes the color of social media buttons', () => {

    const renderedObject = render (<DescriptiveProductInfo productId={productId} productInfo={productInfo} />);

    const facebook = renderedObject.getAllByRole('facebook');
    const twitter = renderedObject.getAllByRole('twitter');
    const pinterest = renderedObject.getAllByRole('pinterest');

    expect(facebook[0]).toHaveStyle('color: #3B5998');
    expect(twitter[0]).toHaveStyle('color: #00ACEE');
    expect(pinterest[0]).toHaveStyle('color: #E60023');

  });

});
