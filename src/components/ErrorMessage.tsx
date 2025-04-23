import React from 'react';

interface ErrorMessageProps {
    message: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="error-message">
            <p>{message}</p>
            <style jsx>{`
              .error-message {
                padding: 20px;
                background-color: #ffefef;
                border: 1px solid #ffcbcb;
                border-radius: 4px;
                color: #d32f2f;
                margin: 20px 0;
                text-align: center;
              }
            `}
            </style>
        </div>
    );
};

export default ErrorMessage;