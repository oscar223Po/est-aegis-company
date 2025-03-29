// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
	// Cancel actions of <summary>
	if (window.innerWidth >= 991.98) {
		document.querySelectorAll(".spollers-menu__title a").forEach(link => {
			link.addEventListener("click", function (e) {
				e.stopPropagation();
			});
		});
	}
	if (window.innerWidth <= 767.98) {
		document.querySelector(".title-link-sp a").addEventListener("click", function (e) {
			e.stopPropagation();
		})
	}
	// Search
	const searchLabel = document.querySelector(".search__label");
	const searchButton = document.querySelector(".search__button");
	if (searchLabel !== null) {
		searchButton.addEventListener("click", () => {
			searchLabel.classList.toggle("search-label");
			searchButton.classList.toggle("search-button");
		})
	}
	// Header Compence Height
	function updatePadding() {
		const header = document.querySelector('.header');
		const content = document.querySelector('.page');
		if (header && content) {
			content.style.paddingTop = `${header.offsetHeight}px`;
		}
	}
	window.addEventListener('load', updatePadding);
	window.addEventListener('resize', updatePadding);
	// Extra Form Checkbox
	const extraForm = document.querySelector(".form__extra");
	const checkboxForm = document.querySelector(".checkbox__input");
	if (extraForm !== null) {
		checkboxForm.addEventListener("change", function () {
			if (checkboxForm.checked) {
				extraForm.classList.remove("extra-disable");
			} else {
				extraForm.classList.add("extra-disable");
			}
		});
	}
});
