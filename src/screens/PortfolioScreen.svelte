<script>
    import Folder from '../components/Folder.svelte';
    import TabWindow from '../components/TabWindow.svelte';
    import TabBarItem from '../components/TabBarItem.svelte';
    import File from '../components/File.svelte';
    import {selectedIndex, openTabs, data, currentKey} from '../store';
    import { onMount } from 'svelte';
    export let title = 'Window';

    function openSkills() {
        const index = 0;
        const key = 'skills';
        selectedIndex.set(index);
        currentKey.set(key);
        if (!$openTabs.find((tab) => tab.key == key && tab.index == index)) {
            openTabs.update(arr => [...arr, {key: key, index: index}]);
        }
    }

    function openSummary() {
        const index = 0;
        const key = 'summary';
        selectedIndex.set(index);
        currentKey.set(key);
        if (!$openTabs.find((tab) => tab.key == key && tab.index == index)) {
            openTabs.update(arr => [...arr, {key: key, index: index}]);
        }
    }

    onMount(() => {
        openSummary();
    });
</script>

<div class="window">
    <div class="top_bar">
        <div class="title">
            {title}
        </div>
    </div>
    <div class="container">
        <div class="left_container">
            <File fileName="Summary" fileIcon="assets/file.svg" onClick={openSummary} index={0} key='summary' />
            <Folder folderName="Projects" data={data} key="projects" />
            <Folder folderName="Experience" data={data} key="experiences" />
            <Folder folderName="Education" data={data} key="education" />
            <File fileName="Skills" fileIcon="assets/file.svg" onClick={openSkills} index={0} key='skills' />
            <File fileName="Resume.pdf" fileIcon="assets/cv.svg" onClick={() => window.open('/assets/resume.pdf', '_blank').focus()} />
        </div>
        <div class="right_container">
            <div class="background_container">
                <div class="tab_bar">
                    {#each $openTabs as tab}
                        <TabBarItem index={tab.index} key={tab.key} title={data[tab.key][tab.index].name} />
                    {/each}
                </div>
                {#if $currentKey}
                    <TabWindow data={data[$currentKey][$selectedIndex]} />
                {:else}
                    <TabWindow />
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .window {
        height: 100%;
        max-height: calc(100% - 100px - 3%);
        width: 100%;
        background-color: rgba(255, 255, 255, 0.06);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        -webkit-box-shadow: 30px 30px 35px rgba(0, 0, 0, 0.15);
        box-shadow: 30px 30px 35px rgba(0, 0, 0, 0.15);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 20px;
        padding-top: 0px;
        overflow: hidden;
    }
    .top_bar {
        height: 45px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .title {
        color: var(--text-secondary);
        font-size: 14px;
    }
    .container {
        max-height: calc(100% - 45px);
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .left_container {
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: auto;
    }
    .right_container {
        width: 70%;
    }
    .background_container {
        max-height: 100%;
        height: 100%;
        width: 100%;
        background: rgba(0, 7, 84, 0.445);
        backdrop-filter: blur(48px);
        border-radius: 15px;
        overflow-y: auto;
    }
    .tab_bar {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        height: 50px;
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