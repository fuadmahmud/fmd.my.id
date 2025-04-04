import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('should render h1', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});

	test('should render correctly', () => {
		render(Page);
		expect(screen.getByText(/fuad mahmud ibrahim/i)).toBeInTheDocument();
		expect(screen.getByAltText('My Icon')).toBeInTheDocument();
		expect(screen.getByText(/visit linkedin/i)).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/fuadmahmud/'
		);
		expect(screen.getAllByText(/2020/i).length).toBe(3);
		expect(screen.getByText(/balen/i).parentElement?.getElementsByTagName('a').length).toBeFalsy();
	});
});
