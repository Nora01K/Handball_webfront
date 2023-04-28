import { FlexBox, Title, Text } from "@ui5/webcomponents-react";
import React from "react";

export default function HomeContent () {
        return (
        <>
        <FlexBox direction='Column'>
            <Title level='H4'>Über diese Webseite</Title>
            <Text>Bei dieser Webseite handelt es sich um eine Private Webseite</Text>
        </FlexBox>

        </>);
    }
