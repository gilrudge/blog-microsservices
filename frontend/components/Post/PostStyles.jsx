import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
  border: 1px;
  border-color: black;
  border-style: groove;
  background-color: rgb(50 80 300);
  align-items:center;
  padding: 10px;
  width: 50vw;  
`;

export const Title = styled.h1`
 color:white;

`

export const Form = styled.div`
  
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width:70%;
  display: flex;
  border-style: groove;
  border-width: 1px;
  
  &::placeholder{
   opacity:0.4;
   display:flex;
   
   padding-left: 30%;
   
  }
`;
export const Button = styled.button`
  width: 20%;
  background-color: #333;
  border:none;
  border-radius: 5px;
  color: white;

  :hover{
    opacity: 0.7;
    
    transition: 1s;

  }
`;