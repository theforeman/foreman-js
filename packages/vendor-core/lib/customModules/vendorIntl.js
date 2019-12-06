export const loadVendorIntl = () =>
  import(/* webpackChunkName: "intl" */ 'intl');

export const loadVendorIntlLocale = locale =>
  import(
    /* webpackChunkName: 'intl/locale/[request]' */ `intl/locale-data/jsonp/${locale}`
  );

export const loadReactIntlLocale = locale =>
  import(
    /* webpackChunkName: 'react-intl/locale/[request]' */ `react-intl/locale-data/${locale}`
  );
