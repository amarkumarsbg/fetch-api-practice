import { useEffect } from "react";
import { getPost, getRandomUser } from "./api/api";
import { useState } from "react";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

const App = () => {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPost().then((post) => {
      setData(post);
    });
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div>
      {userData && <UserCard data={userData} />}
      <div className="pt-4 flex justify-center    ">
        <button
          onClick={refresh}
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-800"
        >
          Refresh
        </button>
      </div>

      {data ? (
        data.map((e) => <PostCard key={e.id} title={e.title} body={e.body} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default App;
