import { Layout } from 'antd';
import Head from 'next/head';

import { FooterSection } from '../footer';
import { HeaderSection } from '../header';

const { Content } = Layout;

interface LayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: LayoutProps) => {
	return (
		<Layout className="min-h-screen">
			<Head>
				<title>IPPEDU</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderSection />
			<Content>
				<div className="container mx-auto px-8 py-12">{children}</div>
			</Content>
			<FooterSection />
		</Layout>
	);
};
