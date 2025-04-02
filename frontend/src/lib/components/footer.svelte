<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLElement;
	const { observe } = $props();

	onMount(() => {
		const cleanup = observe(container);

		return cleanup;
	});
</script>

<footer class="flex flex-col items-center justify-center p-8" id="footer" bind:this={container}>
	<div class="flex flex-row items-center justify-center gap-2">
		<a href="https://instagram.com/fuadmahmudi" rel="no-referrer" target="_blank">Instagram</a>
		<a href="https://www.linkedin.com/in/fuadmahmud/" rel="no-referrer" target="_blank">LinkedIn</a>
		<a href="https://github.com/fuadmahmud" rel="no-referrer" target="_blank">Github</a>
	</div>
	<span class="w-max"
		>Design inspired by <a
			class="underline"
			href="https://dribbble.com/shots/24455330-Portofolio-Landing-Page"
			rel="no-referrer"
			target="_blank">Dribbble</a
		></span
	>
</footer>
