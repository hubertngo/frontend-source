import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Layout, Menu } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

const { Header } = Layout;

export const HeaderSection: React.FC = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<Header className="bg-white shadow-sm fixed w-full z-10">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="w-32">
							<Image src="/logo/32x32.png" alt="ipPedu" width={32} height={32} />
						</div>
						<Menu mode="horizontal" className="hidden md:block">
							<Menu.Item key="1">Home</Menu.Item>
							<Menu.Item key="2">About</Menu.Item>
							<Menu.Item key="3">Courses</Menu.Item>
							<Menu.Item key="4">Contact</Menu.Item>
						</Menu>
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
			<Drawer placement="right" closable={false} onClose={onClose} visible={visible}>
				<Menu mode="inline">
					<Menu.Item key="1">Home</Menu.Item>
					<Menu.Item key="2">About</Menu.Item>
					<Menu.Item key="3">Courses</Menu.Item>
					<Menu.Item key="4">Contact</Menu.Item>
					<Menu.Item key="5">
						<Button block className="mt-4" type="primary">
							Sign Up
						</Button>
					</Menu.Item>
					<Menu.Item key="6">
						<Button block>Log In</Button>
					</Menu.Item>
				</Menu>
			</Drawer>
		</Header>
	);
};
