import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.statusText || error?.message}</p>
      <button onClick={() => window.location.replace('/')}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
