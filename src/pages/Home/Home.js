import React from "react";

import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import Login from "../../components/Login/Login";
import { FlexBox } from "@ui5/webcomponents-react";
import HomeContent from "../../components/HomeContent/HomeContent";
import './Home.css'
class Home extends React.Component {
    state = {}
    render() {
        return (<>
        <HomeNavbar/>
        <FlexBox direction='Row' alignItems='Center' justifyContent='Center' className='Flexbox-Home'>
        <HomeContent/>
        <Login/>
        </FlexBox>
        </>);
    }
}

export default Home;
