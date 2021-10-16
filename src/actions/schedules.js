import axios from "axios";

export const FILL_SCHEDULES = "FILL_SCHEDULES";
export const GET_SCHEDULE = "GET_SCHEDULE";
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

export const postSchedules = (userData) => {
    const payload = { ...userData };
    const requestOptions = {
        method: "POST",
        url: "http://localhost:3004/schedules",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(payload)
    };
    return () =>{
        axios(requestOptions)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const updateSchedule = (userData, id) => {
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
                dispatch({ type: GET_SCHEDULE, data: response.data });
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
            .then((response) => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
}
