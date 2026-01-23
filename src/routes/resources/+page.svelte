<script lang="ts">
    import FilterBar from "./filterbar.svelte";
    import ResourceList from "./resourcelist.svelte";
    import type { Resource } from "$lib/types";

    let isFilterBarVisible = $state(false);

    let { data }: { data: { resources: Resource[] } } = $props();
</script>

<main class="px-4 py-8 flex gap-4 xl:gap-12 xl:mt-20 xl:px-12">
    <FilterBar isVisible={isFilterBarVisible} />
    <ResourceList  resources={data.resources}/>
</main>
