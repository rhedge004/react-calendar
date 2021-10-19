import { FILL_SCHEDULES, GET_SCHEDULE, CLEAR_SCHEDULE, SCHEDULE_EVENT_SUCCESS, SCHEDULE_EVENT_CLEAR } from "../actions/schedules";
const defaultState = {
    scheduleEvent: false,
    scheduleMessage: "",
};

const schedules = (state = defaultState, action:any) => {
    switch(action.type){
        case FILL_SCHEDULES:
            return ({
                ...state,
                schedules: [...action.data]
            });
        case GET_SCHEDULE:
            return ({
                savedSchedule: action.data
            });
        case SCHEDULE_EVENT_SUCCESS:
            return ({
                scheduleEvent: true,
                scheduleMessage: action.message,
            });
        case SCHEDULE_EVENT_CLEAR:
            return ({
                scheduleEvent: false,
                scheduleMessage: "",
            });
        case CLEAR_SCHEDULE:
            return ({
                schedules: [],
            });
        default:
            return state;
    }
};

export default schedules;