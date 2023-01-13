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
        <div class="position">{data.position}</div>
        <div class="secondary_text">{data.location}</div>
    </div>
    <Spacer height="15px" />
    <ul class="description">
        {#each data.description as desc}
            <li>{desc}</li>
        {/each}
    </ul>
    {#if data.links}
        <div class="links">
            {#each data.links as link}
                <a class="link" target="_blank" href={link.link}>{link.name}</a>
            {/each}
        </div>
    {/if}
</div>

<style>
    .container {
        width: 100%;
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
    .secondary_text {
        color: var(--text-secondary);
    }
    .position {
        color: var(--secondary);
    }
    .description {
        color: var(--text);
        font-size: 16px;
    }
    .description li {
        margin: 5px 0;
    }
    .links {
        margin-left: 60px; /* TEMPERORY FIX */
        display: flex;
        gap: 10px;
    }
    .link {
        color: var(--text);
    }
    .link:hover {
        color: var(--secondary)
    }
</style>