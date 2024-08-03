import React from 'react';
import styles from './style.module.scss';

interface DeleteKidsProps {
  handleDialogClose: () => void;
  removeChild: (index: number) => void;
  childIndex: any;
}

const DeleteKids: React.FC<DeleteKidsProps> = ({
  handleDialogClose,
  removeChild,
  childIndex,
}) => {
  return (
    <div className={styles.custom_modal}>
      <h2 className={styles.title}>
        Are you sure you 
        <br></br>
        want to delete kid?
      </h2>
      <p className={styles.subHeading}>If you are sure, click Yes.</p>
      <div className={styles.buttons}>
        <button className={styles.noButton} onClick={handleDialogClose}>
          No
        </button>
        <button
          className={styles.yesButton}
          onClick={() => {
            removeChild(childIndex);
            handleDialogClose();
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteKids;
