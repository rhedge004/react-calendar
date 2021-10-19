import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { Select, InputAdornment, MenuItem, Snackbar, Alert } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SearchIcon from '@mui/icons-material/Search';
import { CustomLink, MainContainer } from '../../styled';
import { CalendarHeader, CalendarSort, CalendarAddContainer, AddButton, SearchField, CalendarFilterContainer } from './styled';
import Schedule from '../schedule';
import { getSchedules, SCHEDULE_EVENT_CLEAR } from '../../actions/schedules';


const Home = () => {
  const schedules = useSelector(({ schedules }: RootStateOrAny)=> schedules.schedules);
  const [renderSchedules, setSchedulesToRender] = useState([]);
  const [filter, setFilter] = useState("none");
  const [search, setSearch] = useState("");

  
  const dispatch = useDispatch();
  
  const scheduleEvent = useSelector(({ schedules }: RootStateOrAny)=> schedules.scheduleEvent);
  const scheduleMessage = useSelector(({ schedules }: RootStateOrAny)=> schedules.scheduleMessage);
  useEffect(() => {
  }, [scheduleEvent]);

  useEffect(() => {
    if(schedules && schedules.length > 0){
      const componentsToRender = [];
      schedules.forEach((sched) => {
        const titleSearch =  sched.title.toLowerCase()
        if((filter === sched.status || filter === "none") && titleSearch.includes(search.toLowerCase())){
          componentsToRender.push(<Schedule props={sched} />);
        }
      })
      setSchedulesToRender(componentsToRender);
    }
    else{
      dispatch(getSchedules());
    }
  }, [schedules, filter, search]);
  
    return (
        <MainContainer>
          <CalendarHeader>
            <div>
              <p>Calendar App</p>
            </div>
            <CalendarSort>
              <div>
                <SearchField id="standard-basic" label="Search" variant="standard" 
                           value={search} onChange={(e) => setSearch(e.target.value)}
                           InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon color="primary" />
                              </InputAdornment>
                            ),
                          }}/>
              </div>
             </CalendarSort>
          </CalendarHeader>
          <CalendarAddContainer>
              <CalendarFilterContainer>
                <p>Filter</p>
                <Select
                  value={filter}
                  onChange={(e)=> setFilter(e.target.value)}
                  style={{textAlign:"left", padding:0,margin:0, width:"10vw", minWidth:"100px", height:"2.5vh", color:"white"}}
                  variant="standard"
                >
                  <MenuItem value={"none"}>None</MenuItem>
                  <MenuItem value={"Pending"}>Pending</MenuItem>
                  <MenuItem value={"On Going"}>On Going</MenuItem>
                  <MenuItem value={"Done"}>Done</MenuItem>
                </Select>
              </CalendarFilterContainer>
              <div>
                <CustomLink to="/create" style={{textDecoration: "none"}}><AddButton>Add New Schedule <AddCommentIcon /></AddButton></CustomLink>
              </div>
          </CalendarAddContainer>
          <div>
            {renderSchedules}
          </div>
          <Snackbar 
            open={scheduleEvent} 
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={6000} 
            onClose={() => { dispatch({ type: SCHEDULE_EVENT_CLEAR }) }}>
            <Alert onClose={() => { dispatch({ type: SCHEDULE_EVENT_CLEAR }) }} severity="success" sx={{ width: '100%' }}>
              {scheduleMessage}
            </Alert>
          </Snackbar>
        </MainContainer>
    )
}

export default Home;