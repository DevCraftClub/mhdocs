# Конфигурация модуля

Самый главный файл настроек в админ панеле находится по пути  `engine/inc/module.php`. Альтернатив, к сожалению, пока что нет. Можно, конечно сделать как при AJAX. Но, пожалуйста не надо.

Давайте расмотрим главный файл.

<details>
	<summary>На примере: maharder.php</summary>

```php
<?php
//===============================================================
// Файл: maharder.php                                           =
// Путь: engine/inc/maharder.php                                =
// Дата создания: 2024-03-19 14:53:30                           =
// Последнее изменение: 2024-03-19 14:53:30                     =
// ==============================================================
// Автор: Maxim Harder <dev@devcraft.club> © 2024               =
// Сайт: https://devcraft.club                                  =
// Телеграм: http://t.me/MaHarder                               =
// ==============================================================
// Менять на свой страх и риск!                                 =
// Код распространяется по лицензии MIT                         =
//===============================================================

global $breadcrumbs, $mh, $modVars, $mh_template, $htmlTemplate, $config;

use Symfony\Bridge\Twig\Extension\TranslationExtension;

// заполняем важную и нужную информацию о модуле
$modInfo = [
	'module_name'        => 'MaHarder Assets',
	'module_version'     => '173.3.0',
	'module_description' => __('Административная панель для моих разработок'),
	'module_code'        => 'maharder',
	'module_id'          => 4,
	'module_icon'        => 'fa-duotone fa-solid fa-robot',
	'site_link'          => 'https://devcraft.club/downloads/maharder-assets.4/',
	'docs_link'          => 'https://readme.devcraft.club/latest/dev/mhadmin/install/',
	'dle_config'         => $config,
	'crowdin_name'       => 'mhаdmin',
	'crowdin_stat_id'    => '16830581-755131',
];

// Подключаем классы, функции и основные переменные
include_once DLEPlugins::Check(__DIR__.'/maharder/admin/index.php');


$mh->setLink(new AdminLink('new_module', __('Генератор модулей'), '?mod='.$modInfo['module_code'].'&sites=new_module'), 'new_module');
$mh->setLink(new AdminLink('logs', __('Вывод логов'), '?mod='.$modInfo['module_code'].'&sites=logs'), 'logs');

// Подключаем переменные модуля и его функционал
// Используем переменную sites для навигации в модуле
switch ($_GET['sites']) {
	// Страница с выводом логов
	case 'logs':
		require_once DLEPlugins::Check(MH_ROOT.'/_modules/admin/module/logs.php');
		break;
	// Страница с генератором модуля
	case 'new_module':
		require_once DLEPlugins::Check(MH_ROOT.'/_modules/admin/module/new_module.php');
		break;
	// Страница с логами изменений
	case 'changelog':
		require_once DLEPlugins::Check(MH_ROOT.'/_modules/admin/module/changelog.php');
		break;
	// Главная страница
	default:
		require_once DLEPlugins::Check(MH_ROOT.'/_modules/admin/module/main.php');
		break;
}

$xtraVariable = [
	'breadcrumbs' => $mh->getBreadcrumb(),
	'settings'    => DataManager::getConfig($modInfo['module_code']),
	'links'       => $mh->getVariables('menu')
];

$mh->setVars($modInfo);
$mh->setVars($xtraVariable);
$mh->setVars($modVars);

// Устанавливаем язык панели
$mh_template->addExtension(new TranslationExtension(MhTranslation::getTranslator()));

// Загружаем шаблон
$template = $mh_template->load($htmlTemplate);

echo $template->render($mh->getVariables());

```
</details>

## Информация о модуле

```php
$modInfo = [
	'module_name'        => 'MaHarder Assets',
	'module_version'     => '173.3.0',
	'module_description' => __('Административная панель для моих разработок'),
	'module_code'        => 'maharder',
	'module_id'          => 4,
	'module_icon'        => 'fa-duotone fa-solid fa-robot',
	'site_link'          => 'https://devcraft.club/downloads/maharder-assets.4/',
	'docs_link'          => 'https://readme.devcraft.club/latest/dev/mhadmin/install/',
	'dle_config'         => $config,
	'crowdin_name'       => 'mhаdmin',
	'crowdin_stat_id'    => '16830581-755131',
];
```

Вся основная информация хранится в массиве `$modInfo`. Именно отсюда формуруются все ссылки, настройки и прочее.

Подробнее о Crowdin можно узнать [здесь](../../crowdin.md).

## Ссылки в меню / навигацию
Все ссылки добавляются через класс [админки](./classes/Admin.md), а точнее через [метод](./classes/Admin.md#method_setLink):

```php
$mh->setLink(new AdminLink('new_module', __('Генератор модулей'), '?mod='.$modInfo['module_code'].'&sites=new_module'), 'new_module');
```

Подробнее о содержании ссылки можно узнать в классе [AdminLink](./classes/AdminLink.md).


## Подключение страниц

```php
switch ($_GET['sites']) {
	case 'changelog':
		require_once DLEPlugins::Check(MH_MODULES.'/admin/module/changelog.php');
		break;
	
	default:
		require_once DLEPlugins::Check(MH_MODULES.'/admin/module/main.php');
		break;
}
```

Это основное подключение страниц. К ним подключаются пользовательские модули страниц. Данные страниц содержат доп. переменные, что важны в отображении и обработки самой оболочки!

## Вывод информации

```php
$xtraVariable = [
	'breadcrumbs' => $mh->getBreadcrumb(),
	'settings'    => DataManager::getConfig($modInfo['module_code']),
	'links'       => $mh->getVariables('menu')
];

$mh->setVars($modInfo);
$mh->setVars($xtraVariable);
$mh->setVars($modVars);

// Устанавливаем язык панели
$mh_template->addExtension(new TranslationExtension(MhTranslation::getTranslator()));

// Загружаем шаблон
$template = $mh_template->load($htmlTemplate);

echo $template->render($mh->getVariables());
```

Добавляем в общий массив переменных прим помощи [setVars](./classes/Admin.md#method_setVars). 

Отображение самой страницы происходит при помощи подгружения шаблона, чья переменная указывается в модуле страницы.
