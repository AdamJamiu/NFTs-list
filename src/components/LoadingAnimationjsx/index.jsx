import React from 'react'
import './index.css'
import AppContext from '../../context/appContext';


export const LoadingAnimation = () => {
    const { isLoading } = React.useContext(AppContext);
    return (
        <>
            {
                isLoading === false ? null
                    :
                    <div className='animation-wrapper'>
                        <div className="loading-animation">
                            <div className="loading-animation__dot" />
                            <div className="loading-animation__dot" />
                            <div className="loading-animation__dot" />
                        </div>
                    </div>
            }
        </>
    );
}

export default LoadingAnimation;