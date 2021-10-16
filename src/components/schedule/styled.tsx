import styled from "styled-components";

export const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    border: 1px solid;
    padding: 5px;
    margin: 0px 30px;
`;

export const ScheduleItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p{
        font-size: (5px + 1vmin);
    }
`