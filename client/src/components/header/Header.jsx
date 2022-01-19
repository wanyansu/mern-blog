import "./header.css";

export default function Header() {
  const PF = "https://serenity-blog.herokuapp.com/images/"
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleMd">Serenity Blog</span>
      </div>
      <img
        className="headerImg"
        src={`${PF}DSC01245.JPG`}
        alt="New Zealand - Lake Tekapo"
      />
    </div>
  );
}
