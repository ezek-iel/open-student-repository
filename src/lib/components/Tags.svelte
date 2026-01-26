<script module>
    export { difficultyTag };
</script>

<script lang=ts>
    
</script>


{#snippet difficultyTag(difficulty: string)}
    <p class={["difficulty", difficulty.toLocaleLowerCase()]}>
        {difficulty}
    </p>
{/snippet}

<style>
    @reference "tailwindcss";

    .difficulty {
        @apply px-4 py-1 w-fit rounded-full font-bold border;
    }

    .beginner {
        @apply bg-green-100 text-green-600 border-green-300;
    }

    .intermediate {
        @apply bg-amber-100 text-amber-600 border-amber-300;
    }

    .advanced {
        @apply bg-rose-100 text-rose-600 border-rose-300;
    }
</style>
