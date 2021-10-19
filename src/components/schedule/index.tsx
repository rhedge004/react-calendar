import React from 'react';
import { useDispatch } from 'react-redux';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PendingIcon from '@mui/icons-material/Pending';
import { CustomLink } from '../../styled';
import { ScheduleContainer, ScheduleItems } from './styled';
import { CLEAR_SCHEDULE } from '../../actions/schedules';
import moment from 'moment';

const Schedule = ({props}) => {
    const dispatch = useDispatch();
    const d = new Date(props.date);
    const date = moment(d, "DD MM YYYY hh:mm:ss");
    const logo = () => {
        if(props.status === "Pending"){
            return(<>
                <PendingIcon style={{color: "#F68A1C"}} /> {props.status}
            </>);
        }
        if(props.status === "On Going"){
            return(<>
                <AccessTimeIcon style={{color: "#1E95D6"}} /> {props.status}
            </>);
        }
        if(props.status === "Done"){
            return(<>
                <CheckBoxIcon style={{color: "#4E9A51"}} /> {props.status}
            </>);
        }
    }
    return (
        <CustomLink to={`/update/${props.id}`} onClick={() => dispatch({ type: CLEAR_SCHEDULE })}>
            <ScheduleContainer>
                <div>
                    <p>{props.title}</p>
                </div>
                <ScheduleItems>
                    <p>{logo()}</p>
                    <p>{date.toString()}</p>
                </ScheduleItems>
            </ScheduleContainer>
        </CustomLink>
    )
}

export default Schedule;