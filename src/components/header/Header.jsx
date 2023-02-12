import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";
import Navbar from "../navbar/Navbar";
import styled from "styled-components";

function Header() {
    return (
      <MainHeader>
       <NavLink to="/">
          <img src={Logo} width="90px" className="logo"/>
        </NavLink>
        <Navbar/>
      </MainHeader>
    );
  }
  
  const MainHeader = styled.header`
  padding: 0rem 4.8rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:white;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
  .logo{
    margin-top:4px;
  }
  `;
  export default Header;