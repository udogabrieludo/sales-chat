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
    @media (max-width:640px){
       font-size: 1.2rem;
   }
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
      width: 50%;
      h3{
          color:red;
      }
     }
     @media (max-width:640px){
        flex-wrap: wrap;
      }
   }
   @media (max-width:640px){
       padding: 0;
   }
}
}
.table-wrapper {
 overflow-x: auto;
 table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding:1rem 8px;
}
.td1{
    color:#00ffd0;
}
.td2{
    color:#0ac90a;
}
.td3{
    color:red;
}
}



`