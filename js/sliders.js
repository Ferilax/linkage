document.addEventListener("DOMContentLoaded", function () {
	Splide.defaults = {
		arrows: false,
		pagination: false,
	}

	function createSwiper(swiperSelector, options) {
		const hasSwiper = !!document.querySelector(swiperSelector);
		if (hasSwiper) {
			let splide = new Splide(swiperSelector, options);
			splide.mount();
		}
	}

	createSwiper("#task-splide", {
		padding: "var(--container-padding)",
		gap: "20px",
		perPage: 2,
		breakpoints: {
			900: {
				perPage: 1,
				gap: "10px",
			}
		},
	});

	createSwiper("#case-splide", {
		padding: "var(--container-padding)",
		gap: "20px",
		perPage: 1,
		breakpoints: {
			900: {
				gap: "10px",
			}
		},
	});

	createSwiper("#advantage-splide", {
		padding: "var(--container-padding)",
		gap: "20px",
		perPage: 2,
		breakpoints: {
			900: {
				perPage: 1,
				gap: "10px",
			}
		},
	});

	const productsSlideCount = document.querySelectorAll("#linkage-products-splide .splide__slide").length; // Высчитываем количество слайдов
	let linkageProcuctsSplide = new Splide("#linkage-products-splide", {
		gap: `calc((100% - 540px * ${productsSlideCount}) / ${productsSlideCount - 1})`,
		perPage: productsSlideCount,
		speed: 500,
		easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
		drag: false,
		updateOnMove: true,
		type: "loop",
		cloneStatus: false,
		focus: productsSlideCount - 1,
		direction: "rtl",
		waitForTransition: true,

		breakpoints: {
			1350: {
				gap: "20px",
				focus: 0,
				drag: true,
				direction: "ltr",
				type: "slide",
				easing: "cubic-bezier(0.25, 1, 0.5, 1)",
				speed: 400,
				perPage: 2,
				padding: "var(--container-padding)",
				updateOnMove: false,
				waitForTransition: false,
			},
			900: {
				perPage: 1,
				gap: "10px",
			}
		},
	});
	linkageProcuctsSplide.on("click", (slide) => {
		linkageProcuctsSplide.go("<");
	})
	linkageProcuctsSplide.mount();

	createSwiper("#partners-splide-1", {
		padding: "calc((100vw - 100%) / 2)",
		gap: "40px",
		autoWidth: "true",
		autoplay: true,
		type: "loop",
		clones: 0,
		pauseOnHover: false,
		interval: 3000,
		breakpoints: {
			1023: {
				gap: "20px",
			},
			767: {
				gap: "10px",
			},
		},
	});

	createSwiper("#partners-splide-2", {
		padding: "calc((100vw - 100%) / 2)",
		gap: "40px",
		autoWidth: "true",
		autoplay: true,
		pauseOnHover: false,
		resetProgress: false,
		type: "loop",
		clones: 0,
		interval: 3000,
		direction: "rtl",
		breakpoints: {
			1023: {
				gap: "20px",
			},
			767: {
				gap: "10px",
			},
		},
	});

	const servicesSlideCount = document.querySelectorAll("#implementation-services-splide .splide__slide").length; // Высчитываем количество слайдов
	let implementationServicesSplide = new Splide("#implementation-services-splide", {
		gap: `calc((100% - 540px * ${servicesSlideCount}) / ${servicesSlideCount - 1})`,
		perPage: servicesSlideCount,
		speed: 500,
		easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
		drag: false,
		updateOnMove: true,
		type: "loop",
		cloneStatus: false,
		focus: servicesSlideCount - 1,
		direction: "rtl",
		waitForTransition: true,

		breakpoints: {
			1350: {
				gap: "20px",
				focus: 0,
				drag: true,
				direction: "ltr",
				type: "slide",
				easing: "cubic-bezier(0.25, 1, 0.5, 1)",
				speed: 400,
				perPage: 2,
				padding: "var(--container-padding)",
				updateOnMove: false,
				waitForTransition: false,
			},
			900: {
				perPage: 1,
				gap: "10px",
			}
		},
	});
	implementationServicesSplide.on("click", (slide) => {
		implementationServicesSplide.go("<");
	})
	implementationServicesSplide.mount();

	createSwiper("#about-linkage-splide", {
		padding: "calc((100vw - 100%) / 2)",
		gap: "40px",
		autoWidth: "true",
		breakpoints: {
			1023: {
				autoWidth: false,
				perPage: 2,
				gap: "20px",
			},
			767: {
				gap: "10px",
				perPage: 1,
			},
		},
	});

	createSwiper("#digital-manager-splide", {
		padding: "var(--container-padding)",
		gap: "20px",
		perPage: 2,
		breakpoints: {
			900: {
				perPage: 1,
				gap: "10px",
			}
		},
	});
});