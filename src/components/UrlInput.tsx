import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useUrlValidation } from '../hooks/useUrlValidation';

export function UrlInput() {
  const [url, setUrl] = useState('');
  const [validateUrl, validationResult] = useUrlValidation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    validateUrl(newUrl);
  };

  return (
    <div className="url-input">
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter URL (e.g., https://example.com)"
        className={validationResult.isValid ? 'valid' : 'invalid'}
      />
      {validationResult.error && (
        <div className="error-message">{validationResult.error}</div>
      )}
      <style>
        {`
          .url-input {
            display: flex;
            flex-direction: column;
            gap: 8px;
            max-width: 400px;
          }
          input {
            padding: 8px 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }
          input.valid {
            border-color: #4caf50;
          }
          input.invalid {
            border-color: #f44336;
          }
          .error-message {
            color: #f44336;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
} 