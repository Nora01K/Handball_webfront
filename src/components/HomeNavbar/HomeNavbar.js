import { ShellBar, StandardListItem} from "@ui5/webcomponents-react";
import React from "react";

export default function HomeNavbar(){
        return (
        <>
        <ShellBar
  menuItems={<><StandardListItem data-key="1">Anleitung</StandardListItem><StandardListItem data-key="2">Impressum</StandardListItem><StandardListItem data-key="3">Kontakt für User</StandardListItem></>}
  primaryTitle="Handball Analyzer"
  secondaryTitle="Spieler Statistiken und mehr"
  showProductSwitch
>
</ShellBar>
        </>);
    }
