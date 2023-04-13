import { Button } from 'antd';

export const HomePageContainer = () => {
	return (
		<div className="mx-auto px-8 py-12">
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
	);
};
