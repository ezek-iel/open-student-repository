<script lang="ts">
    import "./layout.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import { navigating } from "$app/state";
    import Loading from "$lib/components/Loading.svelte";

    let { children } = $props();

    console.log(navigating, Boolean(navigating));
</script>

<svelte:head>
    <title>OpenStudentRepository</title>
    <link rel="icon" type="image/svg+xml" href="favicon.svg?url" />
</svelte:head>

{#if navigating.from && navigating.to}
    <Loading />
{/if}
<Navbar />
{@render children()}
