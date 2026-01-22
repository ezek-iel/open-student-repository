<script lang="ts">
    import FilterBar from "./filterbar.svelte";
    import ResourceList from "./resourcelist.svelte";
    let isFilterBarVisible = $state(false);
</script>

<main class="px-4 py-8 flex gap-4 xl:gap-12 xl:mt-20 xl:px-12">
    <FilterBar isVisible={isFilterBarVisible} />

    <ResourceList/>
</main>
