import { Layout } from 'antd';
import Head from 'next/head';

import { HeaderSection } from '../header';

const { Content, Footer } = Layout;

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
			<Content>{children}</Content>
			<Footer className="bg-gray-800 text-white p-4 text-center">
				<div className="container mx-auto">
					<p>Copyright © 2023 IPPEDU</p>
				</div>
			</Footer>
		</Layout>
	);
};
