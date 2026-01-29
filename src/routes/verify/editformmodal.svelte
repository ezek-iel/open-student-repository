<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { Resource } from "$lib/types";
    let editModal: HTMLDialogElement;

    let {
        resourceId,
        modalOpen = $bindable(false),
    }: { resourceId: number; modalOpen: boolean } = $props();

    let resourceInformation = $derived.by(async function () {
        const response = await fetch(`/api/resources/${resourceId}`);
        const data = JSON.parse(await response.text()).resource as Resource;
        return data;
    });

    $inspect(resourceInformation);

    $effect(function () {
        if (modalOpen) editModal.showModal();
        else editModal.close();
    });
</script>

<dialog bind:this={editModal}>
    <div class="dialog-content">
        <div>
            <div class="flex justify-end">
                <button
                    class="icon-btn ghost"
                    onclick={() => {
                        modalOpen = false;
                    }}
                >
                    <Icon icon="tabler:x" class="size-6" />
                </button>
            </div>
            <div>
                <div>
                    <p class="text-slate-700 text-3xl font-bold">
                        Edit Resource
                    </p>
                    <p class="text-slate-700 text-lg">
                        Make an edit to the resource
                    </p>
                </div>
                <button class="btn secondary text-sm mt-4"
                    ><Icon icon="tabler:reload" class="size-6" /> Reload Information</button
                >
            </div>
        </div>

        {#await resourceInformation then data}
            <!-- This form keeps sending get requests instead of post requests. -->
            <form action="?/replace" method="post" class="space-y-8 py-10">
                <input type="hidden" name="resourceId" value={data.id} />
                <label>
                    <span>Name</span>
                    <input type="text" value={data.name} name="name" />
                </label>

                <label>
                    <span>Link</span>
                    <input type="text" value={data.link} name="link" />
                </label>

                <label>
                    <span>Category</span>
                    <select name="category">
                        {#each ["Computing", "Natural Sciences", "Mathematics", "Government and Politics", "Engineering", "Arts and Communication"] as category, index (index)}
                            {@const currentCategory = data.category}
                            <option
                                value={category}
                                selected={currentCategory === category}
                                >{category}</option
                            >
                        {/each}
                    </select>
                </label>

                <label>
                    <span>Type</span>
                    <select name="type">
                        {#each ["Video", "Course", "Textbook", "Research"] as materialType, index (index)}
                            {@const currentMaterialType = data.type}
                            <option
                                value={materialType}
                                selected={materialType === currentMaterialType}
                                >{materialType}</option
                            >
                        {/each}
                    </select>
                </label>

                <label>
                    <span>Level</span>
                    <select name="level">
                        {#each ["Beginner", "Intermediate", "Advanced"] as level, index (index)}
                            {@const currentLevel = data.level}
                            <option
                                value={level}
                                selected={level === currentLevel}
                                >{level}</option
                            >
                        {/each}
                    </select>
                </label>

                <label>
                    <span>Source</span>
                    <input type="text" value={data.source} name="source" />
                </label>

                <label>
                    <span>Details</span>
                    <textarea name="details">{data.details}</textarea>
                </label>

                <input type="submit" value="Submit" class="btn primary" />
            </form>
        {/await}
    </div>
</dialog>

<style>
    @reference "tailwindcss";

    dialog {
        /* Remove UA margins */
        margin: 0;

        /* Force fixed positioning relative to viewport */
        position: fixed;

        /* Center with transforms */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @apply py-6 lg:py-10 lg:px-14 px-10 rounded-lg backdrop:backdrop-blur-lg border border-slate-100;
    }

    .dialog-content {
        @apply space-y-10;
    }

    label {
        @apply block;
    }

    label > * {
        @apply w-md block;
    }

    label > span {
        @apply text-slate-600;
    }
</style>
