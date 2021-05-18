import { render } from '@testing-library/react';
import AppRightPanelSection from './AppRightPanelSection';

it('renders', () => {
  const { asFragment } = render(
    <AppRightPanelSection>
      <div>Some content...</div>
    </AppRightPanelSection>
  );
  expect(asFragment()).toMatchSnapshot();
});
