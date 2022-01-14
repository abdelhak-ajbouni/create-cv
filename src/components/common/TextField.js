import { forwardRef } from 'react';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/material/styles';

import { toCamelCase } from '../../pages/libs/functions';
import { grey, blue } from '../../pages/libs/constants';

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  font-size: 0.875rem;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 16px;
  margin: 16px
  transition: all 150ms ease;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? null : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
  }

  &:focus {
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
  }

  &.${inputUnstyledClasses.root} {
    background-color: ${blue[700]};
    margin: 10px;
  }
`,
);

const CustomInput = forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function TextField({ label, register }) {
  return <CustomInput
    {...register(toCamelCase(label))}
    label={label}
    placeholder={label}
    aria-label={label}
  />;
}
