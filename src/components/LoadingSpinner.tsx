import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading medal data...</p>
            <style jsx>{`
                .loading-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  padding: 40px;
                }
                .spinner {
                  border: 4px solid rgba(0, 0, 0, 0.1);
                  border-radius: 50%;
                  border-top: 4px solid #3498db;
                  width: 40px;
                  height: 40px;
                  animation: spin 1s linear infinite;
                  margin-bottom: 16px;
                }
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
        </div>
    );
};

export default LoadingSpinner;