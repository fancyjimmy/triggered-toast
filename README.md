# triggered toast
A super lightweight, customizable, easy to use toast library for svelte.

## Installation
```bash
npm i -D triggered-toast
```


The following are exported:

- `ToastNotification` as the toast container;
- `SimpleToastNotification` as the toast controller.
- `toasts` as the controller;

### Svelte

If you're using this in a Svelte app, import the toast container and place it in your
root layout.

`+layout.svelte`:

<!-- prettier-ignore -->
```sveltehtml
<script lang='ts'>
    import { SimpleToastNotification } from 'triggered-toast'
</script>

<SimpleToastNotification />
```

Use anywhere in your app - just import the toasts store.

`CustomComponent.svelte`:

```sveltehtml
<script>
  import { toasts } from 'triggered-toast'; 
</script>

<button on:click={() => toasts.info('Hello world!')}>Show Info</button>
```
