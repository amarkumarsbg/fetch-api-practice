const PostCard = (props) => {
  return (
    <div className="px-10 py-7 shadow-lg">
      <h3 className="text-xl font-semibold">{props.title}</h3>
      <p className="text-sm">{props.body}</p>
    </div>
  );
};

export default PostCard;
