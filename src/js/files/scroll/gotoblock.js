// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose, getHash, FLS } from "../functions.js";
// Підключення доповнення для збільшення можливостей
// Документація: https://github.com/cferdinandi/smooth-scroll
// import SmoothScroll from 'smooth-scroll';
//==============================================================================================================================================================================================================================================================================================================================

// Модуль плавної проктутки до блоку
// Функция для получения актуальной высоты header
function getHeaderHeight() {
	const header = document.querySelector('header.header'); // Убедись, что селектор правильный
	return header ? header.offsetHeight : 0;
}

// Модуль плавної прокрутки до блоку
export let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		// Получаем актуальную высоту header
		const headerItemHeight = getHeaderHeight();

		let options = {
			speedAsDuration: true,
			speed: speed,
			header: 'header.header', // Убедись, что селектор правильный
			offset: offsetTop,
			easing: 'easeOutQuad',
		};

		// Закрываем меню, если оно открыто
		document.documentElement.classList.contains("menu-open") ? menuClose() : null;

		// Прокрутка с использованием SmoothScroll (если плагин доступен)
		if (typeof SmoothScroll !== 'undefined') {
			// Прокрутка с использованием плагина
			new SmoothScroll().animateScroll(targetBlockElement, '', options);
		} else {
			// Прокрутка стандартными средствами
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			targetBlockElementPosition = targetBlockElementPosition - headerItemHeight; // Учитываем высоту header
			targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
			targetBlockElementPosition -= 20; // Добавляем отступ 20px
			window.scrollTo({
				top: targetBlockElementPosition,
				behavior: "smooth"
			});
		}

		FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
	} else {
		FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
	}
};
