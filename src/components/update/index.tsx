import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Select, TextField, MenuItem, Button, InputLabel } from '@material-ui/core';
import { CustomLink } from "../../utils";
import { AddSchedule, ScheduleForm, Field, FieldContainer } from './styled';
import { updateSchedule, deleteSchedule, getScheduleId } from '../../actions/schedules';

const Update = ({history}) => {
  const [formValues, setFormValues] = React.useState({
    title: "",
    date: "",
    status: "Pending",
  });
  const dispatch = useDispatch();
  let params: any = useParams();
  const schedule = useSelector(({ schedules }: RootStateOrAny)=> schedules.savedSchedule);

  useEffect(() => {
    if(schedule){
      setFormValues(schedule);
    }
    else{
      dispatch(getScheduleId(params.id));
    }
  }, [schedule]);

  
  const setValues = (e) => {
    setFormValues({...formValues, 
      [e.target.id]: e.target.value
    });
  }

  const createSchedule = (e) => {
    if(formValues.title && formValues.date && formValues.status){
      
      e.preventDefault();
      dispatch(updateSchedule(formValues, params.id));
    }
  }

  const deleteScheduleInit = (e) => {
    if(formValues.title && formValues.date && formValues.status){
      e.preventDefault();
      dispatch(deleteSchedule(history, params.id));
    }
  }

    return (
        <AddSchedule>
          <div>
            <p>Update Schedule</p>
          </div>
          <ScheduleForm>
              <TextField
                required
                id="title"
                label="Schedule Name"
                variant="standard"
                onChange={(e) => setValues(e)}
                value={formValues.title}
                defaultValue={formValues.title}
                style={{marginBottom: "2vh"}}
              />
              <Field>
                <FieldContainer>
                  <InputLabel>Status</InputLabel>
                  <TextField
                    required
                    id="date"
                    type="datetime-local"
                    onChange={(e) => setValues(e)}
                    value={formValues.date}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{marginBottom: "2vh", width: "100%"}}
                  />
                </FieldContainer>
                <FieldContainer>
                  <InputLabel>Status</InputLabel>
                  <Select
                    label="Status"
                    id="status"
                    value={formValues.status}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    style={{marginBottom: "2vh", alignContent: "left", width:"100%"}}
                  >
                    <MenuItem value="Pending" onClick={() => setFormValues({ ...formValues, status: "Pending"})}>Pending</MenuItem>
                    <MenuItem value="On Going" onClick={() => setFormValues({ ...formValues, status: "On Going"})}>On Going</MenuItem>
                    <MenuItem value="Done" onClick={() => setFormValues({ ...formValues, status: "Done"})}>Done</MenuItem>
                  </Select>
                </FieldContainer>
              </Field>
              <Button type="submit" variant="contained" style={{backgroundColor: "#0062CC", color: "white"}} onClick={(e) => createSchedule(e)}>
                  Update Schedule
              </Button>
              <Button type="submit" variant="contained" style={{backgroundColor: "#A51D2A", color: "white"}} onClick={(e) => deleteScheduleInit(e)}>
                  Delete Schedule
              </Button>
          </ScheduleForm>
          <div>
            <CustomLink to="/">Back</CustomLink>  
          </div>
        </AddSchedule>
    )
}

export default Update;