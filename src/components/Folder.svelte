<script>
    import {selectedIndex, openTabs, currentKey} from '../store';
    export let folderName;
    export let data;
    export let key;
    export let isOpen = false;

    function onFileClick(index) {
        currentKey.set(key);
        selectedIndex.set(index);
        if (!$openTabs.find((tab) => tab.key == key && tab.index == index)) {
            openTabs.update(arr => [...arr, {key: key, index: index}]);
        }
    }

</script>

<div class="container">
    <div class="folder_container" on:click={() => {isOpen = !isOpen}}>
        <img src={isOpen ? 'assets/arrow_down.svg' : 'assets/arrow_right.svg'} alt="" height="15px" width="15px"/>
        <img src={'assets/folder.svg'} alt="" height="25px" width="25px"/>
        <div class="folder_name">{folderName}</div>
    </div>
    {#if isOpen}
        <div class="content_container">
            {#each data[key] as file, index}
                <div class="file_container" on:click={() => onFileClick(index)}>
                    <img class="file_icon" src={file.icon} alt="">
                    <div class={`file_name ${($currentKey != null && $currentKey == key && $selectedIndex == index) ? 'selected' : ''}`}>{file.name}</div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .folder_container {
        display: flex;
        flex-direction: row;
        gap: 7px;
        align-items: center;
        cursor: pointer;
        padding: 2px;
    }
    .folder_container:hover {
        background-color: #ffffff1a;
    }
    .content_container {
        border-left: 1px solid var(--divider);
        padding-left: 50px;
        margin-left: 9px;
        margin-top: 5px;
        gap: 5px;
    }
    .file_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }
    .file_container:hover {
        background-color: #ffffff1a;
    }
    .folder_name {
        color: var(--text);
        font-size: 18px;
    }
    .file_icon {
        height: 25px;
        width: 25px;
    }
    .file_name {
        color: var(--text);
        font-size: 16px;
        padding: 2px;
        cursor: pointer;
        line-height: 26px;
        max-height: 30px;
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 1;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        margin: 2px 0;
    }
    .selected {
        color: var(--secondary);
    }
</style>