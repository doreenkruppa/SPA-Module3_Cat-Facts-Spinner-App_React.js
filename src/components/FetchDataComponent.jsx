import React, { useEffect, useState } from "react";
import Spinner from "./Spinner/Spinner";
import "./fetchdatacomponent.css";

export default function FetchDataComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const response = await fetch("https://catfact.ninja/fact"); //returns response object
      const fetchedCatInfos = await response.json(); //converts JSON into Javascript Object
      setIsLoading(false);
      setData(fetchedCatInfos);
    };
    loadData();
  }, []);
  return (
    <>
      <div className="infocard">
        <h1>Cat Facts:</h1>
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <p>
              {" "}
              <span>Random info for Cat Lovers:</span> <br /> {data.fact}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
