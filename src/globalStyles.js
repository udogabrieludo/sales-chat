import { createGlobalStyle } from "styled-components";
import './App.scss'
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,500&display=swap');

body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color:var(--primary-color);
    background:var(--primary-bg-color);
}

.container{
display: flex; 
justify-content:center;
flex-direction:column;
width: 100%; 
min-height: 100vh; 
h2{
    text-align: center;
}
.loading-wrapper{
display: flex; 
justify-content:center;
align-items: center;
flex-direction:column;
width: 100%;
min-height: 100vh; 

}

}

.chart-container{
    padding: 1rem 5rem;
    select{
    width: 150px;
    height: 40px;
    border-radius: 3px;
    background: red;
    color: #fff;
    outline: none;
    border: none;
   }
   .column{
     display: flex;
     margin-bottom:2rem;
     .inner-column{
      flex: 1
     }
   }
}
}
`