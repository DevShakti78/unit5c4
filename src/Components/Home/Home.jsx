import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";


export const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/meetups").then(({data})=>{
      let data1=data.sort((a,b)=> a.date - b.data)
      console.log(data1)
      setEvents(data1)
    })
  },[])
  return (
    <div className="homeContainer">
      {events
        .filter((el) => { }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`el.id`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
             <p>el.title</p>
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addmeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {events
            .map((el) => {
              return (
                <Link to={`/meetup/${el.id}`} className="events border">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                    <div className=" border border-dark p-3 m-2 w-50 mx-auto">
                  <h2>{el.title}</h2>
                  <h2>{el.date}</h2>
                  <h2>{el.location}</h2>
                  <h2>{el.time}</h2>
                  <h2>{el.description}</h2>
                    </div>
                 

                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
