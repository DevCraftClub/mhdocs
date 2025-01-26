# AssetsChecker

## Методы

### `parseAssets` {#метод-parseAssets}
**Модификатор:** public function parseAssets(

### `checkAssets` {#метод-checkAssets}
**Модификатор:** public function checkAssets(

### `parse_assets` {#метод-parse_assets}
**Модификатор:** private function parse_assets(

### `save_asset` {#метод-save_asset}
**Модификатор:** public function save_asset(

### `fetchFileContent` {#метод-fetchFileContent}
**Модификатор:** private function fetchFileContent(

### `saveFile` {#метод-saveFile}
**Модификатор:** private function saveFile(

### `generateFileMetadata` {#метод-generateFileMetadata}
**Модификатор:** private function generateFileMetadata(

### `prepare_assets` {#метод-prepare_assets}
**Модификатор:** private function prepare_assets(

## Функция: `parseAssets`

**Описание:**  
Массив со всеми данными для обновления стилей и скриптов

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
## Функция: `checkAssets`

**Описание:**  
Проверяет целостность файлов между локальным хранилищем и сервером разработчика.
Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
## Функция: `parse_assets`

**Описание:**  
Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.
Процесс включает следующие этапы:
1. Получение списка локальных файлов и их данных через метод `prepare_assets`.
2. Получение данных об удаленных ресурсах через URL.
3. Сравнение данных о хэшах локальных и удаленных ресурсов.
4. Сохранение недостающих или обновленных ресурсов в локальное хранилище.
5. Запись актуализированных данных в локальный JSON-файл.

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
## Функция: `save_asset`

**Описание:**  
Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
## Функция: `fetchFileContent`

**Описание:**  
Получает содержимое файла по указанным ссылкам.
Метод пытается загрузить содержимое файла с основной (`link`) и,
при необходимости, с альтернативной (`alt`) ссылки, если содержимое
по основной ссылке пустое.

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
## Функция: `saveFile`

**Описание:**  
Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.
Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
## Функция: `generateFileMetadata`

**Описание:**  
Генерирует метаданные для указанного файла.

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
## Функция: `prepare_assets`

**Описание:**  
Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `assets_arr`.
Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `assets_arr`,
содержащую путь, имя файла и его хэш.

**Теги:**
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
- pathinfo()
