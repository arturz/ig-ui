import { render } from '@testing-library/react';
import StepperText from './StepperText';

it('renders', () => {
  const { asFragment } = render(<StepperText />);
  expect(asFragment()).toMatchSnapshot();
});
