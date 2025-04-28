document.addEventListener("DOMContentLoaded", function () {
	Splide.defaults = {
		arrows: false,
		pagination: false,
	}

	let taskSplide = new Splide("#task-splide", {
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
	taskSplide.mount();

	let caseSplide = new Splide("#case-splide", {
		padding: "var(--container-padding)",
		gap: "20px",
		perPage: 1,
		breakpoints: {
			900: {
				gap: "10px",
			}
		},
	});
	caseSplide.mount();

	let advantageSplide = new Splide("#advantage-splide", {
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
	advantageSplide.mount();

	let linkageProcuctsSplide = new Splide("#linkage-products-splide", {
		gap: "calc((100% - 540px * 3) / 2)",
		perPage: 3,
		speed: 800,
		easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
		drag: false,
		updateOnMove: true,
		type: "loop",
		cloneStatus: false,
		focus: 2,
		direction: "rtl",

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
			},
			900: {
				perPage: 1,
				gap: "10px",
			}
		},
	});
	linkageProcuctsSplide.on("click", (slide) => {
		linkageProcuctsSplide.go(slide.index);
	})
	linkageProcuctsSplide.mount();

	let partnersSplide1 = new Splide("#partners-splide-1", {
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
	partnersSplide1.mount();

	let partnersSplide2 = new Splide("#partners-splide-2", {
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
	partnersSplide2.mount();

	let implementationServicesSplide = new Splide("#implementation-services-splide", {
		gap: "calc((100% - 540px * 5) / 4)",
		perPage: 5,
		speed: 800,
		easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
		drag: false,
		updateOnMove: true,
		type: "loop",
		cloneStatus: false,
		focus: 4,
		direction: "rtl",

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
			},
			900: {
				perPage: 1,
				gap: "10px",
			}
		},
	});
	implementationServicesSplide.on("click", (slide) => {
		implementationServicesSplide.go(slide.index);
	})
	implementationServicesSplide.mount();

	let aboutLinkageSplide = new Splide("#about-linkage-splide", {
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
	aboutLinkageSplide.mount();

	let digitalManagerSplide = new Splide("#digital-manager-splide", {
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
	digitalManagerSplide.mount();
});