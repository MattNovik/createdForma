import './index.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { nanoid } from 'nanoid';
import { styled } from '@mui/material/styles';

const CustomSwitches = styled(FormGroup)`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: repeat(3, max-content);
  row-gap: 12px;
  column-gap: 69px;
`;

const CustomFormControlLabel = styled(FormControlLabel)`
  margin: 0;
  display: flex;
  column-gap: 24px;
  width: max-content;

  & .MuiTypography-root {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3b4b64;
  }
`;

const CustomSwitch = styled(Switch)`
  padding: 0;
  width: 29px;
  height: 14px;

  & .MuiButtonBase-root.MuiSwitch-switchBase {
    width: 12px;
    height: 12px;
    padding: 0;
    top: 50%;
    left: 2px;
    transform: translate(0, -50%);
  }

  & .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked {
    transform: translate(13px, -50%);

    & .MuiSwitch-thumb {
      background-color: #ffffff;
    }
  }

  & .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
  }

  & .MuiSwitch-track {
    background-color: #9da5b1;
    opacity: 1;
  }

  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #0d6efd;
    opacity: 1;
  }
`;

const SwitchesGroup = ({ labelText, options, customChangeSwitches }) => {
  return (
    <div className="switches">
      <p className="switches__name">{labelText}</p>
      <CustomSwitches>
        {options.map((option) => (
          <CustomFormControlLabel
            key={nanoid()}
            control={
              <CustomSwitch
                defaultChecked={option.checked}
                name={option.name}
                onChange={customChangeSwitches}
              />
            }
            label={option.label}
          />
        ))}
      </CustomSwitches>
    </div>
  );
};

export default SwitchesGroup;
