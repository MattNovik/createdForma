import './index.scss';
import { ReactComponent as IconArrowDrop } from '../../img/dropArrow.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { nanoid } from 'nanoid';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(Select)`
  background-color: #f1f3f8;
  border-radius: 6px;

  & .MuiSelect-select {
    padding: 21px 22px 12px;
    min-height: auto;
    text-align: left;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #000000;
  }

  & .MuiSelect-select.MuiInputBase-input.MuiSelect-outlined {
    padding-right: 22px;
  }

  & legend {
    display: none;
  }

  & fieldset {
    top: 0;
    padding: 0;
    border: solid 1px #f1f3f8;
    transition: color 0.3s ease, background-color 0.3s ease,
      border-color 0.3s ease;
  }
`;

const CustomFormControl = styled(FormControl)`
  & .MuiFormLabel-root.Mui-focused,
  & .MuiFormLabel-filled {
    color: #383838;
    transform: translate(22px, 4px) scale(0.75);
    line-height: 17px;
  }

  & .MuiInputBase-root.Mui-focused {
    & .MuiOutlinedInput-notchedOutline {
      border: solid 1px #000;
      box-sizing: border-box;
    }
  }

  &
    .MuiFormLabel-filled
    ~ .MuiInputBase-root
    > .MuiOutlinedInput-notchedOutline {
    border: solid 1px #00ba88;
  }
`;

const CustomIconArrowDrop = styled(IconArrowDrop)`
  width: 15px;
  height: 7px;
  color: rgba(0, 0, 0, 0.54);
`;

const SelectorCustomCreated = ({ value, options, customChange }) => {
  return (
    <div className="select-created select-created--work-type">
      <CustomFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Выберите тим работы
        </InputLabel>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="workType"
          value={value}
          onChange={customChange}
          IconComponent={(props) => (
            <div className="select-created__custom-icon">
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
      </CustomFormControl>
    </div>
  );
};

export default SelectorCustomCreated;
