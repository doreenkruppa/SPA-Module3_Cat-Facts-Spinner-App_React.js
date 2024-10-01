import React, { useState, useEffect } from "react";
import Spinner from "./Spinner/Spinner";

export default function FetchingImageComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
        const data = await response.json();

        setImageUrl(data[0].url);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the image:", error);
        setIsLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="image">
      {isLoading ? (
        <Spinner />
      ) : (
        <img
          src={imageUrl}
          alt="A cute cat"
          style={{ width: "350px", height: "300px" }}
        />
      )}
    </div>
  );
}
