import React from "react";
import styled from "styled-components";
import { Button } from "./style/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (  
    <Wrapper>
        <img crs="../images/error.jpg" alt="error" />
        <NavLink to="/">
           <Button>GO BACK</Button>
        </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

.btn {
    font-size: 1.5rem;
    margin-top: 3rem;
}
`;
export default Error;