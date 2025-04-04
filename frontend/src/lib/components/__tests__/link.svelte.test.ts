import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Link from '../link.svelte';
import Slot from '$lib/__mocks__/slot.svelte';

describe('link', () => {
	test('render slot/child with correct attribute', () => {
		render(Link, { children: Slot, href: 'http://localhost:3000' });
		expect(screen.getByText(/test/i)).toBeInTheDocument();
		expect(screen.getByRole('link').getAttribute('href')).toBe('http://localhost:3000');
		expect(screen.getByRole('img').classList).toContain('lucide-arrow-big-down');
	});
});
