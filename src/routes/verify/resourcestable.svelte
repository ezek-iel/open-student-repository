<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { Resource } from "$lib/types";
    import { difficultyTag } from "$lib/components/Tags.svelte";

    let { resources }: { resources: Resource[] } = $props();
</script>

<main class="p-8 xl:px-32 xl:py-18 w-full lg:overflow-y-scroll">
    <p class="text-2xl font-bold text-slate-700">Review Queue</p>

    <div
        class="border rounded-lg border-slate-400 pt-6 pb-1 mt-15 overflow-x-scroll"
    >
        <table class="resources-table text-slate-700">
            <thead>
                <tr class="header">
                    <th>Title</th>
                    <th>Category</th>
                    <th>Link</th>
                    <th>Level</th>
                    <th>Source</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {#each resources as resource (resource.id)}
                    <tr>
                        <td>{resource.name}</td>
                        <td class="capitalize">{resource.type}</td>
                        <td class="link-column">
                            <a
                                href={resource.link}
                                aria-label="Link to {resource.link}"
                            ></a>{resource.link}
                            <Icon
                                icon="tabler:external-link"
                                class="text-slate-600 inline"
                            /></td
                        >
                        <td>{@render difficultyTag(resource.level)}</td>
                        <td>{resource.source}</td>
                        <td>
                            <div class="table-item-actions">
                                <form action="?/verify" method="POST">
                                    <input type="hidden" name="resourceId" value={resource.id} />
                                    <button type="submit" class="btn primary"><Icon icon="tabler:check"/> Verify</button>
                                </form>
                                    <form action="?/reject" method="POST">
                                        <input type="hidden" name="resourceId" value={resource.id}>
                                    <button type="submit" class="btn secondary"><Icon icon="tabler:x"/> Reject</button>
                                    </form>
                                <button class="icon-btn secondary">
                                    <Icon icon="tabler:pencil" class="size-4" />
                                </button>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>

<style>
    @reference "tailwindcss";

    .link-column {
        @apply relative underline;
    }

    .link-column a {
        @apply absolute inset-0 w-full h-full;
    }

    .resources-table {
        @apply text-sm md:text-lg lg:w-full overflow-x-scroll;

        th:first-child,
        td:first-child {
            @apply pl-6;
        }

        th:last-child,
        td:last-child {
            @apply py-6;
        }

        tbody > tr {
            &:not(&:last-child) {
                @apply border-b border-b-slate-400;
            }
        }

        tbody > tr > td {
            @apply pr-8 pt-8 pb-4;
        }
    }

    .resources-table .header {
        @apply text-left text-slate-700 uppercase tracking-wide;
    }

    .table-item-actions {
        @apply flex items-center gap-2;
    }
</style>
