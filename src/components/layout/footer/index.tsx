import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterSection = () => {
	return (
		<Footer className="bg-gray-800 text-white p-4 text-center">
			<div className="container mx-auto">
				<p>Copyright © 2023 IPPEDU</p>
			</div>
		</Footer>
	);
};
