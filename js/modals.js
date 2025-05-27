const CLASSES = {
	MODAL: ".modal",
	MODAL_BODY: ".modal__body",
	MODAL_CLOSE: ".modal__close",
	MODAL_REQUEST: "#modal-request",
	MODAL_REQUEST_TRIGGER: ".modal-demo-trigger",
	MODAL_SUCCESS: "#modal-success",
	ACTIVE: "show",
	BODY_ACTIVE: "modal-opened",
}

function showModal(trigger, modal) {
	if (trigger) {
		document.body.classList.add(CLASSES.BODY_ACTIVE);
		modal.classList.add("show");
	}
}

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);

	document.body.classList.remove(CLASSES.BODY_ACTIVE);
	modal.classList.remove(CLASSES.ACTIVE);
}

function createModal(modalSelector, triggerSelector) {
	document.addEventListener("click", e => {
		// Показывать модалку
		const modal = document.querySelector(modalSelector);
		const trigger = e.target.closest(triggerSelector);
		showModal(trigger, modal);

		// Прятать модалку при клике вне
		const clickedModal = e.target.closest(CLASSES.MODAL);
		const modalContent = e.target.closest(CLASSES.MODAL_BODY);
		const closeButton = e.target.closest(CLASSES.MODAL_CLOSE);
		const closeTrigger = e.target.closest(`${CLASSES.MODAL} .close`);

		if (!clickedModal) return; // Если нет модалки то останавливать

		if (!modalContent || closeButton || closeTrigger) {
			clickedModal.classList.remove(CLASSES.ACTIVE);
			document.body.classList.remove(CLASSES.BODY_ACTIVE);
		}
	});
};

createModal(CLASSES.MODAL_REQUEST, CLASSES.MODAL_REQUEST_TRIGGER);

// Скрываем при удачном заполнении формы, для выведения последующей модалки 
const form = document.querySelector(`${CLASSES.MODAL_REQUEST} form`);
form.addEventListener("submit", e => {
	e.preventDefault();
	closeModal(CLASSES.MODAL_REQUEST);

	const modalSubmit = document.querySelector(CLASSES.MODAL_SUCCESS)
	showModal(true, modalSubmit);

	const inputs = form.querySelectorAll("input");
	inputs.forEach(input => {
		input.value = "";
	});
});