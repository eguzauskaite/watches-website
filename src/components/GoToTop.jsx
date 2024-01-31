import React, { useEffect } from "react";
import styled from "styled-components";
import { IconName } from "react-icons/fa";

const GoToTop = () => {
    const[isVisible, setVisible] = useState(false);
    
    const goToBtn = () => {
        window.scrollTo({ top:0, left:0, behavior: "smooth"});
    };

const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll = 
    document.body.scrollTop || document.documentElement.scrollTop;

    if (windScroll > heightToHidden) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
};

    useEffect(() => {
       window.addEventListener('scroll', listenToScroll);
    }, []);

  return ( 
    <Wrapper> 
        {isVisible && (  
        <div className="top-btn" onClick={goToBtn}>
            <FaArrowUp className="top-btn--icon" />
         </div>;
         )}
   </Wrapper>
  );
};

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;

.top-btn {
    font-size: 2rem;
    Width: 6rem;
    height: 6rem;
    color: ${({ theme})} => theme.colors.text};
    background-color: ${({ theme})} => theme.colors.body}; 
    box-shadaow: ${({ theme})} => theme.colors.title}; 
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    display: flex;
    justify-content: center;
    aligh-items: center;
    cursor: pointer;

 &--icon {
    animation: gototop 1.2s linaer infinite alternate-reverse;
 }   

 @keyframes gototop {
    0% {
        transform: translateY(-0.5rem);
    }
    100% {
        transform: translateY(1rem);
    }
 }
}

`;

export default GoToTop;