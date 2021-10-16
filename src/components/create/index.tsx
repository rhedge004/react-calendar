import React from 'react';
import { useDispatch } from 'react-redux';
import { Select, TextField, MenuItem, Button, InputLabel } from '@material-ui/core';
import { CustomLink } from '../../utils';
import { AddSchedule, ScheduleForm, Field, FieldContainer } from './styled';
import { postSchedules, getSchedules, CLEAR_SCHEDULE } from '../../actions/schedules';

const Create = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = React.useState({
    title: "",
    date: "",
    status: "Pending",
  });
  
  const setValues = (e) => {
    setFormValues({...formValues, 
      [e.target.id]: e.target.value
    });
  }

  const createSchedule = (e) => {
    if(formValues.title && formValues.date && formValues.status){
      dispatch(postSchedules(formValues));
      e.preventDefault();
    }
  }

    return (
        <AddSchedule>
          <div>
            <p>Add Schedule</p>
          </div>
          <ScheduleForm>
              <TextField
                required
                id="title"
                label="Schedule Name"
                variant="standard"
                onChange={(e) => setValues(e)}
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
                    defaultValue={formValues.date}
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
              <Button type="submit" variant="contained" onClick={(e) => createSchedule(e)}>
                  Add Schedule
              </Button>
          </ScheduleForm>
          <div>
            <CustomLink to="/" onClick={() => dispatch({ type: CLEAR_SCHEDULE })}>Back</CustomLink>  
          </div>
        </AddSchedule>
    )
}

export default Create;