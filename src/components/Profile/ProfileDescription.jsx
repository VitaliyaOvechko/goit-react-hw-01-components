import PropTypes from 'prop-types';
import { Description, Image } from './ProfileDescription.styled';

export const ProfileDescription = ({
  user: { username, tag, location, avatar },
}) => {
  return (
    <Description>
      <Image src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </Description>
  );
};

ProfileDescription.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
