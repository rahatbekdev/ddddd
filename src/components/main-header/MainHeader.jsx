import styled from "styled-components";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const MainHeader = ({ isLoggedIn, onChangePage, color, activePage }) => {
  return (
    <Header>
      <h1>A Typical Page</h1>
      {isLoggedIn && (
        <Navigation
          activePage={activePage}
          onChangePage={onChangePage}
          color={color}
        />
      )}
    </Header>
  );
};

MainHeader.propTypes = {
  isLoggedIn: PropTypes.bool,
  onChangePage: PropTypes.func,
  color: PropTypes.string,
  activePage: PropTypes.bool,
};

export default MainHeader;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
  h1 {
    color: white;
  }
`;
