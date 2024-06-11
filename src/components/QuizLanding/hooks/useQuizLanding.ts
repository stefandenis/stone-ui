import React from 'react';

function useQuizLanding () {
    const [isNewUser, setIsNewUser] = React.useState<boolean>();
    React.useEffect(() => {
        const username = localStorage.getItem("username");
        if (username) {
            setIsNewUser(false);
        } else {
            setIsNewUser(true)
        }
    }, [])
    return {
        isNewUser
    }
}

export default useQuizLanding;
