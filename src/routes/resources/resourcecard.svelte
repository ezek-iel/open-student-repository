<script lang="ts">
    import Icon from "@iconify/svelte";
    import { resolve } from "$app/paths";
    import type { Resource } from "$lib/types";
    import { difficultyTag } from "$lib/components/Tags.svelte";

    let { resource }: { resource: Resource } = $props();

    /**
     * gets the corresponding icon from a text for the resource type section in the following mapping;
     * course -> slideshow
     * video -> Play
     * research paper -> file-text
     * @param text
     */
    function getIcon(text: string) {
        switch (text) {
            case "course":
                return "book";
            case "video":
                return "player-play-filled";
            case "research paper":
                return "file-text";
            default:
                return "";
        }
    }
</script>

<article class="course-card">
    <div class="flex items-baseline justify-between">
        <p
            class="flex uppercase text-sm tracking-wide text-slate-600 font-bold items-center gap-2"
        >
            <Icon
                icon="tabler:{getIcon(resource.type)}"
                class="size-5"
            />{resource.type}
        </p>
        {@render difficultyTag(resource.level)}
    </div>
    <p class="title">{resource.name}</p>

    <div class="flex items-center gap-4">
        <p class="flex items-center gap-2 text-slate-600 font-bold">
            <Icon icon="tabler:rosette-discount-check-filled" class="size-6" />
            <span>{resource.source}</span>
        </p>

        <p class="flex items-center text-slate-600 gap-1">
            <Icon icon="tabler:clock" />12 hours long
        </p>
    </div>
    <a
        href={resolve("/resources/[slug]", { slug: resource.id.toString() })}
        aria-label="Go to new page"
    ></a>
</article>

<style>
    @reference "tailwindcss";

    .course-card {
        @apply rounded-lg relative hover:-translate-y-2 hover:scale-102 transition space-y-6 bg-slate-100 px-6 py-8 border border-slate-300;
    }

    .course-card a {
        @apply absolute w-full h-full inset-0;
    }

    .title {
        @apply text-xl md:text-2xl font-bold text-slate-700;
    }
</style>
