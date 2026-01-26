<script lang="ts">
    import SideBar from "./sidebar.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div class="flex lg:h-screen">
    <SideBar />

    {@render children()}
</div>
