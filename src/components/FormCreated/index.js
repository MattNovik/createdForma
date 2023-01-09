import './index.scss';
import React from 'react';
import { ReactComponent as IconArrowDrop } from '../../img/dropArrow.svg';
import { ReactComponent as IconError } from '../../img/error.svg';
import { ReactComponent as IconClose } from '../../img/close.svg';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SelectorCustomCreated from '../SelectorCustomCreated';
import CommentField from '../CommentField';
import { typesData, subjectData } from '../../data/data';
import { styled } from '@mui/material/styles';
/* import styled from '@emotion/styled'; */
import { IMaskInput } from 'react-imask';
import { useEffect, useState } from 'react';

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root {
    max-height: 50px;
    padding: 20px 14px 10px 22px;
    background-color: #f1f3f8;
  }

  & label {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #9eaabd;
  }

  & .MuiInputBase-root.MuiOutlinedInput-root {
    padding-right: 14px;
  }

  & input {
    height: auto;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    background-color: transparent;
  }

  & .MuiFormHelperText-root {
    display: none;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin: 2px 0 0;
    color: #ffffff;
  }

  & .Mui-error ~ .MuiFormHelperText-root {
    display: block;
    color: #ffffff;
  }

  & fieldset {
    top: 0;
    padding: 0;
    border: solid 1px #f1f3f8;
    transition: color 0.3s ease, background-color 0.3s ease,
      border-color 0.3s ease;
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
  & .MuiFormControl-root.MuiTextField-root > .MuiInputBase-root {
    padding-right: 14px;
  }

  & .MuiOutlinedInput-root .MuiAutocomplete-input {
    width: 100%;
    padding: 0;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #000000;
  }

  & .MuiFormLabel-root {
    transform: translate(22px, 16px);
  }

  & .MuiFormLabel-root.Mui-focused,
  & .MuiFormLabel-filled {
    color: #383838;
    transform: translate(22px, 4px) scale(0.75);
  }

  & .MuiFormLabel-filled.Mui-focused ~ .MuiInputBase-root .icon-close {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  &
    .MuiFormLabel-filled
    ~ .MuiInputBase-root
    > .MuiOutlinedInput-notchedOutline {
    border: solid 1px #00ba88;
  }

  &
    .MuiFormLabel-filled.Mui-error
    ~ .MuiInputBase-root
    > .MuiOutlinedInput-notchedOutline {
    border: solid 1px #d32f2f;
  }

  & .MuiInputBase-root.Mui-error .icon-error {
    display: block;
  }

  &
    .MuiFormLabel-filled.Mui-focused
    ~ .MuiInputBase-root.Mui-error
    .icon-error {
    display: none;
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

  & .icon-close {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 12px;
    height: 12px;
    margin: -7px 0 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  & .icon-error {
    position: absolute;
    top: 50%;
    right: 14px;
    width: 16px;
    height: 16px;
    margin: -7px 0 0;
    display: none;
  }
`;

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (###) ###-##-##"
      definitions={{
        '#': /[0-9]|_/,
      }}
      inputRef={ref}
      onAccept={(value) => {
        onChange(value);
      }}
      overwrite
      placeholder="q"
    />
  );
});

const CustomTextFieldForm = styled(TextField)`
  background-color: #f1f3f8;
  border-radius: 6px;
  max-height: 50px;

  & .MuiFormLabel-filled {
    transform: translate(22px, 4px) scale(0.75);
    color: #383838;
  }

  & .MuiFormLabel-filled.Mui-focused ~ .MuiInputBase-root .icon-close {
    opacity: 1;
    visibility: visible;
  }

  & .MuiInputBase-root.Mui-error .icon-error {
    opacity: 1;
    visibility: visible;
  }

  &
    .MuiFormLabel-filled.Mui-focused
    ~ .MuiInputBase-root.Mui-error
    .icon-error {
    opacity: 0;
    visibility: hidden;
  }

  & label {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #9eaabd;
    transform: translate(22px, 18px);
  }

  & .MuiFormLabel-root.Mui-focused {
    display: block;
    transform: translate(22px, 4px) scale(0.75);
    color: #383838;
  }

  & input {
    height: auto;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: #000000;
    padding: 20px 22px 10px;
    background-color: transparent;
  }

  & .Mui-error input {
    color: #9eaabd;
  }

  & .Mui-error.Mui-focused input {
    color: #000;
  }

  & input:-webkit-autofill,
  & input:-webkit-autofill:focus {
    transition: background-color 600000s 0s;
  }

  & .MuiFormHelperText-root {
    display: none;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin: 2px 0 0;
    color: #ffffff;
  }

  & .Mui-error ~ .MuiFormHelperText-root {
    display: block;
    color: #ffffff;
  }

  & fieldset {
    top: 0;
    padding: 0;
    border: solid 1px #f1f3f8;
    transition: color 0.3s ease, background-color 0.3s ease,
      border-color 0.3s ease;
  }

  & .MuiInputBase-root.Mui-focused {
    & fieldset {
      top: 0;
      border: solid 1px #000;
      box-sizing: border-box;
    }
  }

  & .MuiFormLabel-filled ~ .MuiInputBase-root fieldset {
    border: solid 1px #00ba88;
  }

  & .MuiFormLabel-filled.Mui-error ~ .MuiInputBase-root fieldset {
    border: solid 1px #ff0000;
  }

  & legend {
    display: none;
  }

  & .icon-close {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  & .icon-error {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translate(0, -50%);
    width: 16px;
    height: 16px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    pointer-events: none;
  }
`;

const phoneRegExp = /^((\+7|7)..([0-9]){3}..([0-9]){3}.([0-9]){2}.([0-9]){2})$/;

const validationSchema = yup.object({
  city: yup.string() /* .required() */,
  fontSize: yup.string() /* .required() */,
  name: yup.string() /* .required() */,
  type_of_work_raw: yup.string(),
  subjectType: yup.string() /* .required() */,
  theme: yup.string() /* .required() */,
  email: yup.string().email() /* .required() */,
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  /* .required() */
});

const FormCreated = ({
  /*   color,
  realFormName,
  switches,
  subjectName,
  cityName,
  buttonName,
  type_of_work_raw, */
  jsonData,
}) => {
  const data = jsonData;
  const [newNameChecked, setNameChecked] = useState(
    data.switches
      ? data.switches.find((item) => item.name === 'name').checked
      : false
  );
  const [cityChecked, setCityChecked] = useState(
    data.switches
      ? data.switches.find((item) => item.name === 'city').checked
      : false
  );

  const [addComment, setAddComment] = useState(false);

  const formikCreated = useFormik({
    initialValues: {
      city: data.cityName ? '' : '',
      fontSize: newNameChecked ? '' : '',
      name: '',
      type_of_work_raw:
        data.type_of_work_raw && data.type_of_work_raw.value !== 'undefined'
          ? data.type_of_work_raw.value
          : '',
      subjectType: data.subjectName ? data.subjectName.value : '',
      theme: '',
      email: '',
      phone: '+7 (___) ___-__-__',
      comments: '',
      files: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      /* window.open('https://studservis.ru/', '_blank'); */
      alert(JSON.stringify(values, null, 2));
    },
  });
  const customChange = (e) => {
    formikCreated.handleChange(e);
  };

  useEffect(
    () => {
      formikCreated.setFieldValue(
        'subjectType',
        data.subjectName ? data.subjectName.value : ''
      );
      console.log('update');
    },
    [
      /* data.subjectName */
    ]
  );

  useEffect(
    () => {
      formikCreated.setFieldValue(
        'type_of_work_raw',
        data.type_of_work_raw && data.type_of_work_raw.value !== 'undefined'
          ? data.type_of_work_raw.value
          : ''
      );
    },
    [
      /* data.type_of_work_raw */
    ]
  );

  useEffect(
    () => {
      formikCreated.setFieldValue('city', data.cityName ? data.cityName : '');
    },
    [
      /* data.cityName */
    ]
  );

  useEffect(
    () => {
      if (
        data.switches &&
        data.switches.find((item) => item.name === 'name').checked
      ) {
        setNameChecked(true);
      } else if (
        data.switches &&
        data.switches.find((item) => item.name === 'name').checked === false
      ) {
        setNameChecked(false);
      }
      if (
        data.switches &&
        data.switches.find((item) => item.name === 'city').checked
      ) {
        setCityChecked(true);
      } else if (
        data.switches &&
        data.switches.find((item) => item.name === 'city').checked === false
      ) {
        setCityChecked(false);
      }
    },
    [
      /* data.switches */
    ]
  );

  useEffect(
    () => {
      if (newNameChecked) {
        formikCreated.setFieldValue('name', '');
      } else if (newNameChecked === false) {
        formikCreated.setFieldValue('name', '');
      }
    },
    [
      /* newNameChecked */
    ]
  );

  useEffect(
    () => {
      if (cityChecked) {
        formikCreated.setFieldValue('city', data.cityName ? data.cityName : '');
      } else if (cityChecked === false) {
        formikCreated.setFieldValue('city', ' ');
      }
    },
    [
      /* cityChecked */
    ]
  );

  const customUploadFiles = (files) => {
    let newArray = [];
    files.map((item) => {
      newArray.push(item.name);
    });
    formikCreated.setFieldValue('files', newArray);
  };

  return (
    <form
      onSubmit={formikCreated.handleSubmit}
      className={
        data.color
          ? 'form-created form-created--' + data.color
          : 'form-created form-created--red'
      }
    >
      <p className="form-created__name">
        {data.realFormName
          ? data.realFormName
          : 'Рассчитайте цену консультации:'}
      </p>
      <div className="form-created__wrapper">
        <SelectorCustomCreated
          labelText="Выберите текст работы"
          type="work-type"
          value={formikCreated.values.type_of_work_raw}
          options={typesData}
          customChange={customChange}
        />
        {/*         <SearchAutocomplete
          labelText="Предмет"
          type="subject-type-text"
          name="subjectType"
          value={formikCreated.values.subjectType}
          options={subjectData}
          customChange={customChangeSearch}
          error={errorSearch}
        /> */}
        {data.switches &&
        data.switches.find((item) => item.name === 'subject').checked ? (
          <div
            className={
              'textfield-autocomplete-search textfield-autocomplete-search--subject-type-text'
            }
          >
            <CustomAutocomplete
              disablePortal
              value={formikCreated.values.subjectType}
              options={subjectData}
              freeSolo={true}
              popupIcon={<></>}
              onChange={(e) => {
                if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                  formikCreated.setFieldValue('subjectType', '');
                } else {
                  formikCreated.setFieldValue(
                    'subjectType',
                    e.target.innerHTML
                  );
                }
              }}
              noOptionsText="Попробуйте другой вариант"
              renderInput={(params) => (
                <CustomTextField
                  error={
                    formikCreated.touched.subjectType &&
                    Boolean(formikCreated.errors.subjectType)
                  }
                  name="subjectType"
                  helperText="Выберите предмет"
                  label="Предмет*"
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        <IconClose
                          onClick={(e) => {
                            if (
                              e.target.tagName === 'svg' ||
                              e.target.tagName === 'path'
                            ) {
                              formikCreated.setFieldValue('subjectType', '');
                            }
                          }}
                          className="icon-close"
                        />
                        <IconError className="icon-error" />
                      </>
                    ),
                  }}
                />
              )}
            />
          </div>
        ) : (
          ''
        )}
        <CustomTextFieldForm
          id="theme"
          label="Введите тему работы"
          name="theme"
          value={formikCreated.values.theme}
          helperText="Вы не указали тему работы"
          onChange={customChange}
          error={
            formikCreated.touched.theme && Boolean(formikCreated.errors.theme)
          }
          InputProps={{
            endAdornment: (
              <>
                <IconClose
                  onClick={() => {
                    formikCreated.setFieldValue('theme', '');
                  }}
                  className="icon-close"
                />
                <IconError className="icon-error" />
              </>
            ),
          }}
        />
        {data.switches &&
        data.switches.find((item) => item.name === 'name').checked ? (
          <CustomTextFieldForm
            id="name"
            label="Ваше имя*"
            name="name"
            value={formikCreated.values.name}
            onChange={customChange}
            error={
              formikCreated.touched.name && Boolean(formikCreated.errors.name)
            }
            helperText="Вы не указали имя"
            InputProps={{
              endAdornment: (
                <>
                  <IconClose
                    onClick={() => {
                      formikCreated.setFieldValue('name', '');
                    }}
                    className="icon-close"
                  />
                  <IconError className="icon-error" />
                </>
              ),
            }}
          />
        ) : (
          ''
        )}
        <CustomTextFieldForm
          id="email"
          label="E-mail*"
          name="email"
          type="text"
          value={formikCreated.values.email}
          onChange={customChange}
          helperText="Вы не указали Email"
          error={
            formikCreated.touched.email && Boolean(formikCreated.errors.email)
          }
          InputProps={{
            endAdornment: (
              <>
                <IconClose
                  onClick={(e) => {
                    formikCreated.setFieldValue('email', '');
                    //e.target.closest('div').querySelector('input').value = '';
                    console.log('clear');
                  }}
                  className="icon-close"
                />
                <IconError className="icon-error" />
              </>
            ),
          }}
        />
        {data.switches &&
        data.switches.find((item) => item.name === 'tel').checked ? (
          <CustomTextFieldForm
            id="phone"
            label="Номер телефона"
            name="phone"
            value={formikCreated.values.phone}
            onChange={(value) => {
              formikCreated.setFieldValue('phone', value);
            }}
            error={
              formikCreated.touched.phone && Boolean(formikCreated.errors.phone)
            }
            helperText="Вы не указали телефон"
            InputProps={{
              endAdornment: (
                <>
                  <IconClose
                    onClick={() =>
                      formikCreated.setFieldValue('phone', '+7 (000) 000-00-00')
                    }
                    className="icon-close"
                  />
                  <IconError className="icon-error" />
                </>
              ),
              inputComponent: TextMaskCustom,
            }}
          />
        ) : (
          ''
        )}
        {data.switches &&
        data.switches.find((item) => item.name === 'city').checked ? (
          <CustomTextFieldForm
            id="city"
            label="Город"
            name="city"
            value={formikCreated.values.city}
            onChange={customChange}
            error={
              formikCreated.touched.city && Boolean(formikCreated.errors.city)
            }
            helperText="Вы не указали город"
            InputProps={{
              endAdornment: (
                <>
                  <IconClose
                    onClick={() => {
                      formikCreated.setFieldValue('city', '');
                    }}
                    className="icon-close"
                  />
                  <IconError className="icon-error" />
                </>
              ),
            }}
          />
        ) : (
          ''
        )}
        {data.switches &&
        data.switches.find((item) => item.name === 'font').checked ? (
          <CustomTextFieldForm
            id="fontSize"
            label="Размер шрифта*"
            name="fontSize"
            value={formikCreated.values.fontSize}
            onChange={customChange}
            error={
              formikCreated.touched.fontSize &&
              Boolean(formikCreated.errors.fontSize)
            }
            helperText="Вы не указали размер шрифта"
            InputProps={{
              endAdornment: (
                <>
                  <IconClose
                    onClick={() => {
                      formikCreated.setFieldValue('fontSize', '');
                    }}
                    className="icon-close"
                  />
                  <IconError className="icon-error" />
                </>
              ),
            }}
          />
        ) : (
          ''
        )}
      </div>
      <button
        type="button"
        className={
          addComment ||
          (data.switches &&
            data.switches.find((item) => item.name === 'commFile').checked)
            ? 'form-created__add-comment form-created__add-comment--open'
            : 'form-created__add-comment'
        }
        onClick={(e) => setAddComment(!addComment)}
      >
        <span className="form-created__add-comment-text">
          Добавить комментарий и файлы
        </span>
        <span className="form-created__add-comment-icon">
          <IconArrowDrop />
        </span>
      </button>
      {addComment ||
      (data.switches &&
        data.switches.find((item) => item.name === 'commFile').checked) ? (
        <CommentField
          value={formikCreated.values.comments}
          customChange={customChange}
          files={formikCreated.values.files}
          customUploadFiles={customUploadFiles}
        />
      ) : (
        ''
      )}
      <button type="submit" className="form-created__button">
        <span className="form-created__button-text">
          {data.buttonName ? data.buttonName : 'Узнать стоимость'}
        </span>
        <span className="form-created__button-icon">
          <IconArrowDrop />
        </span>
      </button>
      <p className="form-created__add-info">
        *Нажимая на кнопку "Узнать стоимость" я даю согласие на обработку своих
        персональных данных в соответствии с{' '}
        <a href="#">Политикой конфидециальности</a>
      </p>
    </form>
  );
};

export default FormCreated;
