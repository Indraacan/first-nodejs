import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/article/${id}`).then((res) => {
      const data = res.data;
      console.log(data);

      setData(data);
    });
  }, [id]);
  const showData = (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p className="card-text">{data.author}</p>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">{showData}</div>
    </div>
  );
};
export default Article;
