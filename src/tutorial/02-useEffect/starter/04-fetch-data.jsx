import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>fetch data example</h1>

      <section>
        <h3>GitHub users</h3>
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;

            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );

            return <li>item</li>;
          })}
        </ul>
      </section>
    </>
  );
};
export default FetchData;
