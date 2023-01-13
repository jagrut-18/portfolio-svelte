<script>
    export let text;
    export let onClick;
</script>

<button class="button" on:click={onClick}>{text}</button>

<style>
    .button {
        background-color: var(--primary);
        font-size: 16px;
        border-radius: 50px;
        padding: 10px 20px;
        color: var(--text);
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>