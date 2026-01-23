<script lang="ts">
    import Icon from "@iconify/svelte";
    import { resolve } from "$app/paths";
    import type { Resource } from "$lib/types";

    let { course }: { course: Resource } = $props();
</script>

<section
    class="lg:bg-slate-100 mt-4 md:px-8 py-12 rounded-lg lg:border border-slate-300 space-y-8"
>
    <div class="title">
        <ul class="tags">
            <li
                class="bg-purple-200 text-purple-800 border-purple-300 uppercase tracking-wide"
            >
                {course.type}
            </li>
            <li
                class="bg-green-200 border border-green-300 text-green-800 uppercase tracking-wide"
            >
                Admin Verified
            </li>
        </ul>
        <h1 class="text-4xl font-bold text-balance">
            {course.name}
        </h1>
        <div class="flex gap-2 flex-wrap">
            <p class="resource-info">
                <Icon icon="tabler:school" />
                {course.source}
            </p>
            <p class="resource-info ml-6">
                <Icon icon="tabler:calendar-event-filled" />
                {course.date}
            </p>
        </div>

        <div class="flex items-center gap-4 flex-wrap">
            <button class="btn primary">
                <Icon icon="tabler:external-link" /> Visit Source
            </button>
            <a href={resolve("/list")} class="btn secondary">
                <Icon icon="tabler:bookmark-filled" /> Save to Favourites
            </a>
        </div>
    </div>

    <hr class="text-slate-400" />
    <div class="content">
        <p class="font-bold md:text-xl">About this resource</p>
        <p class="text-slate-800 leading-8 md:text-lg">
            {course.details}
        </p>

        <ul class="tags *:text-slate-700 *:bg-slate-300">
            <li>{course.category}</li>
        </ul>
    </div>
</section>

<style>
    @reference "tailwindcss";

    .resource-info {
        @apply inline-flex gap-2 items-center text-slate-700;
    }

    .tags {
        @apply flex flex-wrap gap-2;
        & > li {
            @apply font-bold px-4 py-1 rounded-full;
        }
    }

    .title {
        @apply space-y-6;
    }

    .content {
        @apply space-y-6;
    }
</style>
