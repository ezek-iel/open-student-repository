<script lang="ts">
    import CourseInfo from "./courseinfo.svelte";
    import QualityReport from "./qualityreport.svelte";
    import ReportIssue from "./reportissue.svelte";
</script>

<main class="px-4 pb-20 lg:flex gap-8 xl:px-40 lg:mt-16">
    <div class="lg:max-w-8/12">
        <CourseInfo />
    </div>

    <div class="lg:flex-col flex-col md:flex-row flex items-start gap-4 mt-8">
        <div>
            <QualityReport />
        </div>
        <div>
            <ReportIssue />
        </div>
    </div>
</main>
