import type { AppProps } from 'next/app';

import { MainLayout } from 'src/components/layout/main';

import 'src/styles/globals.css';

interface Props extends AppProps {
	Component: any;
}

export default function App({ Component, pageProps }: Props) {
	const Layout = Component?.Layout || MainLayout;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
