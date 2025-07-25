// Search Metadata Loader
// Загружает метаданные поиска из встроенных данных

(function() {
    'use strict';

    // Встроенные метаданные поиска (из search-metadata.yml)
    const EMBEDDED_SEARCH_METADATA = {
        search_synonyms: {
            api: ['interface', 'endpoint', 'rest', 'webhook', 'service', 'интерфейс', 'апи', 'эндпоинт', 'сервис', 'вебхук'],
            install: ['setup', 'installation', 'configure', 'deployment', 'setup guide', 'установка', 'установить', 'настройка', 'развертывание', 'инсталляция', 'конфигурация'],
            config: ['configuration', 'settings', 'options', 'parameters', 'preferences', 'настройки', 'конфигурация', 'параметры', 'опции', 'предпочтения'],
            error: ['exception', 'bug', 'issue', 'problem', 'troubleshooting', 'debug', 'ошибка', 'исключение', 'баг', 'проблема', 'отладка', 'исправление', 'решение проблем'],
            test: ['testing', 'unit test', 'integration test', 'automated test', 'test suite', 'тестирование', 'тест', 'проверка', 'автоматический тест', 'модульный тест', 'интеграционный тест'],
            deploy: ['deployment', 'publish', 'release', 'production', 'staging', 'развертывание', 'публикация', 'релиз', 'продакшн', 'продакшен', 'стейджинг'],
            security: ['secure', 'vulnerability', 'safety', 'authentication', 'authorization', 'безопасность', 'защита', 'уязвимость', 'аутентификация', 'авторизация', 'вход', 'логин'],
            performance: ['speed', 'optimization', 'fast', 'efficient', 'caching', 'производительность', 'скорость', 'оптимизация', 'быстрый'],
            php: ['пхп', 'пхп-скрипт', 'пхп-код', 'пхп-файл', 'пхп-приложение'],
            mysql: ['мускул', 'мускул-база', 'мускул-сервер', 'мускул-данные'],
            composer: ['композер', 'композер-пакет', 'композер-зависимости', 'композер-установка'],
            docker: ['докер', 'докер-контейнер', 'докер-образ', 'докер-файл'],
            nginx: ['энжинкс', 'энжинкс-сервер', 'энжинкс-конфигурация', 'энжинкс-настройка'],
            git: ['гит', 'гит-репозиторий', 'гит-коммит', 'гит-ветка', 'гит-пулл'],
            database: ['база данных', 'бд', 'датабаза', 'база', 'данные'],
            server: ['сервер', 'сервер-настройка', 'сервер-конфигурация', 'хостинг'],
            cache: ['кэш', 'кэширование', 'кэш-файлы', 'кэш-память'],
            log: ['лог', 'логи', 'журнал', 'журнал-событий', 'логирование'],
            backup: ['бэкап', 'резервная копия', 'бэкап-файлы', 'восстановление'],
            ssl: ['эс-эс-эл', 'сертификат', 'безопасное соединение', 'https'],
            cron: ['крон', 'крон-задача', 'планировщик', 'автоматизация'],
            api: ['апи', 'интерфейс', 'эндпоинт', 'сервис', 'вебхук']
        },
        popular_searches: [
            'руководство по установке',
            'документация api',
            'установка php',
            'docker контейнер',
            'настройка базы данных',
            'конфигурация сервера',
            'обработка ошибок',
            'тестирование кода',
            'развертывание приложения',
            'безопасность приложения',
            'оптимизация производительности',
            'работа с базой данных',
            'настройка nginx',
            'git workflow',
            'composer зависимости'
        ],
        search_categories: {
            'Начало работы': ['install', 'setup', 'configuration', 'установка', 'настройка', 'конфигурация'],
            'API Справочник': ['api', 'endpoint', 'service', 'апи', 'эндпоинт', 'сервис'],
            'Разработка': ['development', 'coding', 'programming', 'разработка', 'программирование', 'код'],
            'Развертывание': ['deploy', 'production', 'staging', 'развертывание', 'продакшн', 'стейджинг'],
            'Безопасность': ['security', 'authentication', 'authorization', 'безопасность', 'аутентификация', 'авторизация'],
            'Производительность': ['performance', 'optimization', 'caching', 'производительность', 'оптимизация', 'кэширование'],
            'Отладка': ['debug', 'error', 'troubleshooting', 'отладка', 'ошибка', 'решение проблем']
        },
        search_weights: {
            title: 10,
            headings: 5,
            content: 1,
            tags: 3,
            categories: 2
        },
        search_filters: [],
        search_suggestions: {
            min_length: 2,
            max_suggestions: 10,
            debounce_delay: 300
        },
        search_results: {
            max_results: 20,
            highlight: "auto"
        }
    };

    // Конфигурация загрузки метаданных
    const SEARCH_METADATA_CONFIG = {
        cacheKey: 'search_metadata_cache',
        cacheExpiry: 24 * 60 * 60 * 1000, // 24 часа
        fallbackData: {
            search_synonyms: {},
            popular_searches: [],
            search_categories: {},
            search_weights: {},
            search_filters: [],
            search_suggestions: {},
            search_results: {}
        }
    };

    // Класс для загрузки и управления метаданными поиска
    class SearchMetadataLoader {
        constructor() {
            this.metadata = null;
            this.isLoaded = false;
            this.loadPromise = null;
        }

        // Загрузка метаданных
        async load() {
            if (this.loadPromise) {
                return this.loadPromise;
            }

            this.loadPromise = this._loadMetadata();
            return this.loadPromise;
        }

        // Основная логика загрузки
        async _loadMetadata() {
            try {
                // Сначала проверяем кэш
                const cached = this._getFromCache();
                if (cached) {
                    this.metadata = cached;
                    this.isLoaded = true;
                    console.log('Search metadata loaded from cache');
                    return this.metadata;
                }

                // Используем встроенные данные
                this.metadata = EMBEDDED_SEARCH_METADATA;
                
                // Сохраняем в кэш
                this._saveToCache(this.metadata);
                
                this.isLoaded = true;
                console.log('Search metadata loaded successfully from embedded data');
                return this.metadata;

            } catch (error) {
                console.warn('Failed to load search metadata, using fallback:', error);
                this.metadata = SEARCH_METADATA_CONFIG.fallbackData;
                this.isLoaded = true;
                return this.metadata;
            }
        }

        // Caching
        _getFromCache() {
            try {
                const cached = localStorage.getItem(SEARCH_METADATA_CONFIG.cacheKey);
                if (!cached) return null;

                const data = JSON.parse(cached);
                const now = Date.now();

                if (data.timestamp && (now - data.timestamp) < SEARCH_METADATA_CONFIG.cacheExpiry) {
                    return data.metadata;
                }

                // Cache expired, remove
                localStorage.removeItem(SEARCH_METADATA_CONFIG.cacheKey);
                return null;
            } catch (error) {
                console.warn('Error reading cache:', error);
                return null;
            }
        }

        _saveToCache(metadata) {
            try {
                const data = {
                    metadata: metadata,
                    timestamp: Date.now()
                };
                localStorage.setItem(SEARCH_METADATA_CONFIG.cacheKey, JSON.stringify(data));
            } catch (error) {
                console.warn('Error saving to cache:', error);
            }
        }

        // Get synonyms
        getSynonyms(term) {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_synonyms) {
                return [];
            }

            const synonyms = this.metadata.search_synonyms[term];
            return synonyms ? synonyms : [];
        }

        // Get popular queries
        getPopularSearches() {
            if (!this.isLoaded || !this.metadata || !this.metadata.popular_searches) {
                return [];
            }

            return this.metadata.popular_searches;
        }

        // Get categories
        getCategories() {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_categories) {
                return {};
            }

            return this.metadata.search_categories;
        }

        // Get weights
        getWeights() {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_weights) {
                return {
                    title: 10,
                    headings: 5,
                    content: 1,
                    tags: 3,
                    categories: 2
                };
            }

            return this.metadata.search_weights;
        }

        // Get filters
        getFilters() {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_filters) {
                return [];
            }

            return this.metadata.search_filters;
        }

        // Get suggestions settings
        getSuggestionsConfig() {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_suggestions) {
                return {
                    min_length: 2,
                    max_suggestions: 10,
                    debounce_delay: 300
                };
            }

            return this.metadata.search_suggestions;
        }

        // Get results settings
        getResultsConfig() {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_results) {
                return {
                    max_results: 20,
                    highlight: "auto"
                };
            }

            return this.metadata.search_results;
        }

        // Find synonyms for a term
        findSynonyms(term) {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_synonyms) {
                return [];
            }

            const allSynonyms = [];
            
            // Look for exact match
            if (this.metadata.search_synonyms[term]) {
                allSynonyms.push(...this.metadata.search_synonyms[term]);
            }

            // Look for partial matches
            for (const [key, synonyms] of Object.entries(this.metadata.search_synonyms)) {
                if (key.includes(term) || term.includes(key)) {
                    allSynonyms.push(...synonyms);
                }
            }

            // Remove duplicates
            return [...new Set(allSynonyms)];
        }

        // Get all synonyms
        getAllSynonyms() {
            if (!this.isLoaded || !this.metadata || !this.metadata.search_synonyms) {
                return {};
            }

            return this.metadata.search_synonyms;
        }

        // Refresh metadata
        async refresh() {
            this.isLoaded = false;
            this.loadPromise = null;
            localStorage.removeItem(SEARCH_METADATA_CONFIG.cacheKey);
            return await this.load();
        }
    }

    // Create global instance
    window.SearchMetadataLoader = SearchMetadataLoader;
    window.searchMetadataLoader = new SearchMetadataLoader();

    // Automatic loading on page load
    document.addEventListener('DOMContentLoaded', function() {
        window.searchMetadataLoader.load().then(() => {
            console.log('Search metadata ready');
            
            // Notify other scripts about metadata readiness
            const event = new CustomEvent('searchMetadataLoaded', {
                detail: { metadata: window.searchMetadataLoader.metadata }
            });
            document.dispatchEvent(event);
        });
    });

    // Export for use in other modules
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = SearchMetadataLoader;
    }

})(); 