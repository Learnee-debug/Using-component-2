import PropTypes from "prop-types";
import { useState } from "react";
import "./LikeButton.css";

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <button className={`like-button ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

LikeButton.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};

export default LikeButton;
