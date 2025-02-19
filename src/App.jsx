import { useState } from "react";
import "./App.css";
import PostCard from "./components/postcard";

function App() {
  const initialPosts = [
    {
      id: 1,
      profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      username: "Alice",
      content: "This is my first post!",
      isLiked: false,
    },
    {
      id: 2,
      profileImage: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      username: "Bob",
      content: "Loving this social media app.",
      isLiked: true,
    },
    {
      id: 3,
      profileImage: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      username: "Charlie",
      content: "Just another day...",
      isLiked: false,
    },
  ];

  return (
    <div className="app">
      <h1>Social Media Feed</h1>
      {initialPosts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          profileImage={post.profileImage}
          content={post.content}
          isLiked={post.isLiked}
        />
      ))}
    </div>
  );
}

export default App;
