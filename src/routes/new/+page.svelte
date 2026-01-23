<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<section class="space-y-16 px-4 py-16">
    <div class="space-y-4 text-center">
        <p class="text-2xl text-slate-800 font-bold lg:text-3xl">
            Submit New Resource
        </p>

        <p class="text-lg text-slate-800 md:w-9/12 mx-auto lg:text-xl">
            Help your peers by sharing verified academic tools, discounts, and
            high-quality learning materials.
        </p>
    </div>

    <form class="resource-form">
        <fieldset>
            <p class="title">General Information</p>

            <div class="flex flex-col gap-10 lg:flex-row *:w-full">
                <label>
                    <span>Resource Title</span>
                    <input
                        type="text"
                        placeholder="e.g. Notion Education Plus"
                    />
                </label>

                <label>
                    <span>Resource URL</span>
                    <input
                        type="text"
                        placeholder="https://notion.so/students"
                    />
                </label>
            </div>

            <div class="flex flex-col gap-10 lg:flex-row *:w-full">
                <label>
                    <span>Category</span>
                    <select>
                        <option>Computer Science</option>
                        <option>Biology</option>
                        <option>Economics</option>
                        <option>Mathematics</option>
                        <option>Law</option>
                    </select>
                </label>

                <label>
                    <span>Difficulty</span>
                    <select>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                    </select>
                </label>

                <label>
                    <span>Department</span>
                    <select>
                        <option>STEM</option>
                        <option>Computing</option>
                        <option>Arts</option>
                        <option>Communication</option>
                    </select>
                </label>
            </div>
        </fieldset>

        <fieldset>
            <p class="title">Why is this valuable?</p>

            <label id="details">
                <p class="text-slate-500 tracking-wide mb-2">
                    Explain how this helps students, include specific benefits
                    like "free for .edu emails" or "includes pro features for
                    research"
                </p>

                <textarea
                    placeholder="Tell the community why they should check it out"
                    rows="8"
                ></textarea>
            </label>
        </fieldset>

        <div>
            <hr class="text-slate-400" />

            <div
                class="flex flex-col lg:flex-row lg:items-center justify-between mt-8 gap-6"
            >
                <div
                    class="flex items-start gap-2 text-slate-600 text-sm md:w-8/12"
                >
                    <Icon
                        icon="tabler:alert-circle-filled"
                        class="size-12 text-amber-500"
                    />
                    <p>
                        Submissions are reviewed by our volunteer team within
                        24-48 hours before appearing on the public repository
                    </p>
                </div>
                <button class="btn primary">Submit Resource</button>
            </div>
        </div>
    </form>

    <div
        class="mb-20 bg-purple-200 p-8 rounded-lg border border-purple-300 flex items-start gap-4 max-w-xl"
    >
        <div>
            <div class="text-purple-700 bg-purple-300 p-2 w-fit rounded-full">
                <Icon icon="tabler:help-circle-filled" class="size-10" />
            </div>
        </div>
        <div>
            <p class="text-xl font-bold text-slate-800">
                Need help with categories
            </p>
            <p class="text-lg text-slate-700">
                Check out our submisson guidelines for more info on how we
                organize resources
            </p>
        </div>
    </div>
</section>

<style>
    @reference "tailwindcss";

    section {
        @apply md:max-w-2xl mx-auto md:pt-20 lg:max-w-4xl xl:max-w-5xl;
    }

    .resource-form {
        @apply lg:p-12 bg-slate-100 p-8 space-y-16 rounded-lg xl:rounded-xl border border-slate-300 xl:shadow-lg;

        & fieldset {
            @apply space-y-10;
        }

        & fieldset > p.title {
            @apply text-xl text-slate-800 font-bold lg:text-2xl;
        }

        & label {
            @apply flex flex-col gap-4;

            span {
                @apply text-slate-400 uppercase tracking-wide font-bold;
            }
        }
    }
</style>
