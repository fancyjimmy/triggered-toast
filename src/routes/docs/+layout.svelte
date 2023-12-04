<script lang="ts">

</script>

<div class="w-screen h-screen grid grid-cols-[20rem_1fr]">
    <nav class="bg-slate-200 flex flex-col gap-3">
        <div>

        <h3>
            Introduction
        </h3>
            <ul>
                <li>
        <a href="/docs/getting-started">Getting Started</a>
                </li>
            </ul>
        </div>
        <div>

        <h3>
            Components
        </h3>
            <ul>
                <li>
        <a href="/docs/toast-notification">ToastNotification</a>
                </li>
							<li>
        <a href="/docs/simple-toast-notification">SimpleToastNotification</a>
                </li>
            </ul>
        </div>
    </nav>
    <div>
        <slot/>
    </div>
</div>

<style>
	h3{
			@apply text-xl font-bold;
	}
</style>