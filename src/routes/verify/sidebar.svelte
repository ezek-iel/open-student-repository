<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<aside class="sidebar">
    <menu class="sidebar-list">
        <li>
            <Icon icon="tabler:clock" />Pending
            <a href="/verify/pending" aria-label="Pending Resources for Review"
            ></a>
        </li>
        <li>
            <Icon icon="tabler:circle-check-filled" />Reviewed
            <a href="/verify/reviewed" aria-label="Verified Resources"></a>
        </li>
        <li>
            <Icon icon="tabler:circle-x-filled" />Rejected
            <a href="/verify/rejected" aria-label="Rejected Resources"></a>
        </li>
    </menu>

    <hr class="text-slate-400" />
    <p class="text-slate-500 font-bold tracking-wide uppercase">
        Filter Category
    </p>
    <menu class="sidebar-list">
        <li>
            <Icon icon="tabler:photo-video" />Courses
            <a
                href="/verify?category=course"
                aria-label="Filter Resources by Course"
            ></a>
        </li>
        <li>
            <Icon icon="tabler:player-play-filled" />Videos
            <a
                href="/verify?category=video"
                aria-label="Filter Resources by Video"
            ></a>
        </li>
        <li>
            <Icon icon="tabler:file-text" />Research

            <a
                href={encodeURI("/verify?category=research paper")}
                aria-label="Filter Resources by Research Paper"
            ></a>
        </li>
        <li><Icon icon="tabler:book-2" />Textbooks
            <a href="/verify?category=textbook" aria-label="Filter Resources by Textbook"></a>
        </li>
    </menu>
</aside>

<style>
    @reference "tailwindcss";

    .sidebar {
        @apply hidden w-xs border-r border-r-slate-400 h-full lg:flex flex-col gap-8 p-4;
    }

    .sidebar-list {
        @apply flex flex-col gap-4;
        & > li {
            @apply px-4 py-2 font-bold text-slate-700 rounded-lg text-lg flex items-center gap-2 hover:bg-slate-300 transition relative;

            & > a {
                @apply absolute w-full h-full inset-0;
            }
        }

        & > li.highlighted {
            @apply bg-purple-300 text-purple-800 border border-purple-400;
        }
    }
</style>
