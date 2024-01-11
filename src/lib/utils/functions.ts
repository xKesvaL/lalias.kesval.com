export function viewTransition(cb: () => Promise<void>) {
	if (!document.startViewTransition) {
		return cb();
	}

	document.startViewTransition(async () => {
		return await cb();
	});
}
