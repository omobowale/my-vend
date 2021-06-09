import { toast } from 'react-toastify';
import { jsx, css } from '@emotion/react';

const Notify = {
    success(msg, options = {}) {
        return toast.success(msg, {
            position: toast.POSITION.TOP_CENTER,
            ...options,
            className: 'toast-success-container',
            // progressClassName: css`
            //     visibility: 'hidden';
            // `
        });
    },
    error(msg, options = {}) {
        return toast.error(msg, {
            position: toast.POSITION.TOP_CENTER,
            ...options,
            className: 'toast-error-container',
            // progressClassName: css`
            //     display: 'none';
            // `
        });
    },
    simple(msg, options = {}) {
        return toast(msg, {
            position: toast.POSITION.TOP_CENTER,
            ...options,
            // className: 'toast-error-container',
            // progressClassName: css`
            //     display: 'none'
            // `
        });
    }
};

export default Notify;
