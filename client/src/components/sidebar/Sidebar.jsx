import { axiosInstance } from '../../config';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem" key={c._id}>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FIND ME HERE</span>
        <div className="sidebarSocial">
          <a href="https://www.linkedin.com/in/roy-yangsu-wang-6054ba55/"><i className="topIcon fab fa-linkedin" style={{color: "#0e76a8"}}></i></a>
          <a href="https://github.com/wanyansu"><i className="topIcon fab fa-github-square"></i></a>
        </div>
      </div>
    </div>
  );
}
