import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { GoPerson } from 'react-icons/go';
import { Item, ContactText, ButtonContact } from './ContactListItem.styled';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      <GoPerson />
      <ContactText>
        {name}: {phone}
      </ContactText>
      <ButtonContact onClick={handleDelete}>Delete</ButtonContact>
    </Item>
  );
};

