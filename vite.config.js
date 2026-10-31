import { fileURLToPath } from 'node:url';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
const config = { extensions: ['.svelte', '.svx'], preprocess: mdsvex({ extensions: ['.svx'], layout: { runbook: fileURLToPath(new URL('./src/lib/layouts/runbook.svelte', import.meta.url)) } }), adapter: adapter(), alias: { '#lib': './src/lib' }, prerender: { entries: ['*'] } };

export default defineConfig({ plugins: [sveltekit(config)] });
