<script lang="ts">
    import { page } from "$app/state";
    import somethingWrong from "$lib/assets/something-wrong.svg";
</script>

{#if page.error}
    <div class="flex items-center flex-col py-20">
        <img src={somethingWrong} alt="" class="size-64" />
        <p class="error-title">
            {page.status}!
        </p>

        <a href="/" class="btn primary mt-5">Go Home</a>
    </div>
{/if}

<style>
    @reference "tailwindcss";

    .error-title {
        @apply text-7xl font-bold mt-4 bg-linear-to-r/oklch from-purple-600 to-indigo-700 bg-clip-text text-transparent;
    }
</style>
