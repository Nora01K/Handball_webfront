import { Title, Card, Label, Input, Button, FlexBox, Link } from "@ui5/webcomponents-react";
import React from "react";
import './Login.css'
import { requestLogin } from "./Loginrequest";
export default function Login() {
        return (<>
        <Card style={{width:'20vw',height:'40vh', marginLeft: '3vw'}}>
            <FlexBox wrap="NoWrap" direction='Column' justifyContent="SpaceAround" alignItems="Start"  className="Flexbox-Login">
        <Title>Login</Title>
        <Label>Username/Email</Label>
        <Input/>
        <Label>Passwort</Label>
        <Input/>
        <Link>Passwort oder Username vergessen</Link>
        <Button onClick={requestLogin()} design="Emphasized">Login</Button>
        </FlexBox>
        </Card>
        </>);
    }