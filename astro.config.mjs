// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'The HyDE project',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
        de: { label: 'Deutsch', lang: 'de' },
        nl: { label: 'Nederlands', lang: 'nl' },
        zh: { label: '中文', lang: 'zh' },
        fr: { label: 'Français', lang: 'fr' },
      },
      social: {
        github: 'https://github.com/HyDE-Project',
        discord: 'https://discord.gg/8nWbDC4SnP',
      },
      sidebar: [
        {
          label: '🚀 Getting Started',
          autogenerate: {directory: 'getting-started'},
        },
        // {
        //   label: '🌟 Features',
        //   items: [
        //     { label: 'HyDE CLI', slug: 'features/cli' },
        //     { label: 'HyprPanel', slug: 'features/hyprpanel' },
        //   ],
        // },
        {
          label: '🛠️ Configuring',
          // items: [
          //   { label: 'Hyprland', slug: 'configuring/hyprland' },
          // ],
          autogenerate: {directory: 'configuring'},
        },
        {
          label: '📙 Man Pages',
          autogenerate: {directory: 'man-pages'},
        },
        {
          label: '🎨 Theming',
          autogenerate: {directory: 'theming'},
        },
        // {
        //   label: '🧩 Extensions',
        //   items: [
        //     { label: 'SwayOSD', slug: 'extensions/swayosd' },
        //   ],
        // },
        {
          label: '📚 Resources',
          autogenerate: {directory: 'resources'}
        },
        {
          label: '👥 Help',
          autogenerate: {directory: 'help'}
        }
      ],
    }),
  ],
});
