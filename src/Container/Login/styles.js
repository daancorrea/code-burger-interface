import styled from "styled-components";
import Background from "../../assets/bg-img-burger.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("${Background}");
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginImage = styled.img`
  height: 70%;
`;

export const ContainerItems = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 1.56rem 4.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 16.25rem;
    height: 5.87rem;
    margin-bottom: 50px;
  }
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 17px;
  }
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: #ffffff;
  border-radius: 5px;
  height: 38.32px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const Button = styled.button`
  background: #9758a6;
  border-radius: 20px;
  width: 182.81px;
  height: 36.13px;
  border: none;
  font-size: 16px;
  text-align: center;
  color: #eeeeee;
  margin: 30px 0 28px 0;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
  }
`;

export const NotAccountText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
    :active {
      opacity: 0.6;
    }
  }
`;
