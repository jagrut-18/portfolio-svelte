<script>
import Spacer from "./Spacer.svelte";
import {blur} from 'svelte/transition';

    export let images;
    export let selectedImageIndex = 0;
    export let isApp = false;

    function forward() {
        if (selectedImageIndex == images.length - 1){
            selectedImageIndex = 0;
        }
        else {
            selectedImageIndex += 1;
        }
    }
    function reverse() {
        if (selectedImageIndex == 0){
            selectedImageIndex = images.length - 1;
        }
        else {
            selectedImageIndex -= 1;
        }
    }
</script>

<div class="container">
    <img transition:blur class={isApp ? "image_app" : "image"} src={images[selectedImageIndex]} alt="">
    <Spacer height="10px" />
    <div class="button_container">
        <img class="arrow_button" src="assets/arrow_left.svg" on:click={reverse} alt="">
        <div class="image_number">{selectedImageIndex + 1}</div>
        <img class="arrow_button" src="assets/arrow_right.svg" on:click={forward} alt="">
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .image {
        object-fit: contain;
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
    }
    .image_app {
        object-fit: contain;
        height: 90%;
        max-width: 50%;
        border-radius: 10px;
        cursor: pointer;
    }
    .button_container {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }
    .arrow_button {
        width: 15px;
        cursor: pointer;
    }
    .image_number {
        color: var(--text);
        font-size: 18px;
        font-weight: 700;
    }
</style>