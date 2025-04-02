<script lang="ts">
	const { children, className = '', ...props } = $props();
</script>

<a
	class={['hover-underline flex w-max flex-row items-center gap-1 font-serif', className]}
	{...props}
>
	{@render children?.()}
</a>

<style>
	.hover-underline {
		position: relative;
	}
	.hover-underline::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		transform: scaleX(0);
		transform-origin: bottom left;
		bottom: 0;
		left: 0;
		transition: transform 0.25s ease-out;
		background-color: oklch(0.623 0.214 259.815);
	}
	.hover-underline:hover::after {
		transform: scaleX(1);
	}
</style>
