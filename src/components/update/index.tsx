import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Select, TextField, MenuItem, InputLabel } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomLink, MainContainer } from "../../styled";
import { ScheduleForm, Field, FieldContainer, UpdateButton, FunctionButtonContainer, DeleteButton, UpdateScheduleHeader } from './styled';
import DeleteConfirmationDialog from './dialog';
import { updateSchedule, deleteSchedule, getScheduleId, CLEAR_SCHEDULE } from '../../actions/schedules';

const Update = ({history}) => {
  const [formValues, setFormValues] = React.useState({
    title: "",
    date: "",
    status: "Pending",
  });
  const [dialogOpen, setDialogState] = React.useState(false);
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
  }, [schedule, dialogOpen]);

  
  const setValues = (e) => {
    setFormValues({...formValues, 
      [e.target.id]: e.target.value
    });
  }

  const createSchedule = (e) => {
    if(formValues.title && formValues.date && formValues.status){
      
      e.preventDefault();
      dispatch(updateSchedule(formValues, params.id, history));
    }
  }

  const deleteScheduleInit = () => {
    if(formValues.title && formValues.date && formValues.status){
      dispatch(deleteSchedule(history, params.id));
    }
  }

    return (
        <MainContainer>
          <UpdateScheduleHeader>
            <CustomLink to="/" onClick={() => dispatch({ type: CLEAR_SCHEDULE })}><ArrowBackIcon /></CustomLink>  
            <p>Update Schedule</p>
          </UpdateScheduleHeader>
          <DeleteConfirmationDialog open={dialogOpen} handleClose={() => setDialogState(false) } onConfirm={() => deleteScheduleInit()}/>
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
              <FunctionButtonContainer>
                <UpdateButton type="submit" variant="contained" onClick={(e) => createSchedule(e)}>
                    <EditIcon /> Update Schedule
                </UpdateButton>
                <DeleteButton variant="contained" onClick={(e) => setDialogState(true)}>
                    <DeleteIcon /> Delete Schedule
                </DeleteButton>
              </FunctionButtonContainer>
          </ScheduleForm>
        </MainContainer>
    )
}

export default Update;