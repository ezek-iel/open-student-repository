<script lang="ts">
    import ResourcesTable from "./resourcestable.svelte";

    let { data } = $props();
</script>

<ResourcesTable resources={data.resources} />
