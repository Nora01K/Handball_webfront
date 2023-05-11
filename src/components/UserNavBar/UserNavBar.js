import React from "react";
import { ShellBar, StandardListItem} from "@ui5/webcomponents-react";

export default function UserNavbar(){
        return (
        <>
        <ShellBar
  menuItems={<><StandardListItem data-key="1">Anleitung</StandardListItem><StandardListItem data-key="2">Impressum</StandardListItem><StandardListItem data-key="3">Kontakt für User</StandardListItem></>}
  primaryTitle="Handball Analyzer"
  showProductSwitch
>
</ShellBar>
        </>);
    }