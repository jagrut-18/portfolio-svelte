<script>
    import {selectedIndex, currentKey} from '../store';
    import Spacer from "./Spacer.svelte";

    export let onClick;
    export let fileName;
    export let fileIcon;
    export let index;
    export let key;

</script>

<div class="file_container" on:click={onClick}>
    <div class="dot"></div>
    <Spacer width="1px" />
    <img class="file_icon" src={fileIcon} alt="">
    <div class={`file_name ${($currentKey != null && $currentKey == key && $selectedIndex == index) ? 'selected' : ''}`}>{fileName}</div>
</div>

<style>
    .file_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }
    .file_container:hover {
        background-color: #ffffff1a;
    }
    .dot {
        margin: 0 5px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: var(--text);
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
    .file_icon {
        width: 20px;
        margin-bottom: 4px;
    }
    .selected {
        color: var(--secondary);
    }
</style>