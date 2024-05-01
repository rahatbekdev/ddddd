import PropTypes from "prop-types";
import styled from "styled-components";

export const CardItem = ({
  id,
  name,
  image,
  status,
  species,
  location,
  created,
  ...rest
}) => {
  const locationName = location.name;

  const statusColor =
    status === "Alive"
      ? "green"
      : status === "unknown"
      ? "grey"
      : status === "Dead"
      ? "red"
      : "black";
  return (
    <div key={id}>
      <DivItems>
        <img src={image} alt="" />
        <DivBox>
          <DivLi>
            <h1>{name}</h1>
            <ListItem statusColor={statusColor}>
              {status} - {species}
            </ListItem>
          </DivLi>
          <div>
            <p>{locationName}++</p>
            <h2>{created}</h2>
          </div>
        </DivBox>
      </DivItems>
    </div>
  );
};

const DivItems = styled.div`
  cursor: pointer;
  width: 600px;
  border: 2px solid silver;
  border-radius: 10px;
  display: flex;
  /* flex-direction: column; */
  background-color: #4a4a52;
  margin-bottom: 10px;

  img:hover{
    filter: contrast(150%);
  }
`;

CardItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  location: PropTypes.string,
  created: PropTypes.string,
};

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  h1,
  h2 {
    color: white;
    font-size: 20px;
  }
`;
const DivLi = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  list-style: none;
  position: relative;
  padding-left: 20px;
  /* color: ${(props) => props.statusColor}; */

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.statusColor};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
