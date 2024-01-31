import Home from "./Home";
import Service from "./Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled- components"


const App() => {
  
  const theme = {
    colors: {
      title: #66757F; 
      text: #CCD6DD;
      body: #000000;
    }
  }
  media: { mobile: "768", tab: "998"};
 };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
         <Header />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/service" element={<Services />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="*" element={<Error />} />
          </Routes>
          <GoToTop />
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>   
  );
};

export default App
