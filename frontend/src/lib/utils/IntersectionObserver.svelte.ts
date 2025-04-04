import { writable, derived } from 'svelte/store';

export const IntersectionObserverImpl = () => {
	let margin = {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	};
	let internalIntersecting = writable(false);
	let counter = 0;
	const isIntersecting = derived(internalIntersecting, ($val) => $val);

	function observe(container: Element, threshold = 0, once?: boolean) {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${margin.bottom}px ${margin.left}px ${margin.top}px ${margin.right}px`;
			const observer = new IntersectionObserver(
				(entries) => {
					internalIntersecting.set(entries[0].isIntersecting);
					counter++;

					if (internalIntersecting && once && counter > 1) {
						counter = 0;
						observer.unobserve(container);
					}
				},
				{
					rootMargin,
					threshold
				}
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		} else {
			function handler() {
				const bcr = container.getBoundingClientRect();
				internalIntersecting.set(
					bcr.bottom + margin.bottom > 0 &&
						bcr.right + margin.right > 0 &&
						bcr.top - margin.top < window.innerHeight &&
						bcr.left - margin.left < window.innerWidth
				);
				counter++;

				if (internalIntersecting && once && counter > 1) {
					counter = 0;
					window.removeEventListener('scroll', handler);
				}
			}

			window.addEventListener('scroll', handler);
			return () => window.removeEventListener('scroll', handler);
		}
	}

	return { isIntersecting, observe };
};
