'use client';

import * as React from 'react';
import { ThemeProvider, useTheme } from 'next-themes';

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			enableSystem
			attribute="class"
			defaultTheme="dark"
			disableTransitionOnChange>
			{children}
		</ThemeProvider>
	);
}
