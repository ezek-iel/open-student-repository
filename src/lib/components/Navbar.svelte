<script lang="ts">
    import logoFull from "$lib/assets/logo-full.svg";
    import logoShort from "$lib/assets/logo-short.svg";
    import Icon from "@iconify/svelte";
    import { resolve } from "$app/paths";
    import { browser } from "$app/environment";
</script>

<nav>
    <a href={resolve("/")}>
        <img src={logoFull} alt="" class="hidden lg:block h-12" />
        <img src={logoShort} alt="" class="lg:hidden h-12" />
    </a>

    <form method="GET" action="/resources" class="flex gap-2 w-6/12">
        {#if browser}
            <input
                type="text"
                name="q"
                placeholder="Search Resources"
                bind:value={
                    () => localStorage.getItem("currentSearchTerm") || "",
                    (value: string) =>
                        localStorage.setItem("currentSearchTerm", value)
                }
            />
        {/if}

        <button class="btn primary search-btn" type="submit"
            ><Icon icon="tabler:search" />Search</button
        >
    </form>

    <ul class="link-list">
        <li class="btn ghost">Browse</li>
        <li>
            <a href={resolve("/new")} class="btn primary">
                <Icon icon="tabler:plus" /> Submit Resource
            </a>
        </li>
    </ul>
</nav>

<style>
    @reference 'tailwindcss';

    nav {
        @apply flex justify-between items-center py-6 px-4 gap-4 border-b border-slate-300 md:px-8 lg:px-20 xl:px-32;
    }

    .link-list {
        @apply hidden md:flex justify-between items-center gap-6;
    }
</style>
