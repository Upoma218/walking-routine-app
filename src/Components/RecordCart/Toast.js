import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Toast = () => {
    return (
        <div style={{ padding: 30 }}>
            <button
        onClick={() => {
          toast(
            <div>
              <h2>Toast Title</h2>
              <p>
                Toast description. Just some dummy text. Just some dummy text.
                Just some dummy text.
              </p>
            </div>,
            {
              position: 'bottom-left',
              style: {
                background: '#ff1744',
                color: '#fff',
              },
              duration: 2000,
            }
          );
        }}
      >
        Activity Completed
      </button>
      <Toaster />
    </div>
  );
}

export default Toast;