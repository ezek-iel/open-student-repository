<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div class="container">
    <div class="bg-icon">
        <Icon icon="tabler:alert-triangle-filled" class="size-35 rotate-9" />
    </div>
    <h2 class="title">Found a broken link?</h2>
    <p class="text-slate-200">
        Help the community keep our repository clean and updated
    </p>
    <button class="btn bg-white text-purple-700 hover:bg-slate-200">Report Issue</button>
</div>

<style>
    @reference "tailwindcss";

    .title {
        @apply text-xl font-bold;
    }

    .container {
        @apply bg-purple-600 text-white p-8 rounded-lg space-y-4 relative z-2;
    }

    .bg-icon {
        @apply absolute isolate z-1 opacity-20 bottom-0 right-6;
    }
</style>
