import React, {ReactChildren} from 'react';
import {Button, Popover, Typography} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type PopoverButtonProps = {
    text: string;
    children: string;
    handleClick: () => void;
    shouldPop: boolean;
    sx: SxProps<Theme>
}

function PopoverButton(props: PopoverButtonProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleOpen = React.useCallback((event: React.MouseEvent<HTMLButtonElement>)=> {
        setAnchorEl(event.currentTarget);

    }, [])

    return (
        <>
        <Button
            sx={props.sx}
            color="secondary"
            variant={"contained"}
            onClick={(e)=>{
                if (props.shouldPop) handleOpen(e)

                props.handleClick();
            }}>
            {props.children}
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
    >
        <Typography sx={{ p: 2 }}>{props.text}</Typography>
    </Popover>
        </>
    )
}

export default PopoverButton;