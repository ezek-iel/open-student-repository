<script lang="ts">
    import searchBackground from "$lib/assets/search-bg.png";
</script>

<div
    class="relative flex flex-col items-center py-40 gap-6 my-4  md:my-12 lg:mx-8 rounded-3xl lg:gap-10 xl:mx-84 xl:my-20 xl:gap-14"
>
    <h1
        class="text-slate-100 text-3xl md:text-4xl text-center font-bold lg:text-5xl xl:text-6xl"
    >
        What are you searching for?
    </h1>
    <div class="w-full">
        <form
            action="/resources"
            method="GET"
            class=" md:w-7/12 relative mx-auto"
        >
            <input
                type="text"
                placeholder="Search for a resource"
                name="q"
                class="lg:text-2xl md:w-11/12"
            />
            <button
                class="icon-btn primary absolute right-2 top-1.25 lg:top-2"
                type="submit"
                aria-label="submit"
            ></button>
        </form>
    </div>
    <img src={searchBackground} alt="" class="img-background md:rounded-3xl" />
</div>

<style>
    @reference "tailwindcss";

    .img-background {
        @apply absolute inset-0 -z-1 h-full w-full object-cover;
    }
</style>
