import styled from "styled-components";
import { Button, ButtonGroup } from "@mui/material";

export const AddSchedule = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    margin: calc(10px + 2vmin);
`;

export const UpdateScheduleHeader = styled.div`
    display: flex;
    flex-direction: row;
    p{
        padding: 20px
    }
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
`;

export const FunctionButtonContainer = styled(ButtonGroup)`
`;

export const UpdateButton = styled(Button)`
    &&{
        background-color: #66BB6A;
        color: white;
        max-width: 600px;
    }
`;

export const DeleteButton = styled(Button)`
    &&{
        background-color: #A51D2A;
        color: white;
        max-width: 600px;
    }
`;

