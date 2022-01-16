import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { extractorSvelte } from 'unocss';
import Unocss from 'unocss/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				Unocss({
					extractors: [extractorSvelte]
				})
			]
		}
	}
};

export default config;
