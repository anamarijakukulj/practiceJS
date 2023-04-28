import { useState, useEffect, useCallback } from "react";

const url = "https://pokeapi.co/api/v2/pokemon/";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchData = useCallback(async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users.results);
      } catch (error) {
        console.log(error);
      }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ul className="users">
        {users.map((user) => {
          const { name } = user;
          return <li>{name}</li>;
        })}
      </ul>
    </>
  );
};
export default FetchData;
