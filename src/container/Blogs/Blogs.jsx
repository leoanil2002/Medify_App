import image from "../Img/Blogs/div.st4-blog-single.png";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs-cont">
      <div className="blog-tag">Blogs & News</div>
      <div className="blog-heading">Read Our Latest News</div>
      <div className="blogs-img-cont">
        <div className="img-b">
          <img src={image} alt="" />
        </div>
        <div className="img-b">
          <img src={image} alt="" />
        </div>
        <div className="img-b">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Blogs;
