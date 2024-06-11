import React from 'react';
import { Container } from "@mui/material";
function Layout(props: any) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {props.children}
        </div>
    )
}

export default Layout;