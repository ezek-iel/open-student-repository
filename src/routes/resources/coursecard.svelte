<script lang="ts">
    import Icon from "@iconify/svelte";
    import { resolve } from "$app/paths";
    import type { Resource } from "$lib/types";

    let { resource }: { resource: Resource } = $props();

    /**
     * Trims a string by 50 characters
     * @param text
     */
    function trimText(text: string, allowableLength: number): string {
        if (text.length > allowableLength) return text.substring(0, allowableLength);
        return text;
    }
</script>

<article class="course-card">
    <div class="card-top relative">
        <p
            class="flex gap-2 items-center bg-white absolute px-4 py-2 rounded-full text-purple-700 font-bold mt-4 ml-4 shadow-sm"
        >
            <Icon icon="tabler:player-play-filled" />{resource.type}
        </p>
        <img
            src="https://random.imagecdn.app/v1/image?width=300&height=300.jpg"
            class="object-cover rounded-t-lg h-72 w-full shadow-sm"
            alt=""
        />
    </div>
    <div class="card-bottom">
        <p class="title">{resource.name}</p>
        <div class="flex items-center gap-3 font-bold">
            <p class="difficulty beginner">{resource.level}</p>
            <p class="text-slate-600 flex items-center gap-1">
                <Icon icon="tabler:clock" /> 12 hours total
            </p>
        </div>
        <p class="leading-8 text-lg text-slate-700">
            {trimText(resource.details, 100)}...
        </p>
    </div>

    <a href={resolve("/resources/[slug]", {slug: resource.id.toString()})} aria-label="Go to new page"></a>
</article>

<style>
    @reference "tailwindcss";

    .course-card {
        @apply rounded-lg relative hover:-translate-y-2 hover:scale-102 transition;
    }

    .course-card a {
        @apply absolute w-full h-full inset-0;
    }

    .card-bottom {
        @apply bg-slate-50 p-8 space-y-6 border border-slate-300 rounded-b-lg;
    }

    .title {
        @apply text-xl md:text-2xl font-bold text-slate-700;
    }

    .difficulty {
        @apply px-4 py-1 w-fit rounded-full font-bold;
    }

    .beginner {
        @apply bg-green-200 text-green-800 border border-green-400;
    }

    .type {
        @apply bg-white w-fit px-4 py-px rounded-full;
    }
</style>
