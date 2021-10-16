import styled from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    padding: 5px;
    margin: calc(10px + 2vmin);
`;

export const CalendarContents = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
`;

export const CalendarHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 20px;
`

export const CalendarSort = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2vw;
    select{
        height: 2vh;
        margin: 30px 10px 0px 10px;
    }
`