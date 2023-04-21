import { LinkedinIcon, InstagramIcon, TwitterIcon, GithubIcon } from './socialIcons'

const navigation = {
	solutions: [
		{ name: 'Marketing', href: '#' },
		{ name: 'Analytics', href: '#' },
		{ name: 'Commerce', href: '#' },
		{ name: 'Insights', href: '#' },
	],
	support: [
		{ name: 'Pricing', href: '#' },
		{ name: 'Documentation', href: '#' },
		{ name: 'Guides', href: '#' },
		{ name: 'API Status', href: '#' },
	],
	company: [
		{ name: 'About', href: '#' },
		{ name: 'Blog', href: '#' },
		{ name: 'Jobs', href: '#' },
		{ name: 'Press', href: '#' },
		{ name: 'Partners', href: '#' },
	],
	legal: [
		{ name: 'Claim', href: '#' },
		{ name: 'Privacy', href: '#' },
		{ name: 'Terms', href: '#' },
	],
	social: [
		{
			name: 'Facebook',
			href: '#',
			icon: <LinkedinIcon />,
		},
		{
			name: 'Instagram',
			href: '#',
			icon: <InstagramIcon />,
		},
		{
			name: 'Twitter',
			href: '#',
			icon: <TwitterIcon />,
		},
		{
			name: 'GitHub',
			href: '#',
			icon: <GithubIcon />,
		},
		
	],
};


export default navigation;