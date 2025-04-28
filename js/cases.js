const cases = document.querySelectorAll(".box .case");
const nextCaseButton = document.querySelector(".cases .next");
const casesBox = document.querySelector(".cases .box");

const { animate } = anime;

// Счетчик шагов от 0 до количества карточек минус один
let casesCounter = 0;

// Задаем контейнеру высоту карточки, чтобы при манипуляциях с высотой, нас не швыряло вверх
function setCasesBoxHeight() {
	const activeCaseHeight = getComputedStyle(cases[casesCounter]).height
	casesBox.style.minHeight = activeCaseHeight;
}

function setPosition() {
	// Количество задних карточек
	const otherCasesCount = cases.length - 1;
	const animationDuration = 350;
	const animationEase = "outBack";

	nextCaseButton.style.pointerEvents = "none";

	setTimeout(() => {
		nextCaseButton.style.pointerEvents = "unset";
	}, [animationDuration * 2])


	const values = {
		getLeftMargin: (el, idx) => {
			// Получаем left у элемента и превращаем в число
			const leftMarginValue = getComputedStyle(el).left;
			const leftMargin = parseInt(leftMarginValue.match(/\d+/));

			// Если нулевой шаг, то присваиваем отступ взависимости от индекса
			if (casesCounter === 0) return idx * 40;

			// Если же нет, вычитаем из старого отступа 40, но если оно идет в минус, то присваиваем максимальное значение
			return leftMargin === 0 ? (otherCasesCount * 40) : (leftMargin - 40);
		},

		getZIndex: (el, idx, isOld) => {
			// Получаем зед индекс и превращаем в число
			const zIndexValue = getComputedStyle(el).zIndex;
			const zIndex = Number(zIndexValue);

			if (isOld) return zIndex;

			// Если нулевой шаг то присваиваем взависимости от индекса
			if (casesCounter === 0) return idx * -1;


			// Если же нет, то увеличиваем зед индекс на 1, но если оно идет в плюс, то присваиваем минимальное значение
			return zIndex === 0 ? (otherCasesCount * -1) : (zIndex + 1);
		}
	}

	function setFirstCaseAnimation(el, idx) {
		animate(el, {
			left: [
				{
					to: `${values.getLeftMargin(el, idx)}px`,
					duration: animationDuration,
					ease: animationEase,
				},
			],
			zIndex: [
				{
					to: values.getZIndex(el, idx, true),
					duration: animationDuration,
					ease: animationEase,
				},
				{
					to: values.getZIndex(el, idx),
					duration: 0,
					ease: animationEase,
				},
			],
		});

		el.style.cssText = `
			width: calc(100% - ${otherCasesCount * 40}px);
			box-shadow: 0 8px 40px 0 #AB4DFC33;
		`;
	}

	function setOtherCaseAnimation(el, idx) {
		animate(el, {
			left: [
				{
					to: `${values.getLeftMargin(el, idx)}px`,
					duration: animationDuration,
					ease: animationEase,
				},
			],
			zIndex: [
				{
					to: values.getZIndex(el, idx, true),
					duration: animationDuration,
					ease: animationEase,
				},
				{
					to: values.getZIndex(el, idx),
					duration: 0,
					ease: animationEase,
				},
			],
		});

		el.style.cssText = `
			position: absolute;
			top: 0;
			height: calc(100% - 26px);
			width: calc(100% - ${otherCasesCount * 40}px);
			box-shadow: 12px 0 10px 0 #00000040;
		`;
	}

	function setLastCaseAnimation(el, idx) {
		animate(el, {
			y: [
				{
					to: "-100px",
					duration: animationDuration,
					ease: animationEase,
				},
				{
					to: "0",
					duration: animationDuration,
					ease: animationEase,
				},

			],
			left: [
				{
					to: "-40px",
					duration: animationDuration,
					ease: animationEase,
				},
				{
					to: `${values.getLeftMargin(el, idx)}px`,
					duration: animationDuration,
					ease: animationEase,
				},
			]
		});
	}

	cases.forEach((el, idx) => {
		// Задаем стили главной и задних каротчек
		if (idx === casesCounter) {
			setFirstCaseAnimation(el, idx);
		} else {
			setOtherCaseAnimation(el, idx);
		};

		if (idx === casesCounter - 1 || idx === otherCasesCount + casesCounter) {
			setLastCaseAnimation(el, idx);
		}
	})

	setCasesBoxHeight();
}

setPosition(casesCounter);

nextCaseButton.addEventListener("click", () => {
	if (casesCounter === cases.length - 1) {
		casesCounter = 0;
	} else {
		casesCounter++;
	}
	setPosition(casesCounter);
});

window.addEventListener("resize", () => {
	setCasesBoxHeight();
})

animate