
import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
 background: linear-gradient(rgb(253, 233, 242) 0%, #d54ea6 100%, rgb(253, 240, 232) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #d54ea6;
  border: 1px solid #ddd;
  border-radius: 15px;
`;


const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color:white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  background-color: rgb(239, 96, 120);
  &:hover {
    background-color: rgb(240, 26, 62);
    font-weight: 500;
    
    }
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
    border : 1px solid #ddd;
  border-radius: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Signup = () => {
  let [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",

    logInn: true,
    id: nanoid(),

  });

  const navigate = useNavigate();

  let handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    if (!value.email || !value.pass || !value.name) {
      toast.error("Some fields are missing");

    } else {

      localStorage.setItem("user", JSON.stringify(value));
      toast.success("Account created")
      navigate("/login");

    }
  };


  return (

    <Container>

      <Wrapper>

        <Title>SIGN UP</Title>
        <Form>
          <Input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={value.name}
            onChange={handleInputChange}
          />
          <Input
            className="input"
            name="email"
            required
            type="email"
            placeholder="Email"
            value={value.email}
            onChange={handleInputChange}
          />
          <Input
            className="input"
            name="pass"
            type="password"
            required
            placeholder="Pasword"
            value={value.pass}
            onChange={handleInputChange}
          />


          <Button onClick={handleSubmit}>Signup</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;
