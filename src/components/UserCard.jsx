const UserCard = (props) => {
  return (
    <div className="flex flex-col text-center justify-center bg-blue-400 rounded-md px-5 pb-3 py-12 ">
      <h3 className="text-xl font-semibold">{props.data.name.first}</h3>
      <p className="text-sm text-gray-800">{props.data.phone}</p>
      <p className="text-sm text-gray-800">
        {props.data.location.city}, {props.data.location.state}
      </p>
    </div>
  );
};

export default UserCard;
