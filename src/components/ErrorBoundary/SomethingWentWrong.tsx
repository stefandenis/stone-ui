import React from 'react';
import Logo from "../Logo";
import styles from './SomethingWentWrong.module.css'
import {Button, Typography} from "@mui/material";

function SomethingWentWrong() {
    return (
        <div className={styles.container}>
            <Logo textPosition='no-text' width={150}/>
            <Typography>Ooops! Something went wrong ☹</Typography>
            <Button
                color="secondary"
                variant={"contained"}
                onClick={()=>{window.location.href = '/'}}
            >
                Home
            </Button>
        </div>
    )
}

export default SomethingWentWrong;