// Enhanced Search with Autocomplete
(function() {
    'use strict';

    // Search enhancement configuration
    const SEARCH_CONFIG = {
        minLength: 2,
        maxSuggestions: 10,
        debounceDelay: 300,
        highlightClass: 'search-highlight',
        suggestionClass: 'search-suggestion',
        activeClass: 'search-suggestion-active'
    };

    // Динамические синонимы (загружаются из метаданных)
    let SEARCH_SYNONYMS = {
        'api': ['api', 'interface', 'endpoint', 'rest', 'интерфейс', 'апи', 'эндпоинт', 'сервис'],
        'install': ['install', 'setup', 'installation', 'configure', 'установка', 'установить', 'настройка', 'развертывание'],
        'config': ['config', 'configuration', 'settings', 'options', 'настройки', 'конфигурация', 'параметры'],
        'error': ['error', 'exception', 'bug', 'issue', 'problem', 'ошибка', 'исключение', 'баг', 'проблема'],
        'test': ['test', 'testing', 'unit', 'integration', 'тестирование', 'тест', 'проверка'],
        'deploy': ['deploy', 'deployment', 'publish', 'release', 'развертывание', 'публикация', 'релиз'],
        'security': ['security', 'secure', 'vulnerability', 'safety', 'безопасность', 'защита', 'уязвимость'],
        'performance': ['performance', 'speed', 'optimization', 'fast', 'производительность', 'скорость', 'оптимизация'],
        'database': ['database', 'db', 'sql', 'mysql', 'postgresql', 'база данных', 'бд', 'хранилище'],
        'authentication': ['auth', 'authentication', 'login', 'user', 'аутентификация', 'вход', 'логин', 'пользователь'],
        'authorization': ['authorization', 'permissions', 'access', 'roles', 'права', 'доступ', 'роли'],
        'logging': ['log', 'logging', 'debug', 'trace', 'логирование', 'лог', 'отладка'],
        'monitoring': ['monitor', 'monitoring', 'metrics', 'analytics', 'мониторинг', 'метрики', 'аналитика'],
        'backup': ['backup', 'restore', 'recovery', 'snapshot', 'резервная копия', 'бэкап', 'восстановление'],
        'migration': ['migration', 'upgrade', 'update', 'version', 'миграция', 'обновление', 'версия'],
        'documentation': ['docs', 'documentation', 'guide', 'manual', 'документация', 'руководство', 'справочник'],
        'tutorial': ['tutorial', 'guide', 'example', 'howto', 'туториал', 'руководство', 'пример'],
        'faq': ['faq', 'question', 'answer', 'help', 'вопросы', 'ответы', 'помощь'],
        'changelog': ['changelog', 'changes', 'updates', 'version', 'изменения', 'обновления', 'история'],
        'license': ['license', 'licensing', 'legal', 'terms', 'лицензия', 'лицензирование', 'правовые'],
        // Дополнительные русские термины
        'php': ['php', 'пхп', 'пхп'],
        'mysql': ['mysql', 'мускул', 'база данных'],
        'composer': ['composer', 'композер', 'менеджер пакетов'],
        'git': ['git', 'гит', 'система контроля версий'],
        'docker': ['docker', 'докер', 'контейнеризация'],
        'nginx': ['nginx', 'энжинкс', 'веб сервер'],
        'apache': ['apache', 'апач', 'веб сервер'],
        'linux': ['linux', 'линукс', 'операционная система'],
        'windows': ['windows', 'виндовс', 'операционная система'],
        'javascript': ['javascript', 'джаваскрипт', 'js'],
        'python': ['python', 'питон', 'язык программирования'],
        'nodejs': ['nodejs', 'ноде', 'node.js'],
        'react': ['react', 'реакт', 'фреймворк'],
        'vue': ['vue', 'vue.js', 'фреймворк'],
        'angular': ['angular', 'ангуляр', 'фреймворк'],
        'laravel': ['laravel', 'лаravel', 'фреймворк'],
        'symfony': ['symfony', 'симфони', 'фреймворк'],
        'wordpress': ['wordpress', 'вордпресс', 'cms'],
        'drupal': ['drupal', 'друпал', 'cms'],
        'joomla': ['joomla', 'джумла', 'cms']
    };

    // Динамические популярные запросы (загружаются из метаданных)
    let POPULAR_SEARCHES = [
        'installation guide',
        'api documentation',
        'configuration',
        'troubleshooting',
        'examples',
        'changelog',
        'faq',
        'security',
        'performance',
        'deployment',
        // Русские популярные запросы
        'руководство по установке',
        'документация api',
        'настройка',
        'решение проблем',
        'примеры',
        'история изменений',
        'частые вопросы',
        'безопасность',
        'производительность',
        'развертывание',
        'установка php',
        'настройка mysql',
        'composer install',
        'git команды',
        'docker контейнер',
        'nginx конфигурация',
        'apache настройка',
        'linux команды',
        'windows установка',
        'javascript примеры',
        'python скрипт',
        'nodejs сервер',
        'react компонент',
        'vue приложение',
        'angular проект',
        'laravel миграция',
        'symfony бандл',
        'wordpress плагин',
        'drupal модуль',
        'joomla расширение'
    ];

    // Initialize enhanced search
    function initEnhancedSearch() {
        const searchInput = document.querySelector('input[type="search"]');
        if (!searchInput) return;

        // Create suggestion container
        const suggestionContainer = document.createElement('div');
        suggestionContainer.className = 'search-suggestions';
        suggestionContainer.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--md-default-bg-color);
            border: 1px solid var(--md-default-fg-color--lightest);
            border-top: none;
            border-radius: 0 0 4px 4px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        `;

        // Insert suggestion container
        const searchContainer = searchInput.closest('.md-search');
        if (searchContainer) {
            searchContainer.style.position = 'relative';
            searchContainer.appendChild(suggestionContainer);
        }

        // Add event listeners
        let debounceTimer;
        searchInput.addEventListener('input', function(e) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                handleSearchInput(e.target.value);
            }, SEARCH_CONFIG.debounceDelay);
        });

        searchInput.addEventListener('keydown', function(e) {
            handleSearchKeydown(e);
        });

        searchInput.addEventListener('focus', function() {
            if (this.value.length >= SEARCH_CONFIG.minLength) {
                showSuggestions(this.value);
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target)) {
                hideSuggestions();
            }
        });
    }

    // Handle search input
    function handleSearchInput(query) {
        if (query.length < SEARCH_CONFIG.minLength) {
            hideSuggestions();
            return;
        }

        showSuggestions(query);
    }

    // Show search suggestions
    function showSuggestions(query) {
        const suggestionContainer = document.querySelector('.search-suggestions');
        if (!suggestionContainer) return;

        const suggestions = generateSuggestions(query);
        
        if (suggestions.length === 0) {
            hideSuggestions();
            return;
        }

        suggestionContainer.innerHTML = '';
        
        suggestions.forEach((suggestion, index) => {
            const suggestionElement = createSuggestionElement(suggestion, index === 0);
            suggestionContainer.appendChild(suggestionElement);
        });

        suggestionContainer.style.display = 'block';
    }

    // Hide search suggestions
    function hideSuggestions() {
        const suggestionContainer = document.querySelector('.search-suggestions');
        if (suggestionContainer) {
            suggestionContainer.style.display = 'none';
        }
    }

    // Generate search suggestions
    function generateSuggestions(query) {
        const suggestions = [];
        const queryLower = query.toLowerCase();

        // Add exact matches first
        const exactMatches = POPULAR_SEARCHES.filter(term => 
            term.toLowerCase().includes(queryLower)
        );
        suggestions.push(...exactMatches);

        // Add synonym matches
        Object.entries(SEARCH_SYNONYMS).forEach(([key, synonyms]) => {
            if (key.includes(queryLower) || synonyms.some(syn => syn.includes(queryLower))) {
                suggestions.push(key);
            }
        });

        // Add navigation-based suggestions
        const navSuggestions = generateNavigationSuggestions(queryLower);
        suggestions.push(...navSuggestions);

        // Remove duplicates and limit results
        return [...new Set(suggestions)].slice(0, SEARCH_CONFIG.maxSuggestions);
    }

    // Generate suggestions based on navigation structure
    function generateNavigationSuggestions(query) {
        const suggestions = [];
        
        // Get all navigation links
        const navLinks = document.querySelectorAll('.md-nav__link, .md-header__title');
        
        navLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(query)) {
                suggestions.push(link.textContent.trim());
            }
        });

        return suggestions;
    }

    // Create suggestion element
    function createSuggestionElement(suggestion, isActive = false) {
        const element = document.createElement('div');
        element.className = `search-suggestion ${isActive ? SEARCH_CONFIG.activeClass : ''}`;
        element.textContent = suggestion;
        element.style.cssText = `
            padding: 8px 12px;
            cursor: pointer;
            border-bottom: 1px solid var(--md-default-fg-color--lightest);
            transition: background-color 0.2s;
        `;

        element.addEventListener('mouseenter', function() {
            document.querySelectorAll('.search-suggestion').forEach(el => 
                el.classList.remove(SEARCH_CONFIG.activeClass)
            );
            this.classList.add(SEARCH_CONFIG.activeClass);
        });

        element.addEventListener('click', function() {
            const searchInput = document.querySelector('input[type="search"]');
            if (searchInput) {
                searchInput.value = suggestion;
                searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                hideSuggestions();
            }
        });

        return element;
    }

    // Handle keyboard navigation
    function handleSearchKeydown(e) {
        const suggestions = document.querySelectorAll('.search-suggestion');
        const activeSuggestion = document.querySelector(`.${SEARCH_CONFIG.activeClass}`);
        
        if (suggestions.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                navigateSuggestions(suggestions, activeSuggestion, 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                navigateSuggestions(suggestions, activeSuggestion, -1);
                break;
            case 'Enter':
                if (activeSuggestion) {
                    e.preventDefault();
                    activeSuggestion.click();
                }
                break;
            case 'Escape':
                hideSuggestions();
                break;
        }
    }

    // Navigate through suggestions
    function navigateSuggestions(suggestions, activeSuggestion, direction) {
        const currentIndex = activeSuggestion ? 
            Array.from(suggestions).indexOf(activeSuggestion) : -1;
        
        let newIndex = currentIndex + direction;
        
        if (newIndex < 0) {
            newIndex = suggestions.length - 1;
        } else if (newIndex >= suggestions.length) {
            newIndex = 0;
        }

        suggestions.forEach(el => el.classList.remove(SEARCH_CONFIG.activeClass));
        suggestions[newIndex].classList.add(SEARCH_CONFIG.activeClass);
    }

    // Enhanced search highlighting
    function enhanceSearchHighlighting() {
        const searchInput = document.querySelector('input[type="search"]');
        if (!searchInput) return;

        // Override default search behavior
        const originalSearch = window.md_search;
        if (originalSearch) {
            window.md_search = function(query) {
                const results = originalSearch(query);
                
                // Add custom highlighting
                if (results && results.length > 0) {
                    results.forEach(result => {
                        if (result.text) {
                            result.text = highlightSearchTerms(result.text, query);
                        }
                    });
                }
                
                return results;
            };
        }
    }

    // Highlight search terms in text
    function highlightSearchTerms(text, query) {
        if (!query || query.length < 2) return text;
        
        const terms = query.split(/\s+/);
        let highlightedText = text;
        
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, 
                `<span class="${SEARCH_CONFIG.highlightClass}">$1</span>`
            );
        });
        
        return highlightedText;
    }

    // Add search analytics
    function addSearchAnalytics() {
        const searchInput = document.querySelector('input[type="search"]');
        if (!searchInput) return;

        searchInput.addEventListener('input', function(e) {
            if (e.target.value.length >= 3) {
                // Track search queries (anonymized)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'search', {
                        'search_term': e.target.value
                    });
                }
            }
        });
    }

    // Функция для загрузки метаданных и обновления синонимов
    function loadSearchMetadata() {
        if (window.searchMetadataLoader) {
            window.searchMetadataLoader.load().then(() => {
                // Обновляем синонимы из метаданных
                if (window.searchMetadataLoader.metadata && window.searchMetadataLoader.metadata.search_synonyms) {
                    SEARCH_SYNONYMS = { ...SEARCH_SYNONYMS, ...window.searchMetadataLoader.metadata.search_synonyms };
                    console.log('Search synonyms updated from metadata');
                }

                // Обновляем популярные запросы из метаданных
                if (window.searchMetadataLoader.metadata && window.searchMetadataLoader.metadata.popular_searches) {
                    POPULAR_SEARCHES = [...POPULAR_SEARCHES, ...window.searchMetadataLoader.metadata.popular_searches];
                    console.log('Popular searches updated from metadata');
                }

                // Инициализируем улучшенный поиск после загрузки метаданных
                initEnhancedSearch();
                enhanceSearchHighlighting();
                addSearchAnalytics();
            }).catch(error => {
                console.warn('Failed to load search metadata, using defaults:', error);
                initEnhancedSearch();
                enhanceSearchHighlighting();
                addSearchAnalytics();
            });
        } else {
            // Если загрузчик метаданных недоступен, используем стандартную инициализацию
            initEnhancedSearch();
            enhanceSearchHighlighting();
            addSearchAnalytics();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadSearchMetadata();
        });
    } else {
        loadSearchMetadata();
    }

    // Слушаем событие загрузки метаданных
    document.addEventListener('searchMetadataLoaded', function(event) {
        console.log('Search metadata loaded, updating search configuration');
        loadSearchMetadata();
    });

    // Re-initialize after navigation (for SPA behavior)
    document.addEventListener('DOMContentLoaded', function() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    const searchInput = document.querySelector('input[type="search"]');
                    if (searchInput && !searchInput.hasAttribute('data-enhanced')) {
                        searchInput.setAttribute('data-enhanced', 'true');
                        initEnhancedSearch();
                    }
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

})(); 