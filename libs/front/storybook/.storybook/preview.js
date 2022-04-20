/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import CssBaseline from '@mui/material/CssBaseline';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { themes } from '@storybook/theming';

import { appTheme } from '@theme';

import { i18n } from './i18next';
import { AppThemeProvider } from './../../components/src/molecules/providers/app-theme.provider';
import { WithSnackbar } from '@components/organisms';

const finalI18n = i18n.cloneInstance();

// Initialize MSW
initialize({ onUnhandledRequest: 'bypass' });

export const parameters = {
  backgrounds: {
    default: 'dark',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  controls: { sort: 'requiredFirst' },
  actions: { argTypesRegex: '^on[A-Z].*' },
  msw: {
    handlers: {},
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'lightgrey' },
  },
  i18n: finalI18n,
  locale: 'en',
  locales: {
    en: { right: '🇫🇷', title: 'Français' },
    fr: { right: '🇬🇧', title: 'English' },
  },
};

export const decorators = [
  (Story, context) => (
    <>
      <meta name="theme-color" content={appTheme.palette.primary.main} />
      <AppThemeProvider>
        <WithSnackbar>
          <CssBaseline />
          <Story />
        </WithSnackbar>
      </AppThemeProvider>
    </>
  ),
  mswDecorator,
];
