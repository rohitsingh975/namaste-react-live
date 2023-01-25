import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from  "./ProfileClass";

const About = () => {
    return (
        <div>
            <h1>About us page</h1>
            <p>
                
                This is Namaste React Live Course
            </p>
            <ProfileFunctionalComponent name={"Akshay"} />
            <Profile name={"AkshayClass"}/>
        </div>
    )
};

export default About;