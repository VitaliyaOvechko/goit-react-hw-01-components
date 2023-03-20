import PropTypes from 'prop-types';
import { Friend } from "./Friend";
import { FriendList, FriendItem } from './FriendList.styled';

export const Friends = ({ friends }) => {
    return (<FriendList>
        {friends.map(friend =>
            <FriendItem key={friend.id}>
                <Friend friend={friend} />
            </FriendItem>)}
    </FriendList>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};