import styled from "styled-components";

// $border =

export const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr 4fr;
   grid-template-rows: 8vh 92vh;
   grid-template-areas: "h h" "a m";

   header{
       border-bottom: 1px solid #f4f4f4;
       grid-area: h;
   }

   main{
       grid-area: m;
   }
   aside{
        border-right: 1px solid #f4f4f4;
        display: flex;
        justify-content: center;
        /* align-items: center; */
   }
`