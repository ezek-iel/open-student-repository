<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { Resource } from "$lib/types";
    import { difficultyTag } from "$lib/components/Tags.svelte";
    import EditFormModal from "./editformmodal.svelte";

    let {
        resources,
        tableState,
    }: {
        resources: Resource[];
        tableState?: "Verified" | "Rejected" | "Pending";
    } = $props();

    let verifyModal: HTMLDialogElement;
    let currentResourceId: number | undefined = $state();

    let editModalOpen = $state(false);

    let currentForm = $state<HTMLFormElement>();

    function onVerifyFormSubmit(event: SubmitEvent) {
        event.preventDefault();
        currentForm = event.currentTarget as HTMLFormElement;
        verifyModal.showModal();
    }

    function onRejectFormSubmit(event: SubmitEvent) {
        event.preventDefault();
        currentForm = event.currentTarget as HTMLFormElement;
        verifyModal.showModal();
    }
</script>

{#snippet verifyPostForm(resourceId: number)}
    <form action="?/verify" method="POST" onsubmit={onVerifyFormSubmit}>
        <input type="hidden" name="resourceId" value={resourceId} />
        <button type="submit" class="btn primary"
            ><Icon icon="tabler:chehguck" /> Verify</button
        >
    </form>
{/snippet}

{#snippet rejectPostForm(resourceId: number)}
    <form action="?/reject" method="POST" onsubmit={onRejectFormSubmit}>
        <input type="hidden" name="resourceId" value={resourceId} />
        <button type="submit" class="btn secondary"
            ><Icon icon="tabler:x" /> Reject</button
        >
    </form>
{/snippet}

{#snippet editButton(resourceId: number)}
    <button
        aria-label="Edit Button"
        class="icon-btn secondary"
        onclick={() => {
            currentResourceId = resourceId;
            editModalOpen = true;
        }}
    >
        <Icon icon="tabler:pencil" class="size-4" />
    </button>
{/snippet}

{#if currentResourceId}
    <EditFormModal
        resourceId={currentResourceId}
        bind:modalOpen={editModalOpen}
    />
{/if}

<dialog bind:this={verifyModal}>
    <div class="dialog-content">
        <div class="space-y-4">
            <div class="flex justify-center">
                <Icon
                    icon="tabler:alert-circle"
                    class="size-14 text-purple-700"
                />
            </div>
            <div class="text-center">
                <p class="text-2xl lg:text-3xl text-slate-700 font-bold">
                    Are you sure you want to do this?
                </p>
                <p class="text-slate-700 lg:text-lg lg:mt-2">
                    This action cannot be undone
                </p>
            </div>
        </div>
        <div class="flex items-center justify-end gap-4">
            <button
                class="btn ghost"
                onclick={() => {
                    verifyModal.close();
                }}>Not so sure</button
            >
            <button
                class="btn primary"
                onclick={() => {
                    if (currentForm) {
                        currentForm.submit();
                        verifyModal.close();
                    }
                }}>Yup, I am sure</button
            >
        </div>
    </div>
</dialog>

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
                        <td class="capitalize">{resource.category}</td>
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
                                {#if tableState === "Pending"}
                                    {@render verifyPostForm(resource.id)}
                                    {@render rejectPostForm(resource.id)}
                                    {@render editButton(resource.id)}
                                {/if}

                                {#if tableState === "Verified"}
                                    {@render editButton(resource.id)}
                                {/if}

                                {#if tableState === "Rejected"}
                                    {@render verifyPostForm(resource.id)}
                                {/if}
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

    dialog {
        position: fixed; /* stays in place */
        top: 50%; /* halfway down */
        left: 50%; /* halfway across */
        transform: translate(-50%, -50%); /* perfect centering */
        margin: 0; /* avoid default margins */
        z-index: 1001;
        max-width: 500px;
        width: 90%;
        
        @apply rounded-xl;
    }
    
    dialog::backdrop {
        @apply backdrop-blur-2xl;
    }

    .dialog-content {
        @apply p-8 space-y-8;
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
