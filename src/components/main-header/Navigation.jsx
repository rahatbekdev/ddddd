import styled from "styled-components";
import PropTypes from "prop-types";

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0;
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    /* color: white; */
    color: ${({ color }) => color};

    &:hover,
    &:active {
      color: #f3cafb;
    }
  }

  button {
    font: inherit;
    background: #dd0db0;
    border: 1px solid #dd0db0;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;

    &:focus {
      outline: none;
    }

    &:hover,
    &:active {
      color: #f3cafb;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
    }
  }
  span .active {
    color: yellow;
  }
`;

const Li = styled.li`
  color: ${(props) => (props.active ? "yellow" : "white")};
`;

const Navigation = ({ onChangePage, color, activePage }) => {
  return (
    <Nav>
      <Ul color={color}>
        <Li active={activePage === "users"} onClick={() => onChangePage("users")}>
          <span>Users</span>
        </Li>
        <Li active={activePage === "admin"}>
          <span>Admin</span>
        </Li>
        <Li active={activePage === "Rick and Morty"}>
          <Span  onClick={() => onChangePage("Rick and Morty")}>
            Rick and Morty
          </Span>
        </Li>
        <li>
          <button>Logout</button>
        </li>
      </Ul>
    </Nav>
  );
};

const Ul = styled.ul`
  /* color: ${({ color }) => color}; */
`;

const Span = styled.span`
  color: ${({ color }) => color};
  
`

Navigation.propTypes = {
  onChangePage: PropTypes.func,
  color: PropTypes.string,
  activePage: PropTypes.string,
};

export default Navigation;
