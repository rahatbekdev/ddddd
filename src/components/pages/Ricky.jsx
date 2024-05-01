import { useEffect, useState } from "react";
import { CardItem } from "../cardItem/CardItem";
import styled from "styled-components";

export const Ricky = () => {
  const [data, setData] = useState([]);

  const addRicky = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const result = await res.json();
    setData(result.results);
    console.log(result.results);
  };
  useEffect(() => {
    addRicky();
  }, []);

  return (
    <Like>
      {data.map((el) => {
        return <CardItem 
        key={el.id} 
        name={el.name} 
        image={el.image} 
        status={el.status}
        species={el.species}
        location={el.location}
        created={el.created}

        />;
      })}
    </Like>
  );
};

const Like = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
background-color: black;
padding: 20px;
`
