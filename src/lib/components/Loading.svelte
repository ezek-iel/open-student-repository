<div class="overlay">
    <p class="text-6xl font-bold gradient-text">Loading....</p>
</div>

<style>
    @reference "tailwindcss";
    
    .overlay {
        @apply bg-linear-to-r from-slate-300/90 to-slate-400/80 fixed inset-0 z-2 flex items-center justify-center;
    }
    
    .gradient-text {
        @apply bg-linear-to-br/oklch from-purple-800 to-indigo-800 bg-clip-text text-transparent leading-17;
    }
</style>