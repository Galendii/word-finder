import React, { ReactElement, SelectHTMLAttributes } from 'react';
import { Select } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  values: { name: string; value: string | number }[];
}

// const defaultProps: Partial<SelectProps> = {
//   placeholder: null,
// };

const PrimarySelect = ({
  values,
  title,
  ...rest
}: SelectProps): ReactElement => {
  const generateOptions = (): ReactElement[] => {
    return Object.entries(values).map(([index, valor]) => (
      <option value={valor.value} key={index}>
        {valor.name}
      </option>
    ));
  };

  return (
    <Select {...rest} defaultValue={title ? '' : rest.defaultValue}>
      <>
        {title && (
          <option value="" disabled hidden>
            {title}
          </option>
        )}
        {generateOptions()}
      </>
    </Select>
  );
};

// PrimarySelect.defaultProps = defaultProps;
export default PrimarySelect;
