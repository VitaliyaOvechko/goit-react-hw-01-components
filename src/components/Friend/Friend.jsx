import PropTypes from "prop-types";

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
    return <div>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </div>
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