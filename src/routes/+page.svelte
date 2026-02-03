<script lang="ts">
    import searchBackground from "$lib/assets/search-bg.png";
    import Icon from "@iconify/svelte";
    import Features from "./features.svelte";
    import { browser } from "$app/environment";
</script>

<div
    class="relative flex flex-col items-center px-6 py-40 gap-6 my-4 md:my-12 lg:mx-8 rounded-3xl lg:gap-10 xl:mx-60 xl:my-20 xl:gap-14"
>
    <h1
        class="text-slate-100 text-3xl md:text-4xl text-center font-bold xl:text-5xl"
    >
        Find the resources you need to succeed
    </h1>
    <div class="w-full">
        <form
            action="/resources"
            method="GET"
            class=" md:w-7/12 relative mx-auto flex"
        >
            {#if browser}
                <input
                    type="text"
                    placeholder="Type a topic, course, or resource…"
                    name="q"
                    class="lg:text-2xl md:w-11/12 h-16"
                    bind:value={
                        () => localStorage.getItem("currentSearchTerm") || "",
                        (value: string) =>
                            localStorage.setItem("currentSearchTerm", value)
                    }
                />
            {/if}
            <button
                class="btn primary absolute self-center right-2"
                type="submit"
                aria-label="submit"
            >
                <Icon icon="tabler:search" /> Go
            </button>
        </form>
    </div>
    <img src={searchBackground} alt="" class="img-background md:rounded-3xl" />
</div>

<Features />

<style>
    @reference "tailwindcss";

    .img-background {
        @apply absolute inset-0 -z-1 h-full w-full object-cover;
    }
</style>
