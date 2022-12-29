import './index.scss';
import { ReactComponent as IconArrowDrop } from '../../img/dropArrow.svg';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root {
    padding: 6px 34px 6px 12px;
  }

  & .MuiFormLabel-root {
    transform: translate(0, -50%);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #303c54;
    left: 12px;
    top: 50%;
  }

  & .MuiInputBase-root.MuiOutlinedInput-root {
    padding-right: 34px;
  }

  & .MuiAutocomplete-endAdornment .MuiButtonBase-root[title='Clear'] {
    margin-right: 5px;
  }
`;

const CustomAutocomplete = styled(Autocomplete)`
  & .MuiOutlinedInput-root .MuiAutocomplete-input {
    width: 100%;
    padding: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #303c54;
  }

  & .MuiFormLabel-root.Mui-focused {
    display: none;
  }

  & .MuiFormLabel-filled {
    display: none;
  }

  & .MuiIconButton-root {
    height: 18px;
    width: 18px;
  }

  & fieldset {
    border: solid 1px rgba(0, 0, 0, 0.23);
    transition: border-color 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;
  }

  &:hover {
    & fieldset {
    }
  }
`;

const TextFieldAutocomplete = ({
  labelText,
  type,
  name,
  options,
  customChange,
}) => {
  return (
    <div className={'textfield-autocomplete textfield-autocomplete--' + type}>
      <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
      <CustomAutocomplete
        disablePortal
        options={options}
        onChange={customChange}
        popupIcon={<IconArrowDrop />}
        noOptionsText="Попробуйте другой вариант"
        renderInput={(params) => (
          <CustomTextField name={name} {...params} label={options[0].label} />
        )}
      />
    </div>
  );
};

export default TextFieldAutocomplete;
