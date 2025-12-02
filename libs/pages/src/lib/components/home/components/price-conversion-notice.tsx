import React from 'react';

interface PriceConversionNoticeProps {
  isLoading: boolean;
  error: Error | null;
  currency: string;
}

/**
 * Small notice component to display currency conversion status
 * Only shows when there's an error or loading state for non-USD currencies
 */
export const PriceConversionNotice: React.FC<PriceConversionNoticeProps> = ({
  isLoading,
  error,
  currency,
}) => {
  if (currency === 'USD') {
    return null;
  }

  if (error) {
    return (
      <div
        className="text-xs text-yellow-400/80 px-4 py-2 text-center"
        role="alert"
      >
        <span role="img" aria-label="Warning">
          ⚠️
        </span>{' '}
        Currency conversion unavailable. Prices shown in USD.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className="text-xs text-slate-400/80 px-4 py-2 text-center"
        aria-live="polite"
      >
        Converting prices to {currency}...
      </div>
    );
  }

  return null;
};
