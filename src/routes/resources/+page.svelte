<script lang="ts">
    import FilterBar, { type FilterOptions } from "./filterbar.svelte";
    import ResourceList from "./resourcelist.svelte";
    import type { Resource } from "$lib/types";

    let isFilterBarVisible = $state(false);

    let currentFilterOption: FilterOptions = $state({ level: "", type: "" });
    let { data }: { data: { resources: Resource[] } } = $props();
</script>

<main class="px-4 py-8 flex gap-4 xl:mt-20 xl:px-12">
    <FilterBar
        isVisible={isFilterBarVisible}
        resources={data.resources}
        bind:filterOptions={currentFilterOptions}
    />
    <ResourceList
        bind:filterBarVisible={isFilterBarVisible}
        resources={data.resources}
    />
</main>
