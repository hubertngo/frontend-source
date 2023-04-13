import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Layout, Menu } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

import type { MenuProps } from 'antd';

const { Header } = Layout;

export const HeaderSection: React.FC = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const items: MenuProps['items'] = [
		{
			key: '1',
			label: 'Home',
		},
		{
			key: '2',
			label: 'About',
		},
		{
			key: '3',
			label: 'Courses',
		},
		{
			key: '4',
			label: 'Contact',
		},
	];

	const mobileItems: MenuProps['items'] = [
		...items,
		{
			key: '5',
			label: (
				<Button block className="mt-4" type="primary">
					Sign Up
				</Button>
			),
		},
		{
			key: '6',
			label: <Button block>Log In</Button>,
		},
	];

	return (
		<Header className="bg-white shadow-sm fixed w-full z-10">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="w-32">
							<Image src="/logo/32x32.png" alt="ipPedu" width={32} height={32} />
						</div>
						<Menu mode="horizontal" className="hidden md:block" items={items} />
					</div>
					<div className="hidden md:block">
						<Button className="mr-4">Log In</Button>
						<Button type="primary">Sign Up</Button>
					</div>
					<div className="md:hidden">
						<Button type="text" onClick={showDrawer}>
							<MenuOutlined />
						</Button>
					</div>
				</div>
			</div>
			<Drawer placement="right" closable={false} onClose={onClose} open={visible}>
				<Menu mode="inline" items={mobileItems} />
			</Drawer>
		</Header>
	);
};
