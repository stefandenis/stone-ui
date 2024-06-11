import React from 'react';
import {Divider, Radio, Stack, Tooltip} from "@mui/material";
import styles from './Roadmap.module.css'
type RoadmapProps = {
    map: boolean[];
    activeBullet: number;
    onClickBullet: (index: number) => void;
}
function Roadmap(props: RoadmapProps) {
    const activeBorderColor = React.useMemo(() => "#f9c252", [])
    const inactiveBorderColor = React.useMemo(() => "rgba(248,132,43,0.5)", [])

    const getBorderColor = React.useCallback((currentStep: boolean, rightNeighbour: boolean) => {
        if (currentStep && rightNeighbour) {
            return activeBorderColor;
        } else
            return inactiveBorderColor;
    }, [activeBorderColor, inactiveBorderColor])

    return(
        <Stack
            direction="row"
            sx={{justifyContent:"center"}}
        >
            {
                props.map.slice(0, props.map.length-1).map((checked, index)=>{
                    return (
                        <React.Fragment key={`bullet-number-${index}`}>
                            <Tooltip
                                title={index === props.activeBullet ? "Current question" : ""}>
                                <Radio
                                    checked={checked || index === props.activeBullet}
                                    color={(index === props.activeBullet) ? "warning": undefined}
                                    sx={{padding: "0px"}}
                                    value={index}
                                    onClick = {()=>{props.onClickBullet(index)}}
                                    key={`roadmap-bullet-${index}`}
                                />
                            </Tooltip>
                            <div
                                className={styles.divider}>
                                <Divider
                                    orientation='horizontal'
                                    textAlign='center'
                                    sx={{width: '10px' , position:'absolute', borderColor: getBorderColor(checked, props.map[index+1])}}/>
                            </div>
                        </React.Fragment>)
                })
            }
            <Radio
                checked={props.map[props.map.length-1] || props.activeBullet === props.map.length - 1}
                sx={{padding: "0px"}}
                color={props.activeBullet === props.map.length - 1 ? "warning" : undefined}
                value={props.map.length-1}
                onClick={()=>{props.onClickBullet(props.map.length - 1)}}
            />
        </Stack>
    )
}

export default Roadmap;