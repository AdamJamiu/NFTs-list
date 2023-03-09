import React, { useState } from 'react';
import AppContext from './index';

export default function AppProvider(props) {
    const [state, setState] = useState(false);
    const [id, setId] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpen = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    return (
        <AppContext.Provider value={{
            state, setState,
            handleOpen, handleClose,
            isLoaded, setIsLoaded,
            id, setId,
            isLoading, setIsLoading
        }}>
            {props.children}
        </AppContext.Provider>
    );
}