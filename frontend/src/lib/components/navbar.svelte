<script lang="ts">
	const { footerIntersecting = false } = $props();
	import { LayoutList, CalendarArrowUp, SquareUserRound } from 'lucide-svelte';
	import Link from '$lib/components/link.svelte';
</script>

<nav class="navbar fixed z-10 hidden h-18 w-full rounded-b-md bg-black p-4 lg:flex">
	<div class="flex w-4/5 flex-row items-center gap-4">
		<a href="/">
			<p
				class="mr-4 h-12 w-12 rounded-full bg-orange-500 text-center font-sans leading-[3rem] font-bold text-black"
			>
				Fuad
			</p>
		</a>
		<ul class="flex flex-row items-center justify-evenly gap-8 rounded-md p-2">
			<li>
				<Link href="/#experience"><span class="font-sans">Experience</span></Link>
			</li>
			<li>
				<Link href="/blogs">
					<span class="font-sans">Blog & Projects</span>
				</Link>
			</li>
			<li>
				<Link href="/#footer">
					<span class="font-sans">Contact</span>
				</Link>
			</li>
		</ul>
	</div>
</nav>

<nav
	class={[
		'fixed bottom-1 left-1/2 z-10 w-10/12 transform-[translate(-50%,-50%)] lg:hidden',
		footerIntersecting && 'invisible'
	]}
>
	<ul class="flex flex-row items-center justify-evenly rounded-md bg-orange-500 p-2">
		<li>
			<a
				class="flex flex-col items-center gap-0.5 rounded p-2 hover:bg-black/5"
				href="/#experience"
			>
				<CalendarArrowUp size={12} />
				<p class="text-xs">Experience</p>
			</a>
		</li>
		<li>
			<a class="flex flex-col items-center gap-0.5 rounded p-2 hover:bg-black/5" href="/blogs">
				<LayoutList size={12} />
				<p class="text-xs">Blog & Projects</p>
			</a>
		</li>
		<li>
			<a class="flex flex-col items-center gap-0.5 rounded p-2 hover:bg-black/5" href="/#footer">
				<SquareUserRound size={12} />
				<p class="text-xs">Contact</p>
			</a>
		</li>
	</ul>
</nav>

<style>
	.navbar {
		/* inner glow 👇 */
		box-shadow:
			inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
			/* shadow ring 👇 */ 0 0 0 1px hsla(0, 0%, 0%, 0.05),
			/* multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
			0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
			0 3.5px 6px hsla(0, 0%, 0%, 0.09);
	}
</style>
