import './index.scss';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { nanoid } from 'nanoid';
import { styled } from '@mui/material/styles';

const CustomRadioGroup = styled(RadioGroup)`
  display: flex;
  column-gap: 24px;
`;

const CustomFormControlLabel = styled(FormControlLabel)`
  margin: 0;

  span {
    padding: 0;
  }

  & .MuiButtonBase-root {
    margin: 0 6px 0 0;

    & span:first-of-type {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: solid 1px rgba(0, 0, 0, 0.25);
      transition: border-color ease 0.3s, border-width ease 0.3s;
      box-sizing: border-box;
    }
  }

  & .MuiTypography-root {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3b4b64;
  }

  & .Mui-checked {
    color: #0d6efd;

    & span:first-of-type {
      border: solid 4px #0d6efd;
    }
  }

  & .MuiSvgIcon-root {
    display: none;
  }

  & .MuiSvgIcon-root:last-child {
    display: none;
  }
`;

const RadioGroupCustom = ({
  labelText,
  name,
  value,
  id,
  options,
  customChange,
}) => {
  return (
    <div className="radio-group">
      <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
      <CustomRadioGroup
        row
        aria-labelledby="bg-color-form"
        name={name}
        value={value}
        onChange={customChange}
        id={id}
      >
        {options.map((option) => (
          <CustomFormControlLabel
            key={nanoid()}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </CustomRadioGroup>
    </div>
  );
};

export default RadioGroupCustom;
