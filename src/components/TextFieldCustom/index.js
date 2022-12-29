import './index.scss';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)`
  width: 100%;

  &:hover {
    background-color: transparent;

    & .MuiInputBase-input {
      border: solid 1px #000;
    }

    & .MuiFilledInput-input.Mui-disabled {
      border: solid 1px #000;
    }
  }

  & .MuiInputBase-root {
    background-color: transparent;
  }

  & .MuiInputBase-input {
    padding: 6px 12px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #303c54;
    border: solid 1px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    height: auto;
    transition: border-color 0.3s ease, color 0.3s ease,
      background-color 0.3s ease;
  }

  & .MuiFilledInput-input.Mui-disabled {
    border-radius: 4px;
    color: #9da5b1;
    background-color: rgba(0, 0, 0, 0.06);
  }

  & .MuiInputBase-root {
    border-radius: 4px;
  }

  & .MuiInputBase-root::after,
  & .MuiInputBase-root::before {
    content: none;
  }
`;

const TextFieldCustom = ({
  lableText,
  value,
  name,
  disabled,
  type,
  customChange,
  switches,
}) => {
  return (
    <div className={'textfield-custom textfield-custom--' + type}>
      <InputLabel id="demo-simple-select-label">{lableText}</InputLabel>
      <CustomTextField
        disabled={
          disabled
            ? disabled
            : switches.find((item) => item.name === name).checked
            ? false
            : true
        }
        id="filled-disabled"
        value={value}
        name={name}
        onChange={customChange}
        variant="filled"
      />
    </div>
  );
};

export default TextFieldCustom;
