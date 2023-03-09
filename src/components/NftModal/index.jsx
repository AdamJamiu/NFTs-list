import * as React from 'react';
import Modal from '@mui/material/Modal';
import AppContext from '../../context/appContext';
import './index.css';
import MuiModal from './MuiModal';
import SkeletonAnimation from './Skeleton';

export default function NftModal() {
    const { state, handleClose, isLoaded } = React.useContext(AppContext);

    return (

        <Modal
            open={state}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <MuiModal />
        </Modal>

    );
}