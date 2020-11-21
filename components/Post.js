import Link from 'next/link';

const Post = ({ title, description, date, url }) => {
  return (
    <div className="Post">
      <Link href={url}>
        <h2 className="Post__title">{title}</h2>
      </Link>
      <p className="Post__description">{description.substring(0, 150)}</p>
      <span className="Post__date">{date}</span>
    </div>
  );
};

export default Post;