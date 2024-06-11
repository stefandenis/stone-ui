import React, {useEffect, useState} from 'react';

type TextPosition = 'right' | 'bottom' | 'bottom-right' | 'no-text'

function Logo(props: {textPosition: TextPosition, width: number | string}) {
    const [src, setSrc] = useState('');
    useEffect(()=>{
        if (props.textPosition === 'right') {
            setSrc("/LogoTestRight.png")
        }
        if (props.textPosition === 'no-text') {
            setSrc("/LogoNoText.png");
        }
    },[props.textPosition])
    return (
        <img src={src} height={'auto'} width={props.width}/>
    );
}

export default Logo;