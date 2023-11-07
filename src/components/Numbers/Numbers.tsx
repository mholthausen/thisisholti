import React, { useState } from 'react';
import Button from '../Button/Button';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

interface DefaultNumbersProps {
  initValue: number;
}

export type NumbersProps = DefaultNumbersProps;

export const Numbers: React.FC<NumbersProps> = ({ initValue }) => {
  const [value, setValue] = useState(initValue);

  const onIncrement = () => {
    setValue(value + 1);
  };

  const onDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <span data-testid="result">Number is {value}</span>

      <div>
        {
          <Button
            onclick={onIncrement}
            datatestid="increment"
            icon={<AiFillPlusCircle />}
          />
        }
        {
          <Button
            onclick={onDecrement}
            datatestid="decrement"
            icon={<AiFillMinusCircle />}
          />
        }
      </div>
    </div>
  );
};
export default Numbers;
