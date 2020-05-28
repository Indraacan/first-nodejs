import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Article = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/article").then((res) => {
      const data = res.data;
      console.log(data);

      setData(data);
    });
  },[]);
  const showData = data.map((item, index) => (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.author}</p>
          <Link to ={`/article/${item.id}`}>Read more</Link>  
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{showData}</div>
    </div>
  );
};
export default Article;
