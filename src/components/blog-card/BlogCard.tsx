import articleImage from "../../assets/images/illustration-article.svg";
import avatarImage from "../../assets/images/image-avatar.webp";
import classNames from "./BlogCard.module.scss";

function BlogCard() {
  return (
    <div className={classNames.blogCard}>
      <img
        src={articleImage}
        alt="article"
        className={classNames.articleImage}
      />
      <div className={classNames.content}>
        <div>
          <span className={classNames.learningBadge}>Learning</span>
        </div>
        <div className={classNames.published}>Published 21 Dec 2023</div>
        <h1 className={classNames.heading}>
          <a href="#" className={classNames.title}>
            HTML & CSS foundations
          </a>
        </h1>
        <p className={classNames.description}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className={classNames.author}>
        <img
          src={avatarImage}
          alt="avatar"
          className={classNames.avatarImage}
        />
        <div className={classNames.authorName}>Greg Hooper</div>
      </div>
    </div>
  );
}

export default BlogCard;
