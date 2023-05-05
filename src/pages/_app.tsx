import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { Theme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { darkTheme, lightTheme } from './theme';

export function App({ Component, pageProps, darkMode }: AppProps & { darkMode: ReturnType<typeof useDarkMode>}) {
	const theme: Theme = React.useMemo<Theme>((): Theme => (darkMode.darkModeActive ? darkTheme : lightTheme), [darkMode.darkModeActive]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default withDarkMode(App);