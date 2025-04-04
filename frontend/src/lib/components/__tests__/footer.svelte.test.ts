import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Footer from '../footer.svelte';
import { IntersectionObserverImpl } from '$lib/utils/IntersectionObserver.svelte';

const { observe } = IntersectionObserverImpl();

describe('footer', () => {
	test('should render 3 social links and 1 design ref', () => {
		render(Footer, { observe });
		expect(screen.getAllByRole('link').length).toBe(4);
	});
});
