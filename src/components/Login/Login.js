import {
    Title,
    Card,
    Label,
    Input,
    Button,
    FlexBox,
    Link
} from "@ui5/webcomponents-react";
import React, {useState} from "react";
import './Login.css'
import {requestLogin} from "./Loginrequest";
export default function Login() {
    let [password, setPassword] = useState(null)
    const handleInputPassword = (e) => {
        setPassword(e.target._state.value)
    }
    let [username, setUsername] = useState(null)
    const handleInputUsername = (e) => {
        setUsername(e.target._state.value)
    }

    console.log(password + "   " + username)
    return (
        <>
            <Card style={
                {
                    width: '20vw',
                    height: '40vh',
                    marginLeft: '3vw'
                }
            }>
                <FlexBox wrap="NoWrap" direction='Column' justifyContent="SpaceAround" alignItems="Start" className="Flexbox-Login">
                    
                    <Title>Login</Title>
                    <Label>Username/Email</Label>
                    <Input onInput={handleInputPassword}/>
                    <Label>Passwort</Label>
                    <Input type="Password" onInput={handleInputUsername}/>
                    <Link>Passwort oder Usename vergessen</Link>
                    <Button onClick={
                            () => requestLogin(username, password)
                        }
                        design="Emphasized">Login</Button>
                        
                </FlexBox>
            </Card>
        </>
    );
}
