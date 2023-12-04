<script lang="ts">
    import { toasts } from '$lib/store';
    export let toastManager = toasts;
</script>

<div class={$$props.containerClass}>
    {#each $toastManager as toast (toast.id)}
        <div class="{$$props.class}">
            <slot name="toast" {...toast}/>
            <button on:click={() => toastManager.remove(toast.id)}>
                <slot name="close">X</slot>
            </button>
        </div>
    {/each}
</div>
