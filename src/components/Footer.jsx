import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return ( 
    <Wrapper>
        <section className="contact-short">
           <div className="grid grid-two-column"> 
             <div>
                <h3>Ready to get started?</h3>
                <h3>Write to us</h3>
             </div>
              <div>
                 <NavLink to="/">
                   <Button>Get Started</Button>
                 </NavLink>
              </div>
            </div>
         </section>

     {/*----- footer  section------*/}

         <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about">
                   <h3>Technical support</h3>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, enim accusantium aliquid voluptas.</p>
                </div>
    {/* ------sekond column------ */}
                <div className="footer-about">
                   <h3>Suscribe to receive news </h3>
                  <form action="#">
                    <input type="email" required autoComlete="off" placeholder="Email"/>  
                    <input type="submit" value="Suscribe"/>            
                 </form>
                </div>

    {/* ------third column-------*/}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="footer-social-icons"></div>
                      <div>
                        <FaFacebook className="icons" />
                      </div>
                      <div className="footer-social-icons"></div>
                      <div>
                        <FaInstagram className="icons" />
                      </div>
                      <div className="footer-social--icons"></div>
                      <div>
                        <FaYoutube className="icons" />
                      </div>
                </div>

      {/* -----four column--------*/}
                <div className="footer-contact">
                    <h3>Coll Us</h3>
                    <h3>+370 64565588</h3>
                </div>
            </div>

      {/* ------bottom section---- */}
                <div className="footer-bottom--section">
                  <hr />
                   <div className="container grid grid-two-column">
                      <p>
                        @{new Date().getFullYear()} Watches. All Rights Reserved
                      </p>
                        <div>
                          <p>Pravacy policy</p>
                          <p>Terms & conditions</p>
                        </div>
                   </div>
                </div>
         </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.const-short {
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.text};
  transform: translateY(50%);

  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }
}

footer {
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.body}; 

  h3 {
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 2.3rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;

 div {
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.text};

  .icons { 
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.4rem;
    position: relative;
    cursor: pointer;
  }
    
  }
  }
}

`;
export default Footer;