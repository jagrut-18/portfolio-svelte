<script>
    import Spacer from "./Spacer.svelte";


    export let data;
</script>

<div class="container">
    <div class="space_between_row">
        <div class="title">{data.name.toUpperCase()}</div>
        <div class="secondary_text">{data.date}</div>
    </div>
    <div class="space_between_row">
        <div class="position">{data.degree} | {data.gpa}</div>
        <div class="secondary_text">{data.location}</div>
    </div>
    <Spacer height="15px" />
    {#if data.college}
        <div class="college">College: {data.college}</div>
        <Spacer height="5px" />
    {/if}
    <div class="header">COURSES</div>
    <div class="courses">
        {#each data.courses as course}
            <div class="course">{course}</div>
        {/each}
    </div>
</div>

<style>
    .container {
        width: 100%;
    }
    .header {
        font-size: 18px;
        color: var(--text-secondary);
    }
    .space_between_row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .title {
        color: var(--text);
        font-size: 24px;
    }
    .college {
        font-size: 18px;
        color: var(--text);
    }
    .secondary_text {
        color: var(--text-secondary);
    }
    .position {
        color: var(--secondary);
    }
    .courses {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px 0;
    }
    .course {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        color: var(--text);
        font-size: 16px;
        border: 1px solid var(--text-secondary);
        border-radius: 50px;
        padding: 10px 15px;
    }
</style>