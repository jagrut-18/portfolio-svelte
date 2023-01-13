<script>
    import { onMount } from "svelte";
    import Spacer from "./Spacer.svelte";

    export let data;
    let githubData;

    async function getGithubData() {
        const response = await fetch('https://api.github.com/users/jagrut-18');
        const json = await response.json();
        githubData = json;
    }

    onMount(() => {
        getGithubData();
    });

</script>

<div class="container">
    <div class="header">ABOUT ME</div>
    <div class="about_me">
        {data.aboutMe}
    </div>
    <Spacer height="15px" />
    {#if githubData}
    <div class="header">GITHUB STATS</div>
        <Spacer height="5px" />
        <div class="row">
            <div class="github_container" on:click={() => window.open("https://github.com/jagrut-18?tab=repositories", "_blank")}>
                <div class="container_count">{githubData.public_repos}</div>
                <div class="container_text">Public Repositories</div>
            </div>
            <Spacer width="10px" />
            <div class="github_container" on:click={() => window.open("https://gist.github.com/jagrut-18", "_blank")}>
                <div class="container_count">{githubData.public_gists}</div>
                <div class="container_text">Public Gists</div>
            </div>
        </div>
        {/if}
    <Spacer height="15px" />
    <div class="header">MEDIUM</div>
    <Spacer height="5px" />
    <div class="medium_container" on:click={() => window.open("https://medium.com/geekculture/build-a-camera-app-flutter-in-app-camera-825b829fe138", "_blank")}>
        <img src="assets/medium_post.png" alt="" class="medium_img" />
        <div class="right_container">
            <div class="medium_title">Build a Camera App : Flutter In-App Camera</div>
            <div class="medium_description">In many apps we need users to upload images by clicking a picture. For that, we can use the default camera app of the device but what if…</div>
            <div class="medium_additional_info">Published on Jul 5, 2021 · 5 min read · <a href="https://medium.com/geekculture">In Geek Culture</a></div>
        </div>
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
    .about_me {
        color: var(--text);
    }
    .row {
        display: flex;
    }
    .github_container {
        display: flex;
        align-items: baseline;
        padding: 10px 20px;
        border-radius: 8px;
        border: 1px solid var(--text-secondary);
        gap: 5px;
        cursor: pointer;
    }
    .github_container:hover {
        border: 1px solid var(--text);
    }
    .container_count {
        font-size: 24px;
        color: var(--text);
        font-weight: bold;
    }
    .container_text {
        font-size: 16px;
        color: var(--text);
    }
    .medium_container {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid var(--text-secondary);
        display: flex;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
    }
    .medium_img {
        width: 100px;
        border-radius: 8px;
        object-fit: contain;
    }
    .medium_title {
        font-size: 18px;
        color: var(--text);
    }
    .medium_description {
        font-size: 14px;
        color: var(--text-secondary);
    }
    .medium_additional_info {
        font-size: 14px;
        color: var(--text-secondary);
    }
    .medium_additional_info a {
        color: var(--text-secondary);
    }
</style>