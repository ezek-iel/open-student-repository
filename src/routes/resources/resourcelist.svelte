<script lang="ts">
    import Icon from "@iconify/svelte";
    import ResourceCard from "./resourcecard.svelte";
    import type { Resource } from "$lib/types";
    import emptySearch from "$lib/assets/empty-search.svg";

    let {
        resources,
        filterBarVisible = $bindable(false),
    }: { resources: Resource[]; filterBarVisible: boolean } = $props();
</script>

<section class="w-full md:px-8 xl:px-12">
    <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Featured Resources</h1>
        <div class="flex items-center gap-2">
            <button class="btn ghost text-slate-700"
                >Showing 1,234 items <Icon icon="tabler:chevron-down" /></button
            >
            <button
                class="icon-btn secondary lg:hidden"
                onclick={() => {
                    filterBarVisible = !filterBarVisible;
                }}
            >
                <Icon icon="tabler:filter" />
            </button>
        </div>
    </div>

    {#if resources.length == 0}
        <div class=" flex items-center flex-col py-20 text-slate-700">
            <img src={emptySearch} alt="" class="size-68"/>
            <p class="font-bold text-3xl">No results found</p>
            <p class="text-xl mt-2 w-11/12 text-center">
                Try adjusting your search to find what you are looking for
            </p>
        </div>
    {:else}
        <div class="cards-container mt-8 md:mt-12">
            {#each resources as resource, index (index)}
                <ResourceCard {resource} />
            {/each}
        </div>
    {/if}
</section>

<style>
    @reference "tailwindcss";

    .cards-container {
        @apply grid grid-cols-1 md:grid-cols-2 lg:gap-x-32;
        row-gap: 4rem;
        column-gap: 2rem;

        @media (width >= 1830px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
