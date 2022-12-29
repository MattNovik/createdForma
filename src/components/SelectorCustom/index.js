import './index.scss';
import { ReactComponent as IconArrowDrop } from '../../img/dropArrow.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(Select)`
  margin: 0 0 21px;

  & .MuiSelect-select {
    padding: 6px 34px 6px 12px;
    min-height: auto;
    text-align: left;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #303c54;
  }

  & .MuiSelect-select.MuiInputBase-input.MuiSelect-outlined {
    padding-right: 34px;
  }

  & fieldset {
    top: 0;
    transition: border-color 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;
  }
`;

const CustomTextField = styled(TextField)`
  &:hover {
    background-color: transparent;

    & .MuiInputBase-input {
      border: solid 1px #000;
    }

    & .MuiInputBase-root {
      background-color: transparent;
    }
  }

  & .MuiInputBase-root {
    position: relative;
    background-color: transparent;
    transition: border-color 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;
  }

  & .MuiInputBase-input,
  & .MuiInputBase-input.Mui-focused {
    border: solid 1px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    padding: 6px 12px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #303c54;
    height: auto;
    transition: border-color 0.3s ease, background-color 0.3s ease,
      color 0.3s ease;
  }

  & .MuiInputBase-root.Mui-disabled {
    background-color: transparent;
  }

  & .MuiFilledInput-input.Mui-disabled {
    border-radius: 4px;
    color: #9da5b1;
    background-color: rgba(0, 0, 0, 0.06);
  }

  & .MuiInputBase-root::after,
  & .MuiInputBase-root::before {
    content: none;
  }
`;

const CustomIconArrowDrop = styled(IconArrowDrop)`
  width: 15px;
  height: 7px;
  color: rgba(0, 0, 0, 0.54);
`;

const SelectorCustom = ({
  labelText,
  value,
  options,
  valueSecond,
  customChange,
  customChangeSecond,
  formNameCustomDisabled,
}) => {
  return (
    <div className="select select--form-name">
      <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
      <CustomSelect
        labelId="demo-simple-select-label"
        name="nameForm"
        value={value}
        label="Заголовок формы:"
        onChange={customChange}
        IconComponent={(props) => (
          <div className="select__custom-icon">
            <CustomIconArrowDrop
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined"
              data-testid="ArrowDropDownIcon"
              aria-hidden="true"
              focusable="false"
            />
          </div>
        )}
      >
        {options.map((option) => (
          <MenuItem key={nanoid()} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
      <CustomTextField
        disabled={formNameCustomDisabled}
        id="filled-disabled"
        value={valueSecond}
        onChange={customChangeSecond}
        variant="filled"
        name="formNameCustom"
      />
    </div>
  );
};

export default SelectorCustom;
