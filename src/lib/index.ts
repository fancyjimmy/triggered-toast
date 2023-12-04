// Reexport your entry components here
export { default as SimpleToastNotification } from '$lib/SimpleToastNotification.svelte';
export { default as ToastNotification } from '$lib/ToastNotification.svelte';
import { writable } from 'svelte/store';

export type Toast = {
	id: number;
	type: 'error' | 'info' | 'success' | 'warning';
	message: string;
	duration?: number;
};

export type NewToast = Omit<Toast, 'id'>;

export function createToastManager(duration: number | undefined) {
	const { subscribe, update } = writable<Toast[]>([]);

	const toastManager = {
		subscribe,
		add: (newToast: NewToast) => {
			const toast: Toast = {
				id: Date.now(),
				duration: duration,
				...newToast
			};

			if (duration !== undefined) {
				setTimeout(() => {
					toastManager.remove(toast.id);
				}, duration);
			}
			update((toasts) => {
				return [...toasts, toast];
			});
		},
		remove: (id: number) => {
			update((toasts) => {
				return toasts.filter((toast) => toast.id !== id);
			});
		},
		error: (message: string) => {
			toastManager.add({ type: 'error', message });
		},
		info: (message: string) => {
			toastManager.add({ type: 'info', message });
		},
		success: (message: string) => {
			toastManager.add({ type: 'success', message });
		},
		warning: (message: string) => {
			toastManager.add({ type: 'warning', message });
		}
	};

	return toastManager;
}

export const toasts = createToastManager(5000);
