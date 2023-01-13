<script>
    export let data;
</script>

<div class="container">
    {#each data.data as item}
        <div class="item_container">
            <div class="header">{item.name.toUpperCase()}</div>
            <div class="sub_items">
                {#each item.data as subItem}
                     <div class="sub_item">
                         <img class="icon" src={subItem.icon} alt="">
                         {subItem.name}
                     </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        width: 100%;
    }
    .header {
        font-size: 18px;
        color: var(--text-secondary);
        border-bottom: 0.5px solid var(--text-secondary);
        padding: 2px 0;
    }
    .sub_items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px 0;
    }
    .icon {
        height: 20px;
    }
    .sub_item {
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