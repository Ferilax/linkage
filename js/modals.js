function showModal(trigger, modal) {
	if (trigger) {
		document.body.classList.add("modal-opened");
		modal.classList.add("show");
	}
}

document.addEventListener("click", e => {
	// Показывать модалку
	const modalDemo = document.querySelector("#modal-request");
	const triggerDemo = e.target.closest(".modal-demo-trigger");
	showModal(triggerDemo, modalDemo);

	// Прятать модалку при клике вне
	const modal = e.target.closest(".modal");
	const modalContent = e.target.closest(".modal__body");
	const closeButton = e.target.closest(".modal__close");

	if (!modal) return; // Если нет модалки то останавливать

	if (!modalContent || closeButton) {
		modal.classList.remove("show");
		document.body.classList.remove("modal-opened");
	}
});