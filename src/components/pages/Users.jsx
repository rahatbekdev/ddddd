import { useEffect, useState } from "react";
import styled from "styled-components";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    setUsers(result);
    console.log(result);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <DivGroup>
      {users.map((el) => {
        return (
          <Div key={el.id}>
            <h1>{el.name}</h1>
            <h2>{el.email}</h2>
            <p>{el.website}</p>
          </Div>
        );
      })}
    </DivGroup>
  );
};

const DivGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Div = styled.div`
  /* border: 2px solid silver; */
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px black;
  width: 400px;
  height: auto;
  padding: 10px;
  margin: 5px;
  text-align: center;
`;
