<script>
    import Spacer from '../components/Spacer.svelte';
    import Button from '../components/Button.svelte';
    import ImageCarousel from '../components/ImageCarousel.svelte';
    import {currentKey} from '../store';
    import DataTab from './DataTab.svelte';
    import ExperienceTab from './ExperienceTab.svelte';
    import SummaryTab from './SummaryTab.svelte';
import EducationTab from './EducationTab.svelte';

    export let data;

</script>

<div class="container">
    {#if $currentKey == 'summary'}
        <SummaryTab data={data} />
    {:else if $currentKey == 'projects'}
            {#if data.images.length > 0}
                <div class="left_container">
                    <ImageCarousel images={data.images} isApp={data.isApp} />
                </div>
            {/if}
            <div class="right_container">
                <div class="title">{data.name.toUpperCase()}</div>
                <Spacer height="5px" />
                <div class="tags">
                    {#each data.tags as tag}
                        <div class="tag">{tag}</div>
                    {/each}
                </div>
                <Spacer height="15px" />
                <ul class="description">
                    {#each data.description as desc}
                        <li>{desc}</li>
                    {/each}
                </ul>
                {#if data.link}
                    <Button text="Project Link" onClick={() => window.open(data.link, '_blank').focus()} />
                {/if}
            </div>
            {:else if $currentKey == 'experiences'}
                <ExperienceTab data={data} />
            {:else if $currentKey == 'education'}
                <EducationTab data={data} />
            {:else if $currentKey == 'skills'}
            <DataTab data={data} />
            {:else}
            <div class="message_container">
                Please select an entry from the side bar for more details.
            </div>
            {/if}
        </div>

<style>
    .container {
        max-height: calc(100% - 50px);
        height: 100%;
        width: 100%;
        background-color: var(--background-primary);
        display: flex;
        flex-direction: row;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        padding: 40px;
        gap: 40px;
        overflow-y: auto;
    }
    .left_container {
        width: 40%;
    }
    .right_container {
        width: 60%;
    }
    .title {
        color: var(--text);
        font-size: 24px;
    }
    .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    .tag {
        border: 1px solid var(--text);
        border-radius: 50px;
        padding: 5px 10px;
        color: var(--text);
        font-size: 16px;
    }
    .description {
        color: var(--text);
        font-size: 16px;
    }
    .description li {
        margin: 5px 0;
    }
    .message_container {
        color: var(--text-secondary);
        font-size: 18px;
        max-height: calc(100% - 50px);
        height: 100%;
        width: 100%;
        background-color: var(--background-primary);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    ::-webkit-scrollbar-track {
        box-shadow: none;
        -webkit-box-shadow: none;
        background-color: var(--background-primary);
    }

    ::-webkit-scrollbar {
        width: 3px;
        background-color: var(--background-primary);
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.401);
        border-radius: 50px;
    }
</style>