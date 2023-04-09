import React from 'react';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './VideoModal.module.css';

type VideoModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  videoUrl: string;
};

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onRequestClose, videoUrl }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
    >
      <div className={styles.modalContent}>
        <div className={styles.videoWrapper}>
          <iframe
            title="video"
            src={`${videoUrl}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={styles.videoIframe}
          ></iframe>
        </div>
        <div className={styles.closeButton}>
          <IconButton edge="end" color="inherit" onClick={onRequestClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;