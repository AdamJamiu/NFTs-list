import React from 'react';
import Modal from '@mui/material/Modal';
import AppContext from '../../context/appContext';
import retreiveNftsDetails from '../../hooks/retreiveNfts';
import VerifiedIcon from '@mui/icons-material/Verified';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SkeletonAnimation from "./Skeleton";
import './index.css';

export default function NftModal() {
    const { id, state, handleClose, isLoaded } = React.useContext(AppContext);
    const { data } = retreiveNftsDetails(id);
    // spliting the camel cased name
    const name = data?.contract?.name.replace(/([a-z])([A-Z])/g, '$1 $2');

    return (

        <Modal
            open={state}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='modal-wrapper'>
                {!isLoaded ? <SkeletonAnimation />
                    :
                    (<div className='modal-content'>
                        <div className='modal-img-wrapper'>
                            <img src={data?.nft?.cached_file_url} />
                            <div className='modal-name-wrap'>
                                <p className='modal-nft-name'>{name}</p>
                                <VerifiedIcon color="primary" />
                            </div>
                            <di className="flex-wrap">
                                <h1 className='txt-white'>#{data?.nft?.token_id}</h1>
                                <p>Owned by <span className="txt-secondary">De2da2</span></p>
                            </di>
                        </div>

                        <div className='modal-descs-wrapper'>
                            <Accordion disableGutters elevation={0} square className='accordion-wrapper'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <p className="txt-white b-large">Description</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <span className="txt-white">By <b>BoredApeYatchClub</b></span>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion disableGutters elevation={0} square className='accordion-wrapper'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <p className='txt-white b-large'>About Bored Ape Yacht Club</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className="about-bayc txt-white">
                                        {data?.contract?.metadata?.description}
                                    </p>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion disableGutters elevation={0} square className='accordion-wrapper'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <p className='txt-white b-large'>Details</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="details-container">
                                        <div className="attr-wrap">
                                            <p className="attr-txt-1">Contract Address</p>
                                            <span className="attr-txt-2">{data?.nft?.contract_address}</span>
                                        </div>
                                        <div className="attr-wrap">
                                            <p className="attr-txt-1">Token ID</p>
                                            <span className="attr-txt-2">{data?.nft?.token_id}</span>
                                        </div>
                                        <div className="attr-wrap">
                                            <p className="attr-txt-1">Token Standard</p>
                                            <span className="attr-txt-2">{data?.contract?.type}</span>
                                        </div>
                                        <div className="attr-wrap">
                                            <p className="attr-txt-1">Chain</p>
                                            <span className="attr-txt-2">{data?.nft?.chain}</span>
                                        </div>
                                        <div className="attr-wrap">
                                            <p className="attr-txt-1">Metadata</p>
                                            <span className="attr-txt-2">Chain</span>
                                        </div>

                                    </div>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion disableGutters elevation={0} square className='accordion-wrapper'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <p className='txt-white b-large'>Attributes</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='details-container'>

                                        <div className='details-wrap'>
                                            <p className='details-txt-1'>Contract Address</p>
                                            <p className='details-txt-2'>Contract Address</p>
                                        </div>
                                        <div className='details-wrap'>
                                            <p className='details-txt-1'>Token ID</p>
                                            <p className='details-txt-2 '>Contract Address</p>
                                        </div>
                                        <div className='details-wrap'>
                                            <p className='details-txt-1'>Token Standard</p>
                                            <p className='details-txt-2 '>Contract Address</p>
                                        </div>
                                        <div className='details-wrap'>
                                            <p className='details-txt-1'>Chain</p>
                                            <p className='details-txt-2'>Contract Address</p>
                                        </div>
                                        <div className='details-wrap'>
                                            <p className='details-txt-1'>Metadata</p>
                                            <p className='details-txt-2'>Contract Address</p>
                                        </div>
                                        <div className='details-wrap'>
                                            <p className='details-txt-1'>Creator Earnings</p>
                                            <p className='details-txt-2'>Contract Address</p>
                                        </div>
                                    </div>

                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>)}
            </div>
        </Modal>

    );
}