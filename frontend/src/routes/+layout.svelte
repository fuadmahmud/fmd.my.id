<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { IntersectionObserverImpl } from '$lib/utils/IntersectionObserver.svelte';

	let { children } = $props();
	const { isIntersecting: footerIntersecting, observe } = IntersectionObserverImpl();
</script>

<svelte:head>
	<title>Fuad Mahmud Ibrahim | Software Engineer</title>
</svelte:head>
<Navbar footerIntersecting={$footerIntersecting} />
{@render children()}
<Footer {observe} />
