<script lang="ts">
	import MyImg from '$lib/assets/me.webp';
	import { ArrowRight, Asterisk } from 'lucide-svelte';
	import Link from '$lib/components/link.svelte';
	import './index.scss';
	import { EXPERIENCES } from '$lib/constants';
	import AnimateScroll from '$lib/components/animate-scroll.svelte';
</script>

<section class="flex flex-col gap-2 p-4 md:p-8 lg:pt-24">
	<div class="flex flex-col gap-2 md:flex-row lg:justify-between lg:gap-6">
		<h1 class="mb-3 text-4xl font-bold lg:mb-0 lg:max-w-4/12">
			HELLO, MY NAME IS <span class="font-serif font-medium">FUAD MAHMUD IBRAHIM</span>
			<span class="typing-animate bg-orange-500"></span> FROM INDONESIA.
		</h1>
		<div class="flex flex-col gap-3 lg:items-end">
			<AnimateScroll class="shadow-pop-bl w-fit" threshold={1}>
				<img class="md:max-w-2xs lg:max-w-2xs" src={MyImg} alt="My Icon" />
			</AnimateScroll>
			<p class="mb-3 lg:mb-0 lg:max-w-1/2 lg:text-right">
				More of my experience, writes and some projects in the summary. Get in touch or just connect
				with me in LinkedIn.
			</p>
		</div>
	</div>
	<Link href="https://www.linkedin.com/in/fuadmahmud/" rel="no-referrer" target="_blank">VISIT LINKEDIN <ArrowRight size={16} /></Link>
</section>
<AnimateScroll once={true} class="scale-in-tl" threshold={0.2}>
	<section class="p-4 md:p-8 lg:flex lg:flex-row lg:items-center lg:gap-4">
		<h2 class="mb-4 text-3xl font-bold lg:mb-0 lg:w-2/6">
			ABOUT MY <span class="font-serif font-light">WORK</span>
		</h2>
		<div class="flex flex-col">
			<p>
				As being frontend engineer for more than 5 years and mostly working with web development and
				banking background my priorites is being set and ordered into this:
			</p>
			<br />
			<ol class="ml-4 list-decimal font-serif">
				<li>Security</li>
				<li>Perfomance & Evaluation</li>
				<li>User Experience (Attention to details & pixel perfect)</li>
			</ol>
			<br />
			<p>
				Other than that I didn't metion doesn't mean it never been a consideration for me. Like
				clean code, I always love to read a code that explain itself, testing is also important in
				my opinion but it sucks when you only write it for just the coverage sake 😶‍🌫️.
			</p>
			<Link className="mt-4" href="/projects">
				READ MORE STORIES <ArrowRight size={16} />
			</Link>
		</div>
	</section>
</AnimateScroll>
<section class="flex flex-col p-4 md:p-8 lg:flex-row lg:items-start lg:gap-4" id="experience">
	<h2 class="text-3xl">PROFESSIONAL <span class="font-serif">EXPERIENCE</span></h2>
	<ul class="overflow-hidden">
		{#each EXPERIENCES as exp, i (exp.companyName)}
			<AnimateScroll class="slide-right" once={true} threshold={0.2}>
				<li class={['flex flex-col gap-4 border-b border-gray-300 py-8', i === 0 ? 'lg:pt-0' : '']}>
					<div class="flex flex-row items-center text-3xl">
						<Asterisk />
						<p class="font-serif">
							{new Date(exp.startDate).getUTCFullYear()} - {exp.endDate
								? new Date(exp.endDate).getUTCFullYear()
								: 'Now'}
						</p>
					</div>
					<p class="text-lg">{exp.title} at {exp.companyName}</p>
					<p class="text-gray-500">{exp.description}</p>
					{#if exp.link}
						<Link href={exp.link} target="_blank">SEE PORTOFOLIO <ArrowRight /></Link>
					{/if}
				</li>
			</AnimateScroll>
		{/each}
	</ul>
</section>
<section class="flex flex-col items-center p-4 md:p-8">
	<h2 class="text-center text-3xl font-bold">
		I ALWAYS <span class="font-serif font-light">OPEN</span> FOR ANY
		<span class="font-serif font-light">COLLABORATION</span>
		OR BRING YOUR IDEAS INTO <span class="font-serif font-light">REALITY</span>, SO PLEASE CONTACT
		ME
	</h2>
	<a
		href="mailto:fuadmahmud@outlook.co.id"
		class="sans-serif mt-4 w-max rounded-3xl bg-orange-500 px-4 py-2 font-semibold text-black hover:border-orange-500 hover:bg-black hover:text-orange-500 hover:outline"
		>CONTACT ME</a
	>
</section>

<style>
	:global(.shadow-pop-bl) {
		-webkit-animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
		animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
	}

	:global(.scale-in-tl) {
		-webkit-animation: scale-in-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: scale-in-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	:global(.slide-right) {
		-webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
		animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
	}

	@keyframes scale-in-tl {
		0% {
			-webkit-transform: scale(0);
			transform: scale(0);
			-webkit-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			opacity: 1;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: 0% 0%;
			transform-origin: 0% 0%;
			opacity: 1;
		}
	}

	@keyframes shadow-pop-bl {
		0% {
			-webkit-box-shadow:
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e;
			box-shadow:
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e,
				0 0 #3e3e3e;
			-webkit-transform: translateX(0) translateY(0);
			transform: translateX(0) translateY(0);
		}
		100% {
			-webkit-box-shadow:
				-1px 1px #3e3e3e,
				-2px 2px #3e3e3e,
				-3px 3px #3e3e3e,
				-4px 4px #3e3e3e,
				-5px 5px #3e3e3e,
				-6px 6px #3e3e3e,
				-7px 7px #3e3e3e,
				-8px 8px #3e3e3e;
			box-shadow:
				-1px 1px #3e3e3e,
				-2px 2px #3e3e3e,
				-3px 3px #3e3e3e,
				-4px 4px #3e3e3e,
				-5px 5px #3e3e3e,
				-6px 6px #3e3e3e,
				-7px 7px #3e3e3e,
				-8px 8px #3e3e3e;
			-webkit-transform: translateX(8px) translateY(-8px);
			transform: translateX(8px) translateY(-8px);
		}
	}

	@keyframes slide-right {
		0% {
			-webkit-transform: translateX(-100px);
			transform: translateX(-100px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
</style>
