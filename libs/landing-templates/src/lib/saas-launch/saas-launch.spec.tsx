import { render } from '@testing-library/react';

import SaasLaunch from './saas-launch';

describe('SaasLaunch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SaasLaunch />);
    expect(baseElement).toBeTruthy();
  });
});
