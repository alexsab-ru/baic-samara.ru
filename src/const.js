import { phoneFormat } from '@/js/utils/numbers.format';
// Адрес для JSON
export const BASE_URL = 'https://alexsab-ru.github.io/astro-json/';
// URL сайта по умолчанию
export const SITE_URL = 'baic-samara.ru';
// Название сайта по умолчанию
export const SITE_NAME = 'Мега Авто Центр';
// Юр лицо
export const LEGAL_ENTITY = 'ООО «МЕГА Авто Центр»';
// ИНН
export const LEGAL_INN = '6311178975';
// Город
export const LEGAL_CITY = 'г. Самара';
// где? в Городе
export const LEGAL_CITY_WHERE = 'Самаре';
// Описание сайта по умолчанию
export const SITE_DESCR = 'Официальный дилерский центр Баик в Самаре';
// Имя пользователя в Телегам
export const TELEGRAM = '';
// Телефон по умолчанию
export const PHONE = '+7 (846) 279-00-00';
// Бренд
export const BRAND = 'Baic';
// Ссылки под хедером
export const LINKS_MENU = [
	// {url: 'cars/', name: 'Авто в наличии'},
	// {url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	{url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];
// Текстовая строка над хедером
export const HEADER_TOP_LINE = '';
// Текст согласия в формах
export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline" target="_blank">обработку персональных данных</a>';
// Текст информации в футере
export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона <a class="whitespace-nowrap" href="tel:' + phoneFormat(PHONE) + '">' + PHONE + '</a>. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
