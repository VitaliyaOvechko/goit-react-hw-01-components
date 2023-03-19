import PropTypes from "prop-types";

export const ProfileStats = ({ user: { stats: { followers, views, likes } } }) => {
  return <ul>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
};

ProfileStats.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
}