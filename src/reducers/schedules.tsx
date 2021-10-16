import { FILL_SCHEDULES, GET_SCHEDULE, CLEAR_SCHEDULE } from "../actions/schedules";
const defaultState = {};

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
        case CLEAR_SCHEDULE:
            return ({
                schedules: [],
            });
        default:
            return state;
    }
};

export default schedules;