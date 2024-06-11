import React from 'react';
import styles from './Loading.module.css';
import Logo from "../Logo";
import {LinearProgress} from "@mui/material";

function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <Logo textPosition='no-text' width={100}/>
            <LinearProgress sx={{width:150, borderRadius: 50, marginTop:'5px', paddingTop:'5px'}} color={'primary'}/>
        </div>
    )
}

export default Loading;