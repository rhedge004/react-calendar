import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { NativeSelect, InputLabel } from '@material-ui/core';
import { CustomLink } from '../../utils';
import { CalendarContainer, CalendarHeader, CalendarSort } from './styled';
import Schedule from '../schedule';
import { getSchedules } from '../../actions/schedules';


const Home = () => {
  const schedules = useSelector(({ schedules }: RootStateOrAny)=> schedules.schedules);
  const [renderSchedules, setSchedulesToRender] = useState([]);
  const [filter, setFilter] = useState("none");

  
  const dispatch = useDispatch();

  useEffect(() => {
    if(schedules && schedules.length > 0){
      const componentsToRender = [];
      schedules.forEach((sched) => {
        if(filter === sched.status || filter === "none"){
          componentsToRender.push(<Schedule props={sched} />);
        }
      })
      setSchedulesToRender(componentsToRender);
    }
    else{
      dispatch(getSchedules());
    }
  }, [schedules, filter]);
  
    return (
        <CalendarContainer>
          <CalendarHeader>
            <div>
              <p>Calendar App</p>
            </div>
            <CalendarSort>
              <p>Filter</p>
              <select id="filter" onChange={(e)=> setFilter(e.target.value)}>
                <option value={"none"}>None</option>
                <option value={"Pending"}>Pending</option>
                <option value={"On Going"}>On Going</option>
                <option value={"Done"}>Done</option>
              </select>
             </CalendarSort>
          </CalendarHeader>
          <div>
            {renderSchedules}
          </div>
          <div>
            <CustomLink to="/create" style={{textDecoration: "none"}}>Create</CustomLink>
          </div>
        </CalendarContainer>
    )
}

export default Home;