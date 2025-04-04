import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Navbar from '../navbar.svelte';

describe('navbar', () => {
	test('should render correctly', () => {
		render(Navbar);
		expect(screen.getAllByRole('navigation')[0]).toBeInTheDocument();
		expect(screen.getAllByText(/blog/i)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/contact/i)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/experience/i)[0]).toBeInTheDocument();
	});

	test('should have desired href', () => {
		render(Navbar);
		const hrefs = screen.getAllByRole('link').map((link) => link.getAttribute('href'));
		expect(hrefs).toContain('/#experience');
		expect(hrefs).toContain('/#footer');
		expect(hrefs).toContain('/blogs');
	});
});
