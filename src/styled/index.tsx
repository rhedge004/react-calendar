import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
    color: inherit; 
    text-decoration: inherit;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px;
    background-color: #0A1929;
    margin: calc(10px + 2vmin);
`;