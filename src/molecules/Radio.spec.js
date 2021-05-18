import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from './Radio';

it('works properly', () => {
  let checked = 'first';
  const onChangeChecked = jest.fn((value) => {
    checked = value;
  });

  function getGroup() {
    return (
      <>
        {['first', 'second', 'third'].map((value) => (
          <Radio
            name="test"
            value={value}
            onChangeChecked={onChangeChecked}
            checked={checked === value ? 1 : 0}
            key={value}
          >
            {value}
          </Radio>
        ))}
      </>
    );
  }

  render(getGroup());

  expect(screen.getByLabelText(/first/i)).toBeChecked();
  expect(screen.getByLabelText(/second/i)).not.toBeChecked();
  expect(screen.getByLabelText(/third/i)).not.toBeChecked();

  userEvent.click(screen.getByLabelText(/second/i));

  expect(screen.getByLabelText(/first/i)).not.toBeChecked();
  expect(screen.getByLabelText(/second/i)).toBeChecked();
  expect(screen.getByLabelText(/third/i)).not.toBeChecked();
  expect(checked).toBe('second');

  userEvent.click(screen.getByLabelText(/third/i));

  expect(screen.getByLabelText(/first/i)).not.toBeChecked();
  expect(screen.getByLabelText(/second/i)).not.toBeChecked();
  expect(screen.getByLabelText(/third/i)).toBeChecked();
  expect(checked).toBe('third');

  expect(onChangeChecked).toBeCalledTimes(2);
});
