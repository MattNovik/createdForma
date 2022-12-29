import './index.scss';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root {
    max-height: 50px;
    padding: 14px 22px 16px;
    background-color: #f1f3f8;
    transition: border-color 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;
  }

  & label {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #9eaabd;
  }

  & .MuiInputBase-root.MuiOutlinedInput-root {
    padding-right: 22px;
  }

  & input {
    height: auto;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    background-color: transparent;
    transition: border-color 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;
  }

  & fieldset {
    top: 0;
    padding: 0;
    border: solid 1px #f1f3f8;
  }

  & .MuiInputBase-root.Mui-focused {
    & fieldset {
      border: solid 1px #000;
      box-sizing: border-box;
    }
  }

  & legend {
    display: none;
  }

  & .Mui-focused .MuiButtonBase-root {
    opacity: 1;
    visibility: visible;
  }
`;

const CustomAutocomplete = styled(Autocomplete)`
  & .MuiOutlinedInput-root .MuiAutocomplete-input {
    width: 100%;
    padding: 0;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #000000;
  }

  & .MuiFormLabel-root.Mui-focused,
  & .MuiFormLabel-filled {
    color: #ffffff;
    transform: translate(10px, -18px) scale(0.75);
  }

  & .MuiButtonBase-root {
    opacity: 0;
    visibility: hidden;
  }

  & .MuiIconButton-root {
    height: 18px;
    width: 18px;
  }

  & .MuiAutocomplete-endAdornment {
    width: 18px;
    height: 18px;
  }
`;

const SearchAutocomplete = ({
  type,
  name,
  value,
  options,
  customChange,
  errorSearch,
}) => {
  return (
    <div
      className={
        'textfield-autocomplete-search textfield-autocomplete-search--' + type
      }
    >
      <CustomAutocomplete
        disablePortal
        name={name}
        value={value}
        options={options}
        popupIcon={<></>}
        onChange={customChange}
        noOptionsText="Попробуйте другой вариант"
        renderInput={(params) => (
          <CustomTextField
            error={errorSearch}
            helperText="not now"
            {...params}
            label="Предмет"
          />
        )}
      />
    </div>
  );
};

export default SearchAutocomplete;
