import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div {
    position: relative;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:1rem
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    width: 90%;
    padding-left:5rem;
    
  }

  svg {
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translate(100%, -50%);
    color: white;
    font-size:1.3rem
  }
`;

export default Search;