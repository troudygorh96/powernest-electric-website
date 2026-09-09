/* =========================================================
   POWERNEST ELECTRIC
   BLOG JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   SHARED STORAGE KEY

   IMPORTANT:
   This MUST be exactly the same key used by admin.js
   and article.js.
========================================================= */

const ARTICLES_STORAGE_KEY =
    "powernest_articles";

/* =========================================================
   DEFAULT ARTICLES

   These are only created when there is no saved
   article database yet.

   After Admin deletes an article, it will NOT be
   automatically recreated.
========================================================= */

const defaultArticles = [
    {
        id: "electrical-safety-tips",
        title:
            "Electrical Safety Tips Every Homeowner Should Know",
        category:
            "Electrical Safety",
        date:
            "2025-08-01",
        author:
            "PowerNest Electric",
        image:
            "",
        excerpt:
            "Simple electrical safety practices can help protect homes, families and electrical equipment.",
        content:
            `
            <p>
                Electricity is an essential part of modern homes,
                but electrical systems must always be treated with
                care and respect.
            </p>

            <h2>Keep Electrical Systems in Good Condition</h2>

            <p>
                Damaged cables, broken outlets, exposed wires and
                faulty electrical equipment should not be ignored.
            </p>

            <h2>Avoid Overloading Outlets</h2>

            <p>
                Connecting too many electrical devices to one outlet
                or power strip can create unnecessary electrical
                stress.
            </p>

            <h2>Watch for Warning Signs</h2>

            <ul>
                <li>Frequent circuit breaker trips.</li>
                <li>Burning smells from electrical equipment.</li>
                <li>Sparks from outlets or switches.</li>
                <li>Damaged electrical cables.</li>
                <li>Flickering lights.</li>
                <li>Unusual heat around outlets.</li>
            </ul>

            <h2>Get Problems Checked</h2>

            <p>
                Electrical problems should never be ignored.
                Seek professional electrical assistance when needed.
            </p>
            `,
        status:
            "published"
    },

    {
        id:
            "solar-energy-for-homes",
        title:
            "Understanding Solar Energy for Your Home",
        category:
            "Solar & Energy",
        date:
            "2025-08-05",
        author:
            "PowerNest Electric",
        image:
            "",
        excerpt:
            "Learn some basic considerations when exploring solar and modern energy solutions.",
        content:
            `
            <p>
                Solar energy can provide an alternative way to
                generate electricity for homes and other properties.
            </p>

            <h2>What Is Solar Energy?</h2>

            <p>
                Solar energy systems use sunlight to generate
                electrical power.
            </p>

            <h2>Why Consider Solar Energy?</h2>

            <p>
                Solar energy can be useful for customers looking
                for modern energy solutions.
            </p>

            <ul>
                <li>Solar panels can generate electricity.</li>
                <li>Battery systems can provide energy storage.</li>
                <li>Solar systems can support different electrical needs.</li>
                <li>Proper system design is important.</li>
            </ul>

            <h2>Proper Planning Is Important</h2>

            <p>
                Before installing a solar system, the electrical
                requirements of the property should be considered.
            </p>
            `,
        status:
            "published"
    },

    {
        id:
            "electrical-maintenance",
        title:
            "Why Regular Electrical Maintenance Matters",
        category:
            "Maintenance",
        date:
            "2025-08-10",
        author:
            "PowerNest Electric",
        image:
            "",
        excerpt:
            "Regular inspections and maintenance can help identify electrical problems before they become bigger issues.",
        content:
            `
            <p>
                Regular electrical maintenance is an important
                part of keeping homes, businesses and electrical
                systems operating safely and reliably.
            </p>

            <h2>Why Electrical Maintenance Matters</h2>

            <p>
                Electrical systems can develop problems over time.
                Loose connections, damaged components and overloaded
                circuits may not always be visible immediately.
            </p>

            <h2>Benefits of Regular Maintenance</h2>

            <ul>
                <li>Helps identify electrical problems early.</li>
                <li>Supports electrical safety.</li>
                <li>Helps protect electrical equipment.</li>
                <li>Can reduce unexpected electrical failures.</li>
                <li>Helps maintain reliable electrical systems.</li>
            </ul>

            <h2>Professional Electrical Support</h2>

            <p>
                PowerNest Electric provides electrical maintenance,
                troubleshooting and repair services.
            </p>
            `,
        status:
            "published"
    }
];

/* =========================================================
   GET ARTICLES

   ONE SOURCE OF TRUTH
========================================================= */

function getBlogArticles() {

    try {

        const saved =
            localStorage.getItem(
                ARTICLES_STORAGE_KEY
            );

        if (!saved) {

            const initialArticles =
                [...defaultArticles];

            localStorage.setItem(
                ARTICLES_STORAGE_KEY,
                JSON.stringify(initialArticles)
            );

            return initialArticles;
        }

        const articles =
            JSON.parse(saved);

        if (!Array.isArray(articles)) {
            return [];
        }

        return articles;

    } catch (error) {

        console.error(
            "PowerNest Blog: Could not read articles.",
            error
        );

        return [];
    }
}

/* =========================================================
   GET PUBLISHED ARTICLES
========================================================= */

function getPublishedArticles() {

    return sortArticlesNewestFirst(
        getBlogArticles().filter(
            function (article) {

                return article.status ===
                    "published";
            }
        )
    );
}

/* =========================================================
   SORT ARTICLES
========================================================= */

function sortArticlesNewestFirst(
    articles
) {

    return [...articles].sort(
        function (a, b) {

            const dateA =
                new Date(
                    a.date ||
                    "1970-01-01"
                ).getTime();

            const dateB =
                new Date(
                    b.date ||
                    "1970-01-01"
                ).getTime();

            return dateB - dateA;
        }
    );
}

/* =========================================================
   FORMAT DATE
========================================================= */

function formatArticleDate(
    dateString
) {

    if (!dateString) {
        return "Date unavailable";
    }

    const date =
        new Date(
            dateString +
            "T00:00:00"
        );

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {
        return dateString;
    }

    return date.toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );
}

/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}

/* =========================================================
   ARTICLE URL
========================================================= */

function getArticleURL(
    article
) {

    return (
        `article.html?id=${encodeURIComponent(
            article.id
        )}`
    );
}

/* =========================================================
   ARTICLE IMAGE
========================================================= */

function getArticleImage(
    article
) {

    if (!article.image) {

        return `
            <div class="blog-placeholder-icon">
                ⚡
            </div>
        `;
    }

    return `
        <img
            src="${escapeHTML(article.image)}"
            alt="${escapeHTML(article.title)}"
            loading="lazy"
            onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='flex';
            ">

        <div
            class="blog-placeholder-icon"
            style="display:none;">

            ⚡

        </div>
    `;
}

/* =========================================================
   BLOG CARD
========================================================= */

function createBlogCard(
    article
) {

    const articleURL =
        getArticleURL(article);

    return `
        <article class="blog-card">

            <div class="blog-card-image">
                ${getArticleImage(article)}
            </div>

            <div class="blog-card-content">

                <span class="blog-category">
                    ${escapeHTML(
                        article.category ||
                        "General"
                    )}
                </span>

                <h3>
                    ${escapeHTML(
                        article.title ||
                        "PowerNest Electric"
                    )}
                </h3>

                <div class="blog-card-meta">

                    <span>
                        ${formatArticleDate(
                            article.date
                        )}
                    </span>

                    <span>•</span>

                    <span>
                        ${escapeHTML(
                            article.author ||
                            "PowerNest Electric"
                        )}
                    </span>

                </div>

                <p>
                    ${escapeHTML(
                        article.excerpt ||
                        ""
                    )}
                </p>

                <a
                    href="${articleURL}"
                    class="text-button">

                    Read More →

                </a>

            </div>

        </article>
    `;
}

/* =========================================================
   DISPLAY BLOG
========================================================= */

function displayBlogArticles() {

    const container =
        document.getElementById(
            "blogArticles"
        );

    if (!container) {
        return;
    }

    const articles =
        getPublishedArticles();

    if (articles.length === 0) {

        container.innerHTML = `
            <div class="blog-empty-state">

                <h3>
                    No Blog Articles Yet
                </h3>

                <p>
                    PowerNest Electric will publish
                    helpful electrical and energy
                    articles here.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        articles
            .map(createBlogCard)
            .join("");
}

/* =========================================================
   HOME BLOG PREVIEW
========================================================= */

function displayHomeBlogPreview() {

    const container =
        document.getElementById(
            "homeBlogPreview"
        );

    if (!container) {
        return;
    }

    const articles =
        getPublishedArticles()
            .slice(0, 3);

    if (articles.length === 0) {

        container.innerHTML = "";

        return;
    }

    container.innerHTML =
        articles
            .map(createBlogCard)
            .join("");
}

/* =========================================================
   SEARCH
========================================================= */

function searchBlogArticles(
    searchTerm
) {

    const articles =
        getPublishedArticles();

    const term =
        String(
            searchTerm || ""
        )
        .trim()
        .toLowerCase();

    if (!term) {
        return articles;
    }

    return articles.filter(
        function (article) {

            const title =
                String(
                    article.title ||
                    ""
                ).toLowerCase();

            const category =
                String(
                    article.category ||
                    ""
                ).toLowerCase();

            const excerpt =
                String(
                    article.excerpt ||
                    ""
                ).toLowerCase();

            const content =
                String(
                    article.content ||
                    ""
                ).toLowerCase();

            return (
                title.includes(term) ||
                category.includes(term) ||
                excerpt.includes(term) ||
                content.includes(term)
            );
        }
    );
}

/* =========================================================
   DISPLAY SEARCH RESULTS
========================================================= */

function displaySearchResults(
    searchTerm
) {

    const container =
        document.getElementById(
            "blogArticles"
        );

    if (!container) {
        return;
    }

    const results =
        searchBlogArticles(
            searchTerm
        );

    if (results.length === 0) {

        container.innerHTML = `
            <div class="blog-empty-state">

                <h3>
                    No Articles Found
                </h3>

                <p>
                    Try another search term.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        results
            .map(createBlogCard)
            .join("");
}

/* =========================================================
   CATEGORY FILTER
========================================================= */

function filterBlogByCategory(
    category
) {

    const container =
        document.getElementById(
            "blogArticles"
        );

    if (!container) {
        return;
    }

    if (
        !category ||
        category === "all"
    ) {

        displayBlogArticles();

        return;
    }

    const articles =
        getPublishedArticles();

    const filtered =
        articles.filter(
            function (article) {

                return String(
                    article.category ||
                    ""
                ) ===
                    String(category);
            }
        );

    if (filtered.length === 0) {

        container.innerHTML = `
            <div class="blog-empty-state">

                <h3>
                    No Articles in This Category
                </h3>

                <p>
                    There are currently no published
                    articles in this category.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        filtered
            .map(createBlogCard)
            .join("");
}

/* =========================================================
   GET ARTICLE BY ID
========================================================= */

function getArticleById(
    articleId
) {

    if (!articleId) {
        return null;
    }

    return getBlogArticles().find(
        function (article) {

            return String(article.id) ===
                String(articleId);
        }
    ) || null;
}

/* =========================================================
   RELATED ARTICLES
========================================================= */

function getRelatedArticles(
    currentArticle,
    limit = 3
) {

    if (!currentArticle) {
        return [];
    }

    return getPublishedArticles()
        .filter(
            function (article) {

                return String(article.id) !==
                    String(currentArticle.id);
            }
        )
        .sort(
            function (a, b) {

                const sameCategoryA =
                    a.category ===
                    currentArticle.category
                        ? 1
                        : 0;

                const sameCategoryB =
                    b.category ===
                    currentArticle.category
                        ? 1
                        : 0;

                return sameCategoryB -
                    sameCategoryA;
            }
        )
        .slice(0, limit);
}

/* =========================================================
   SEARCH SETUP
========================================================= */

function setupBlogSearch() {

    const searchForm =
        document.getElementById(
            "blogSearchForm"
        );

    const searchInput =
        document.getElementById(
            "blogSearch"
        );

    if (
        !searchForm ||
        !searchInput
    ) {
        return;
    }

    searchForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            displaySearchResults(
                searchInput.value
            );
        }
    );
}

/* =========================================================
   CATEGORY SETUP
========================================================= */

function setupCategoryFilter() {

    const categorySelect =
        document.getElementById(
            "blogCategoryFilter"
        );

    if (!categorySelect) {
        return;
    }

    categorySelect.addEventListener(
        "change",
        function () {

            filterBlogByCategory(
                categorySelect.value
            );
        }
    );
}

/* =========================================================
   CLEAR SEARCH
========================================================= */

function setupClearSearch() {

    const clearButton =
        document.getElementById(
            "clearBlogSearch"
        );

    if (!clearButton) {
        return;
    }

    clearButton.addEventListener(
        "click",
        function () {

            const searchInput =
                document.getElementById(
                    "blogSearch"
                );

            if (searchInput) {
                searchInput.value = "";
            }

            displayBlogArticles();
        }
    );
}

/* =========================================================
   STORAGE EVENT

   If Admin is open in another browser tab,
   Blog updates automatically.
========================================================= */

window.addEventListener(
    "storage",
    function (event) {

        if (
            event.key ===
            ARTICLES_STORAGE_KEY
        ) {

            displayBlogArticles();

            displayHomeBlogPreview();
        }
    }
);

/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayBlogArticles();

        displayHomeBlogPreview();

        setupBlogSearch();

        setupCategoryFilter();

        setupClearSearch();
    }
);

/* =========================================================
   PUBLIC API
========================================================= */

window.PowerNestBlog = {

    getArticles:
        getBlogArticles,

    getPublishedArticles:
        getPublishedArticles,

    getArticleById:
        getArticleById,

    getRelatedArticles:
        getRelatedArticles,

    displayBlogArticles:
        displayBlogArticles,

    displayHomeBlogPreview:
        displayHomeBlogPreview,

    searchBlogArticles:
        searchBlogArticles,

    filterBlogByCategory:
        filterBlogByCategory,

    displaySearchResults:
        displaySearchResults

};