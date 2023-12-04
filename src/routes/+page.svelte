<script lang="ts">
    import SimpleToastNotification from "$lib/SimpleToastNotification.svelte";
    import {toasts} from "$lib";
</script>

<SimpleToastNotification />

<h2 class="text-4xl">Triggered Toast</h2>
<p>Coolest toasts for Svelte!</p>
<div class="flex flex-col gap-5 font-bold text-white p-5">
    <button class="cool-button p-3" on:click={() => toasts.info("Triggered Info")}>Trigger Info</button>
    <button class="cool-button p-3" on:click={() => toasts.warning("Triggered Warning")}>Trigger Warning</button>
    <button class="cool-button p-3" on:click={() => toasts.error("Triggered Error")}>Trigger Error</button>
    <button class="cool-button p-3" on:click={() => toasts.success("Triggered Success")}>Trigger Success</button>
    <hr>
    <button class="cool-button p-3" on:click={() => toasts.info("Really Really Really Long Long Long Text Text Text")}>Trigger Long Text</button>
</div>
