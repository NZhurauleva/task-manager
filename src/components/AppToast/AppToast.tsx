import * as React from 'react';

import { memo } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './style.module.scss';

const notifyActionInvestments = (modalMessage: string) => toast(modalMessage);

const clearWaitingQueue = () => {
  toast.clearWaitingQueue();
};

export const handleClickNotify = (modalMessage: string) => {
  notifyActionInvestments(modalMessage);
  clearWaitingQueue();
};

const AppToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className={styles.snack}
      toastClassName={styles.toastBody}
      limit={1}
    />
  );
};

export const AppToastMemo = memo(AppToast);
