import axios from "axios";

export const FILL_SCHEDULES = "FILL_SCHEDULES";
export const GET_SCHEDULE = "GET_SCHEDULE";
export const SCHEDULE_EVENT_SUCCESS = "SCHEDULE_EVENT_SUCCESS";
export const SCHEDULE_EVENT_CLEAR = "SCHEDULE_EVENT_CLEAR";
export const CLEAR_SCHEDULE = "CLEAR_SCHEDULE";

export const getSchedules = () => {
    const requestOptions = {
        method: "GET",
        url: "http://localhost:3004/schedules",
        headers: { "Content-Type": "application/json" },
    };
    return (dispatch) =>{
        axios(requestOptions)
            .then((response) => {
                dispatch({ type: FILL_SCHEDULES, data: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getScheduleId = (id) => {
    const requestOptions = {
        method: "GET",
        url: `http://localhost:3004/schedules/${id}`,
        headers: { "Content-Type": "application/json" },
    };
    return (dispatch) =>{
        axios(requestOptions)
            .then((response) => {
                dispatch({ type: GET_SCHEDULE, data: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const postSchedules = (userData, history) => {
    const payload = { ...userData };
    const requestOptions = {
        method: "POST",
        url: "http://localhost:3004/schedules",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(payload)
    };
    return (dispatch) =>{
        axios(requestOptions)
            .then((response) => {
                history.push("/");
                dispatch({ type: SCHEDULE_EVENT_SUCCESS, message: "Schedule added successfully!" })
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const updateSchedule = (userData, id, history) => {
    const data = userData;
    delete data["id"];
    const payload = { ...data };
    const requestOptions = {
        method: "PATCH",
        url: `http://localhost:3004/schedules/${id}`,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(payload)
    };
    return (dispatch) =>{
        axios(requestOptions)
            .then((response) => {
                history.push("/");
                dispatch({ type: SCHEDULE_EVENT_SUCCESS, message: "Schedule successfully updated!" })
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const deleteSchedule = (history, id) => {
    const requestOptions = {
        method: "DELETE",
        url: `http://localhost:3004/schedules/${id}`,
        headers: { "Content-Type": "application/json" },
    };
    return (dispatch) =>{
        axios(requestOptions)
            .then(() => {
                history.push("/");
                dispatch({ type: SCHEDULE_EVENT_SUCCESS, message: "Schedule successfully deleted!" })
            })
            .catch((error) => {
                console.log(error);
            });
    };
}
