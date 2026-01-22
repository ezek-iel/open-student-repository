<script lang="ts">
    import logo from "$lib/assets/logo.svg";
    import Icon from "@iconify/svelte";
    import {resolve} from "$app/paths";
</script>

<nav>
    <img src={logo} alt="" class="h-7" />

    <div class="relative w-6/12">
        <input type="text" placeholder="Search Resources" />
    </div>

    <ul class="link-list">
        <li class="btn ghost">Browse</li>
        <li>
            <a href={resolve("/")} class="btn primary">
                <Icon icon="tabler:plus" /> Submit Resource
            </a>
        </li>
    </ul>
</nav>

<style>
    @reference 'tailwindcss';

    nav {
        @apply flex justify-between items-center py-6 px-4 gap-4 border-b border-slate-300 md:px-8 lg:px-20 xl:px-40;
    }

    .link-list {
        @apply hidden md:flex justify-between items-center gap-6;
    }
</style>
