<script>
    import {selectedIndex, currentKey, openTabs} from '../store';
    export let title;
    export let index;
    export let key;
    
    function closeTab() {
        const isLastItemToRemove = $openTabs.length == 1;
        openTabs.set($openTabs.filter(item => !(item.index === index && item.key === key) ));
        if (isLastItemToRemove) {
            selectedIndex.set(null);
            currentKey.set(null);
            return;
        }
        if (index == $selectedIndex){
            const lastItem = $openTabs.at(-1);
            selectedIndex.set(lastItem.index);
            currentKey.set(lastItem.key);
        }
    }

    function isFirst() {
        return $openTabs[0].index == index && $openTabs[0].key == key;
    }

    function isLast() {
        return $openTabs.at(-1).index == index && $openTabs.at(-1).key == key;
    }

    function selectTab() {
        selectedIndex.set(index);
        currentKey.set(key);
    }

</script>

<div class={`container ${isFirst() && 'first'} ${isLast() && 'last'} ${($currentKey == key && $selectedIndex == index) && 'selected'}`} on:click={selectTab}>
    <div class="title">{title}</div>
    <img on:click={closeTab} src="assets/close.svg" alt="">
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: var(--text);
        font-size: 16px;
        padding: 5px 10px;
        background-color: var(--background-primary);
        gap: 10px;
        cursor: pointer;
    }
    .first {
        border-top-left-radius: 15px;
    }
    .last {
        border-top-right-radius: 15px;
    }
    .selected {
        border-top: 2px solid var(--highlight);
    }
    .container:hover {
        filter: brightness(0.9);
    }
    .title {
        color: var(--text);;
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
    }
    img {
        height: 15px;
        cursor: pointer;
    }
    
</style>