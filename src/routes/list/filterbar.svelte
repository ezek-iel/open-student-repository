<script lang="ts">
    import Icon from "@iconify/svelte";

    let { isVisible }: { isVisible: boolean } = $props();
</script>

<section class="filter-container" data-visible={isVisible}>
    <div>
        <p class="title">Resource Level</p>
        <ul class="level-selection mt-8">
            <li>
                Beginner <input type="checkbox" />
            </li>
            <li>Intermediate <input type="checkbox" /></li>
            <li>Graduate <input type="checkbox" /></li>
            <li>Advanced <input type="checkbox" /></li>
        </ul>
        <button class="btn secondary w-full mt-8"
            ><Icon icon="tabler:reload" class="size-6" />Refresh</button
        >
    </div>

    <div>
        <p class="title">Resource Type</p>
        <ul class="type-selection mt-12">
            <li>
                <Icon icon="tabler:book" class="size-6" />
                <p>Textbooks</p>
                <p class="tag">200</p>
            </li>
            <li>
                <Icon icon="tabler:video" class="size-6" />
                <p>Video Courses</p>
                <p class="tag">13</p>
            </li>
            <li>
                <Icon icon="tabler:slides" class="size-6" />
                <p>Slides</p>
                <p class="tag">510</p>
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
        @apply space-y-16 lg:px-4 w-92 lg:block  bg-slate-100 fixed z-1 sm:h-full sm:inset-0 sm:pt-20 sm:px-8 sm:shadow-lg lg:sticky lg:bg-[initial] lg:shadow-none;
    }

    section[data-visible="false"] {
        display: none;
        transform: translateX(0px);
        transition: transform 75ms;

        @media (width >= 64rem) {
            display: block;
        }

        @starting-style {
            transform: translateX(-30px);
        }
    }
</style>
