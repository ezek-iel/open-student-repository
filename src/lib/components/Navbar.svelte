<script lang="ts">
    import logo from "$lib/assets/logo.svg";
    import Icon from "@iconify/svelte";
</script>

<nav>
    <img src={logo} alt="" class="h-7" />

    <input type="text" placeholder="Search Resources" />

    <ul class="link-list">
        <li>Browse</li>
        <li>
            <a href="/" class="button button-primary">
                <Icon icon="tabler:plus" /> Submit a resource
            </a>
        </li>
    </ul>
</nav>

<style>
    @reference 'tailwindcss';
    
    nav {
        @apply flex justify-between items-center py-6 px-4 gap-4 border-b border-slate-300;
    }
    
    .link-list {
        @apply hidden md:flex justify-between items-center;
    }
</style>