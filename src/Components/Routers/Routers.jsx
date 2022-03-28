import { Routes, Route } from "react-router-dom";
import { AddMeetup } from "../AddMeetup/AddMeetup";
import { Event } from "../Event/Event";
import { Home } from "../Home/Home";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
import { Navbar } from "../Navbar/Navbar";
import { NotFound } from "../NotFound/NotFound";

export const Routers = () => {
    return (<>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Create other routes here: loginsignup, meetup, addmeetup and 404 */}
            {/* meetup route should be dynamic */}
        </Routes>
    </>);
}