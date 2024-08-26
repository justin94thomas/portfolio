import React, { useEffect, useState, useRef } from 'react';
import './certificates.css';
import { usePortfolioContext } from '../../Content/PortfolioContext';
import { certificates } from '../../Content/assets';
import { Modal } from 'antd';

const Certificates = () => {
    const { state } = usePortfolioContext();
    const [certificateData, setCertificateData] = useState([]);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const mapContainerRef = useRef(null);

    useEffect(() => {
        console.log("certificateData", state.data['Certificate']);
        setCertificateData(state.data['Certificate']);
    }, [state.data]);

    const handleSelectCertificate = (pdfUrl) => {
        setSelectedCertificate(pdfUrl);
        showModal();
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='div-container certificates-main'>
            <section id='certificates'>
                <div className='certificates-content'>
                    <span className='intro-name'>Certificates</span>
                    <div className='certificates-content-div' ref={mapContainerRef}>
                        {certificateData && certificateData.map(item => (
                            <div className='certificate-card' key={item.Id} onClick={() => handleSelectCertificate(item)}>
                                <div className='card-image'>
                                    <img src={certificates[item.preview]} className={"certificate-img"} alt='certificate-img' />
                                </div>
                            </div>
                        ))}
                        <Modal
                            title={selectedCertificate && selectedCertificate['Certificate Name']}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                            className="responsive-modal"
                        >
                            {
                                selectedCertificate?.Type === 'image' ?
                                    <img src={certificates[selectedCertificate?.preview]} className="certificate-preview" alt='certificate-img' /> :
                                    selectedCertificate?.Type === 'pdf' ?
                                        <iframe
                                            src={certificates[selectedCertificate?.preview]}
                                            width="100%"
                                            height="500px"
                                            title={selectedCertificate['Certificate Name']}
                                        /> : null
                            }
                        </Modal>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Certificates;
