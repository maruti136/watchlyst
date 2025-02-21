import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
--nav-sidebar-bg: #f5f5f5;
--section-bg: rgba(237, 229, 239, 0.58);
--movie-bg: rgba(248, 247, 247, 0.35);
--search-bg: rgba(212, 212, 212, 0.7);
--movie-plot-bg: rgba(218, 216, 216, 0.03);
--genre-badge-bg: rgba(220, 203, 228, 0.84);
--genre-badge-color: rgba(117, 85, 132, 0.84);
--movie-badge-bg: rgba(137, 182, 202, 0.62);
--series-badge-bg: rgba(231, 179, 120, 0.84);
--director-bg: rgba(220, 203, 228, 0.84);
--button-bg: rgba(181, 124, 203, 0.81);
--button-hover-grey-bg: rgba(218, 218, 218, 0.85);
--button-hover-purple-bg: rgba(170, 93, 200, 0.85);
--navlink-color: rgba(40, 40, 40, 0.68);
--button-color: rgba(40, 40, 40, 0.77);
--title: rgba(40, 40, 40, 0.84);

}



body, html {
  margin: 0;
  background-color:rgba(255, 255, 255, 0.62);
  font-family: "Open Sans";
}


 ::-webkit-scrollbar {
    width: 8px; 
  }

  ::-webkit-scrollbar-thumb {
    background-color:rgba(136, 134, 136, 0.83);
    border-radius: 10px; 
    transition: background-color 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color:rgb(184, 181, 181);  
  }

  ::-webkit-scrollbar-track {
    background:rgb(219, 217, 217); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece {
    border-radius: 10px;
  }
`;

export default GlobalStyles;
