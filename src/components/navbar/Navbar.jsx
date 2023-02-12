import { NavLink } from "react-router-dom";
import styled from "styled-components";



function Navbar() {
    return (
       <Nav>
        <div>
            <ul className="navbar-list">
                <li>
                    <NavLink className="navbar-links" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="/additem">Add Product</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="/add-catgory">Add Category</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-links" to="/account-setting">Account</NavLink>
                </li>
               
                <li>
                   
                                  
                </li>
                
               
              
            </ul>
        </div>
        
       </Nav>
       
    );
  }
  
  const Nav = styled.nav`
  padding:10px;
 
  .navbar-list{
    display:flex;
    gap: 2.5rem;
    justify-content:center;
   
    
    li{

        list-style:none;

        .navbar-links{
            text-decoration:none;
            color:#181818;
            font-family: 'Roboto', sans-serif; 
        }
        
    }

    li a:hover{
        color:#0155ca;
       
    }

    #btn{
        margin-top:-4px;
    }
  
        
    }
    
    

  }
  `;
  export default Navbar;