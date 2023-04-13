import type { AppProps } from 'next/app';

import 'src/styles/globals.css';

interface Props extends AppProps {
	Component: any;
}

export default function App({ Component, pageProps }: Props) {
	const Layout = Component?.Layout;
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
