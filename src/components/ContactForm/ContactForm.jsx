import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormWrap,
  Input,
  Message,
  Label,
  ButtonForm,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  phone: yup
    .string()
    .required()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (obj, { resetForm }) => {
    if (
      contacts.find(option => option.name.toLowerCase() === obj.name.toLowerCase())
    ) {
      return alert(`${obj.name} is already in contacts`);
    }
    dispatch(addContact(obj));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" />
          <Message name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="phone" />
          <Message name="phone" component="div" />
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormWrap>
    </Formik>
  );
};
