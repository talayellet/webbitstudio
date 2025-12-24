import { render } from '@testing-library/react';

import WebbitstudioECommerce from './e-commerce';

describe('WebbitstudioECommerce', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebbitstudioECommerce />);
    expect(baseElement).toBeTruthy();
  });
});
