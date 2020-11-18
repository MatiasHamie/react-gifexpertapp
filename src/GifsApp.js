import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifsApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <div className="container">
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifsApp;
