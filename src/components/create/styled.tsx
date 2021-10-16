import styled from "styled-components";

export const AddSchedule = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    margin: calc(10px + 2vmin);
`;

export const ScheduleForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    background-color: white;
    padding: 2vmin;
`;

export const Field = styled.div`
    padding: 10px 5px;
    display: flex;
    justify-content: space-evenly;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 48%;
    justify-content: flex-start;
    align-items: flex-start;
`