import React from "react";

function BlogPage() {
  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    marginTop: "50px",
    fontSize: "3rem",
  };

  return (
    <main>
      <ul style={ulStyle}>
        <li style={{ color: "Red", fontWeight: "bold" }}>Home</li>
        <li className="text-yellow-400">Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </main>
  );
}

export default BlogPage;
