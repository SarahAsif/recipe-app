import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav>
            <Logo to="/recipes">
              <h1>SARAH's COOKBOOK</h1>
            </Logo>
          </Nav>
          <Card2>
            <Search />
            <Category />
          </Card2>
          <Pages />
        </Router>
        <footer>Made By Sarah Asif</footer>
      </div>
    </>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  font-family: sans-serif;
  text-align: center;
  overflow: hidden;
  &:hover {
    color: white;
  }
`;

const Nav = styled.div`
  padding: 1.5rem 3rem;
  width: 100%;
  background: linear-gradient(to right, #f27121, #e94057);

  svg {
    color: black;
    font-size: rem;
  }
`;
const Card = styled.div`
  display: inline;
  align-text: center;
  position: absolute;
  right: 1rem;

  svg {
    font-size: 2rem;
    margin-top: 0.6rem;
    margin-right: 2rem;
    color: white;
    cursor: pointer;
  }
`;
const Card2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  flex-direction: column;
  margin: 2rem;
`;

export default App;
