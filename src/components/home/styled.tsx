import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const CalendarContents = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
`;

export const CalendarAddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vw;
`;

export const CalendarFilterContainer = styled.div`
    display: flex;
    margin-left: 20px;
    font-size: calc(8px + 1vmin);
    flex-direction: column;
    width: 25%;
    p{
        text-align: left;
        padding:0;
        margin:0;
    }
`;

export const CalendarHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 20px;
`;

export const AddButton = styled(Button)`
    &&{
        color: white;
        background-color: #4CAF50;
        font-size: 1vh;
        margin: 1vw;
        padding: 1vw;
        display: flex;
        justify-content: space-between;
        :hover{
            color: black;
            background-color: white;
        }
    }
`;

export const SearchField = styled(TextField)`
        color: white;
        #standard-basic-label{
            color:white;
        }
        .MuiInput-underline:before {
            border-bottom: 1px solid black;
            color: white;
        }
        & label.Mui-focused {
        color: white;
        }
        & .MuiInput-underline:after {
        border-bottom-color: white;
        }
        & .MuiOutlinedInput-root {
        & fieldset {
            border-color: white;
        }
        &:hover fieldset {
            border-color: white;
        }
        &.Mui-focused fieldset {
            border-color: white;
        }
        }
`;

export const CalendarSort = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2vw;
    select{
        height: 2vh;
        margin: 30px 10px 0px 10px;
    }
`;