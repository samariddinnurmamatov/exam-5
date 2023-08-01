// import postImg from "../../assets/postcard/card-image.png";
import PropTypes from "prop-types";
import "./categoryposts.scss"
import { IMG_URL } from "../../const";

const CategoryPosts = ({ title, description,category, photo }) => {
  return (
      <div className="categorypost">
        <img src={IMG_URL + photo?._id + "." + photo?.name?.split(".")[1]} alt="CategoryImage" />
        <div className="right">
        <h3>{category.name}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
        <br />
      </div>
  
  );
};
CategoryPosts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string,
  category: PropTypes.string,
};
export default CategoryPosts