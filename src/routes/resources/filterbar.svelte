<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { Resource, ResourceLevel } from "$lib/types";

    let {
        isVisible,
        resources,
        query,
    }: {
        isVisible: boolean;
        resources: Resource[];
        query: string;
    } = $props();

    function getCountofType(
        type: "course" | "video" | "research paper",
    ): number {
        const count = resources.filter((r) => r.type === type);
        return count.length;
    }

    let currentLevels: Array<ResourceLevel> = $state([]);
    let resultingUrl = $derived.by(function () {
        return `/resources?q=${query || ""}&level=` + currentLevels.join("-");
    });
</script>

<section class="filter-container" data-visible={isVisible}>
    <div>
        <p class="title">Resource Level</p>
        <ul class="level-selection mt-8">
            <li>
                Beginner <input
                    type="checkbox"
                    bind:group={currentLevels}
                    value="Beginner"
                />
            </li>
            <li>
                Intermediate <input
                    type="checkbox"
                    bind:group={currentLevels}
                    value="Intermediate"
                />
            </li>
            <li>
                Advanced <input
                    type="checkbox"
                    bind:group={currentLevels}
                    value="Advanced"
                />
            </li>
        </ul>
        <a class="btn secondary w-full mt-8" href={resultingUrl}
            ><Icon icon="tabler:reload" class="size-6" />Refresh</a
        >
    </div>

    <div>
        <p class="title">Resource Type</p>
        <ul class="type-selection mt-12">
            <li>
                <Icon icon="tabler:photo-video" class="size-6" />
                <p>Courses</p>
                <p class="tag">{getCountofType("course")}</p>
            </li>
            <li>
                <Icon icon="tabler:video" class="size-6" />
                <p>Videos</p>
                <p class="tag">{getCountofType("video")}</p>
            </li>
            <li>
                <Icon icon="tabler:file-text" class="size-6" />
                <p>Research Papers</p>
                <p class="tag">{getCountofType("research paper")}</p>
            </li>
        </ul>
    </div>
</section>

<style>
    @reference "tailwindcss";

    .title {
        @apply text-xl uppercase tracking-wide font-bold text-slate-700;
    }

    .level-selection {
        @apply grid grid-cols-2 gap-x-2 gap-y-3;

        & > li {
            @apply bg-slate-100 text-center px-4 py-2 border border-slate-400 rounded-lg relative has-checked:bg-purple-300 has-checked:border-purple-400 transition;
        }

        & input[type="checkbox"] {
            @apply absolute inset-0 block w-full appearance-none hover:cursor-pointer;
        }
    }

    .type-selection {
        @apply flex flex-col gap-8  text-slate-800;
        & > li {
            @apply flex items-center gap-4 text-lg font-bold text-slate-600;
        }
    }

    .tag {
        @apply font-bold px-2 py-px bg-slate-300 rounded-lg;
    }

    section.filter-container {
        @apply bg-slate-100 shadow-lg fixed z-2 inset-0 w-84 py-16 px-4 space-y-12 lg:sticky lg:shadow-none lg:px-0 lg:bg-transparent;
    }

    section[data-visible="false"] {
        display: none;
        transform: translateX(0px);
        transition: transform 200ms;

        @media (width >= 64rem) {
            display: block;
        }

        @starting-style {
            transform: translateX(-30px);
        }
    }
</style>
