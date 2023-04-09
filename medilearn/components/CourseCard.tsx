import React, { useState } from 'react';
import VideoModal from './VideoModal';
import Link from 'next/link'
import styles from "./CourseCard.module.css";


type CourseCardProps = {
    id: number;
    thumbnail: string;
    title: string;
    shortDescription: string;
    videoUrl: string;
};

const CourseCard = ({
    id,
    thumbnail,
    title,
    shortDescription,
    videoUrl
}: CourseCardProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div>
          <div className={styles.card} onClick={openModal}>
            <img src={thumbnail} alt={title} className={styles.thumbnail} />
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{shortDescription}</p>
            </div>
          </div>
          <VideoModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            videoUrl={videoUrl}
          />
        </div>
      );
};

export default CourseCard;
