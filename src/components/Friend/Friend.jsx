import PropTypes from "prop-types";
import { Avatar, Name, Status } from "./Friend.styled";

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
    return <>
        <Status>{isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </>
};


Friend.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
        })
    )
}