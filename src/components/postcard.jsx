import PropTypes from "prop-types";
import LikeButton from "./likebutton";
import "./PostCard.css"; 

const PostCard = ({ username, profileImage, content, isLiked }) => {
  return (
    <div className="post-card">
      <img src={profileImage} alt={`${username}'s profile`} className="profile-pic" />
      <h3>{username}</h3>
      <p>{content}</p>
      <LikeButton isLiked={isLiked} />
    </div>
  );
};

PostCard.propTypes = {
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,  // ✅ Ensuring image is a required string
  content: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default PostCard;
