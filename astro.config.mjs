// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hyde',
			social: {
				github: 'https://github.com/HyDE-Project',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Hyde Cli', slug: 'guides/cli' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
