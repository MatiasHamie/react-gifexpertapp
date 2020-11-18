import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      
      {loading && <p className="animate__animated animate__flash-2s">Cargando...</p>}

      <div className="card-container">
        {data.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
