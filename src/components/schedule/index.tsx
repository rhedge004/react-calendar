import React from 'react';
import { useDispatch } from 'react-redux';
import { CustomLink } from '../../utils';
import { ScheduleContainer, ScheduleItems } from './styled';
import { CLEAR_SCHEDULE } from '../../actions/schedules';

const Schedule = ({props}) => {
    const dispatch = useDispatch();
    return (
        <CustomLink to={`/update/${props.id}`} onClick={() => dispatch({ type: CLEAR_SCHEDULE })}>
            <ScheduleContainer>
                <div>
                    <p>{props.title}</p>
                </div>
                <ScheduleItems>
                    <p>{props.status}</p>
                    <p>{props.date}</p>
                </ScheduleItems>
            </ScheduleContainer>
        </CustomLink>
    )
}

export default Schedule;