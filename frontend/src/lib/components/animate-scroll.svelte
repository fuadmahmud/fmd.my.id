<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { IntersectionObserverImpl } from '$lib/utils/IntersectionObserver.svelte';

	const {
		children,
		once,
		threshold,
		...props
	}: {
		children: Snippet;
		class: string;
		threshold?: number;
		once?: boolean;
	} = $props();
	const { isIntersecting, observe } = IntersectionObserverImpl();
	let container: HTMLElement;

	onMount(() => {
		const unobserve = observe(container, threshold, once);

		return unobserve;
	});
</script>

<div bind:this={container} class={$isIntersecting ? props.class : ''}>
	{@render children()}
</div>
