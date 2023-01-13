<script>
    import PortfolioScreen from '../screens/PortfolioScreen.svelte';
    export let title = 'Window';
</script>

<div class="window">
    <div class="top_bar">
        <div class="title">
            {title}
        </div>
    </div>
    <PortfolioScreen />
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
</style>