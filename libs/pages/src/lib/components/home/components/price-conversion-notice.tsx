import { WEBBIT_CURRENCY } from '@webbitstudio/shared-utils';
import * as priceConversionNoticeStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';
import clsx from 'clsx';

interface PriceConversionNoticeProps {
  isLoading: boolean;
  error: Error | null;
  currency: string;
  content: LocaleStrings['priceConversionNotice'];
}

/**
 * Small notice component to display currency conversion status
 * Only shows when there's an error or loading state for non-USD currencies
 */
export const PriceConversionNotice = ({
  isLoading,
  error,
  currency,
  content,
}: PriceConversionNoticeProps) => {
  if (currency === WEBBIT_CURRENCY.USD) {
    return null;
  }

  if (error) {
    return (
      <div
        className={clsx(
          priceConversionNoticeStyles.priceConversionNotice.base,
          priceConversionNoticeStyles.priceConversionNotice.error
        )}
        role="alert"
      >
        <span role="img" aria-label={content.ariaLabels.warning}>
          ⚠️
        </span>{' '}
        {content.error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className={clsx(
          priceConversionNoticeStyles.priceConversionNotice.base,
          priceConversionNoticeStyles.priceConversionNotice.loading
        )}
        aria-live="polite"
      >
        {content.loading.replace('{currency}', currency)}
      </div>
    );
  }

  return null;
};
