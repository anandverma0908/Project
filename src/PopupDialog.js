import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import { ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Description from './Description.js';
import PopupBody from './PopupBody.js';
import PopupFooterTable from './PopupFooterTable.js';

Modal.setAppElement('#root')
function PopupDialog(props) {

    const { openPopup, setOpenPopup, histories, process } = props

    return (
        <Modal
            isOpen={openPopup}
            style={
                {
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    },
                    content: {
                        position: 'fixed',
                        overflow: 'auto',
                        margin: '10% 17% 3% 17%',
                    }
                }
            }
        >
            <ModalHeader>
                {/* Component 1 i.e Popup dialog header */}

                <div className="modal_header">
                    <div>
                        <span className="modal-heading">{process.name}</span>
                        <span className="close" onClick={() => {
                            setOpenPopup(false)
                        }}>&times;</span>
                    </div>
                    <div className="description">
                        <span><Description description={process.description} processId={process.id} /></span>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className="modal_body">

                    <PopupBody process={process}/>
                    <PopupFooterTable histories={histories}/>  
                </div>
            </ModalBody>
        </Modal>
    )
}
export default PopupDialog
