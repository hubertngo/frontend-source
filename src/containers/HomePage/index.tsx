import { Button, Layout } from 'antd';

const { Content } = Layout;

import { MainLayout } from 'src/components/layout/main';

export const HomePageContainer = () => {
	return (
		<MainLayout>
			<div className="mx-auto">
				<h1 className="text-4xl font-bold text-center">Welcome to my app!</h1>
				<Content className="py-12 bg-white">
					<div className="container mx-auto">
						<h1 className="text-4xl font-bold text-center">Welcome to My App</h1>
						<p className="text-center mt-4">
							This is a landing page for my app using Next.js, Tailwind CSS, and Ant Design (antd).
						</p>
						<div className="flex justify-center mt-8">
							<Button type="primary" size="large">
								Get Started
							</Button>
						</div>
					</div>
				</Content>
			</div>
		</MainLayout>
	);
};
