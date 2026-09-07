/* =========================================================
   POWERNEST ELECTRIC
   BLOG JAVASCRIPT
   VERSION: 2.0
========================================================= */

"use strict";


/* =========================================================
   STORAGE KEYS
========================================================= */

const BLOG_STORAGE_KEYS = [
    "powerNestArticles",
    "powernestArticles",
    "blogArticles",
    "articles"
];


/* =========================================================
   DEFAULT ARTICLES
   These are used when no articles have been saved yet.
========================================================= */

const defaultArticles = [

    /* =====================================================
       ARTICLE 1
    ===================================================== */

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

        content: `
            <p>
                Electricity is an essential part of modern homes,
                but electrical systems must always be treated with
                care and respect.
            </p>

            <h2>
                Keep Electrical Systems in Good Condition
            </h2>

            <p>
                Damaged cables, broken outlets, exposed wires and
                faulty electrical equipment should not be ignored.
                Electrical problems should be inspected and repaired
                by a qualified professional.
            </p>

            <h2>
                Avoid Overloading Outlets
            </h2>

            <p>
                Connecting too many electrical devices to one outlet
                or power strip can create unnecessary electrical
                stress.
            </p>

            <p>
                Make sure electrical equipment is used according
                to its intended requirements.
            </p>

            <h2>
                Watch for Warning Signs
            </h2>

            <ul>
                <li>
                    Frequent circuit breaker trips.
                </li>

                <li>
                    Burning smells from electrical equipment.
                </li>

                <li>
                    Sparks from outlets or switches.
                </li>

                <li>
                    Damaged electrical cables.
                </li>

                <li>
                    Flickering lights.
                </li>

                <li>
                    Unusual heat around outlets or electrical equipment.
                </li>
            </ul>

            <h2>
                Get Problems Checked
            </h2>

            <p>
                Electrical problems should never be ignored.
                If you notice something unusual, turn off the
                affected equipment where appropriate and seek
                professional electrical assistance.
            </p>

            <p>
                Electrical safety starts with proper installation,
                regular inspection and responsible use of electrical
                equipment.
            </p>
        `,

        status:
            "published"
    },


    /* =====================================================
       ARTICLE 2
    ===================================================== */

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

        content: `
            <p>
                Solar energy can provide an alternative way to
                generate electricity for homes and other properties.
            </p>

            <h2>
                What Is Solar Energy?
            </h2>

            <p>
                Solar energy systems use sunlight to generate
                electrical power. Depending on the system design,
                solar panels can work together with batteries,
                inverters and other equipment.
            </p>

            <h2>
                Why Consider Solar Energy?
            </h2>

            <p>
                Solar energy can be useful for customers looking
                for modern energy solutions and greater flexibility
                in how electricity is generated and used.
            </p>

            <ul>
                <li>
                    Solar panels can generate electricity from sunlight.
                </li>

                <li>
                    Battery systems can provide energy storage.
                </li>

                <li>
                    Solar systems can support different electrical needs.
                </li>

                <li>
                    Proper system design is important for reliable operation.
                </li>
            </ul>

            <h2>
                Proper Planning Is Important
            </h2>

            <p>
                Before installing a solar system, the electrical
                requirements of the property should be considered.
                The available space, expected energy usage,
                equipment requirements and system design all matter.
            </p>

            <p>
                Professional assessment can help determine an
                appropriate energy solution for a particular property.
            </p>
        `,

        status:
            "published"
    },


    /* =====================================================
       ARTICLE 3
    ===================================================== */

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

        content: `
            <p>
                Regular electrical maintenance is an important
                part of keeping homes, businesses and electrical
                systems operating safely and reliably.
            </p>

            <h2>
                Why Electrical Maintenance Matters
            </h2>

            <p>
                Electrical systems can develop problems over time.
                Loose connections, damaged components, overloaded
                circuits and other issues may not always be visible
                immediately.
            </p>

            <p>
                Regular inspection and maintenance can help identify
                potential problems before they become larger and
                more expensive issues.
            </p>

            <h2>
                Benefits of Regular Maintenance
            </h2>

            <ul>
                <li>
                    Helps identify electrical problems early.
                </li>

                <li>
                    Supports electrical safety.
                </li>

                <li>
                    Helps protect electrical equipment.
                </li>

                <li>
                    Can reduce unexpected electrical failures.
                </li>

                <li>
                    Helps maintain reliable electrical systems.
                </li>
            </ul>

            <h2>
                Professional Electrical Support
            </h2>

            <p>
                If you notice unusual electrical behavior,
                damaged wiring, frequent breaker trips or other
                electrical problems, it is important to have the
                system properly inspected.
            </p>

            <p>
                PowerNest Electric provides electrical maintenance,
                troubleshooting and repair services for residential,
                commercial and industrial customers.
            </p>
        `,

        status:
            "published"
    },


    /* =====================================================
       ARTICLE 4
    ===================================================== */

    {
        id:
            "why-electrical-inspection-is-important",

        title:
            "Why Electrical Inspection Is Important",

        category:
            "Electrical Safety",

        date:
            "2026-09-07",

        author:
            "PowerNest Electric",

        image:
            "",

        excerpt:
            "Regular electrical inspections can help identify potential problems and support safer, more reliable electrical systems.",

        content: `
            <p>
                Electrical systems are an important part of homes,
                businesses and industrial facilities. Because
                electrical problems are not always visible,
                regular inspection can play an important role
                in maintaining a safe and reliable system.
            </p>

            <h2>
                What Is an Electrical Inspection?
            </h2>

            <p>
                An electrical inspection involves checking an
                electrical installation and its components to
                identify possible problems, damage, unsafe
                conditions or areas that may require attention.
            </p>

            <h2>
                Why Are Electrical Inspections Important?
            </h2>

            <p>
                Electrical inspections can help identify issues
                before they become more serious problems.
            </p>

            <ul>
                <li>
                    Helps identify damaged or deteriorated components.
                </li>

                <li>
                    Helps identify potential electrical hazards.
                </li>

                <li>
                    Supports reliable operation of electrical systems.
                </li>

                <li>
                    Can help identify maintenance requirements.
                </li>

                <li>
                    Helps property owners understand the condition
                    of their electrical installation.
                </li>
            </ul>

            <h2>
                Warning Signs You Should Not Ignore
            </h2>

            <p>
                Frequent breaker trips, flickering lights,
                unusual electrical smells, overheating outlets,
                damaged cables and sparks can indicate that an
                electrical system needs attention.
            </p>

            <p>
                These warning signs should not be ignored.
                A qualified electrical professional should
                inspect the system and determine the appropriate
                solution.
            </p>

            <h2>
                Professional Electrical Inspection
            </h2>

            <p>
                PowerNest Electric provides electrical support
                for residential, commercial and industrial
                customers.
            </p>

            <p>
                Proper inspection and maintenance can help
                support safer and more dependable electrical
                systems.
            </p>
        `,

        status:
            "published"
    }

];


/* =========================================================
   GET SAVED ARTICLES
========================================================= */

function getSavedArticles() {

    const allSavedArticles = [];


    BLOG_STORAGE_KEYS.forEach(function (key) {

        try {

            const saved =
                localStorage.getItem(key);


            if (!saved) {

                return;

            }


            const parsed =
                JSON.parse(saved);


            if (!Array.isArray(parsed)) {

                return;

            }


            parsed.forEach(function (article) {

                if (!article || !article.id) {

                    return;

                }


                const existingIndex =
                    allSavedArticles.findIndex(
                        function (existingArticle) {

                            return String(existingArticle.id) ===
                                String(article.id);

                        }
                    );


                if (existingIndex === -1) {

                    allSavedArticles.push(article);

                }
                else {

                    /*
                        If the same article exists in more
                        than one storage key, the later version
                        replaces the earlier one.
                    */

                    allSavedArticles[existingIndex] =
                        article;

                }

            });

        }

        catch (error) {

            console.warn(
                "PowerNest Blog: Could not read storage key:",
                key,
                error
            );

        }

    });


    return allSavedArticles;

}


/* =========================================================
   GET ARTICLES
========================================================= */

function getBlogArticles() {

    const savedArticles =
        getSavedArticles();


    /*
        If saved articles exist, use them.
    */

    if (savedArticles.length > 0) {

        /*
            Add any default articles that are not already
            present in saved articles.

            This prevents old localStorage data from
            accidentally hiding newer default articles.
        */

        const mergedArticles =
            [...savedArticles];


        defaultArticles.forEach(function (defaultArticle) {

            const exists =
                mergedArticles.some(
                    function (article) {

                        return String(article.id) ===
                            String(defaultArticle.id);

                    }
                );


            if (!exists) {

                mergedArticles.push(defaultArticle);

            }

        });


        return mergedArticles;

    }


    /*
        No saved articles.
        Return all default articles.
    */

    return [...defaultArticles];

}


/* =========================================================
   SAVE ARTICLES
========================================================= */

function saveBlogArticles(articles) {

    try {

        localStorage.setItem(
            "powerNestArticles",
            JSON.stringify(articles)
        );

    }

    catch (error) {

        console.error(
            "PowerNest Blog: Unable to save articles.",
            error
        );

    }

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatArticleDate(dateString) {

    if (!dateString) {

        return "Date unavailable";

    }


    const date =
        new Date(dateString + "T00:00:00");


    if (Number.isNaN(date.getTime())) {

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

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* =========================================================
   CREATE ARTICLE URL
========================================================= */

function getArticleURL(article) {

    return (
        `article.html?id=${encodeURIComponent(article.id)}`
    );

}


/* =========================================================
   ARTICLE IMAGE
========================================================= */

function getArticleImage(article) {

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
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">

        <div
            class="blog-placeholder-icon"
            style="display:none;">

            ⚡

        </div>

    `;

}


/* =========================================================
   CREATE BLOG CARD
========================================================= */

function createBlogCard(article) {

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

                    <span>

                        •

                    </span>

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
   SORT ARTICLES
   Newest article first.
========================================================= */

function sortArticlesNewestFirst(articles) {

    return [...articles].sort(
        function (a, b) {

            const dateA =
                new Date(
                    a.date || "1970-01-01"
                ).getTime();


            const dateB =
                new Date(
                    b.date || "1970-01-01"
                ).getTime();


            return dateB - dateA;

        }
    );

}


/* =========================================================
   GET PUBLISHED ARTICLES
========================================================= */

function getPublishedArticles() {

    const articles =
        getBlogArticles();


    return sortArticlesNewestFirst(

        articles.filter(
            function (article) {

                return (

                    article.status ===
                    "published"

                    ||

                    !article.status

                );

            }
        )

    );

}


/* =========================================================
   DISPLAY BLOG ARTICLES
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

        return;

    }


    container.innerHTML =
        articles
            .map(createBlogCard)
            .join("");

}


/* =========================================================
   SEARCH ARTICLES
========================================================= */

function searchBlogArticles(searchTerm) {

    const articles =
        getPublishedArticles();


    const term =
        String(searchTerm || "")
            .trim()
            .toLowerCase();


    if (!term) {

        return articles;

    }


    return articles.filter(
        function (article) {

            const title =
                String(
                    article.title || ""
                ).toLowerCase();


            const category =
                String(
                    article.category || ""
                ).toLowerCase();


            const excerpt =
                String(
                    article.excerpt || ""
                ).toLowerCase();


            const content =
                String(
                    article.content || ""
                ).toLowerCase();


            return (

                title.includes(term)

                ||

                category.includes(term)

                ||

                excerpt.includes(term)

                ||

                content.includes(term)

            );

        }
    );

}


/* =========================================================
   DISPLAY SEARCH RESULTS
========================================================= */

function displaySearchResults(searchTerm) {

    const container =
        document.getElementById(
            "blogArticles"
        );


    if (!container) {

        return;

    }


    const results =
        searchBlogArticles(searchTerm);


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

function filterBlogByCategory(category) {

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

                return (

                    String(
                        article.category || ""
                    ) ===
                    String(category)

                );

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

function getArticleById(articleId) {

    if (!articleId) {

        return null;

    }


    const articles =
        getBlogArticles();


    return articles.find(
        function (article) {

            return (
                String(article.id) ===
                String(articleId)
            );

        }
    ) || null;

}


/* =========================================================
   GET RELATED ARTICLES
========================================================= */

function getRelatedArticles(
    currentArticle,
    limit = 3
) {

    if (!currentArticle) {

        return [];

    }


    const articles =
        getPublishedArticles();


    return articles

        .filter(
            function (article) {

                return (
                    String(article.id) !==
                    String(currentArticle.id)
                );

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


                return (
                    sameCategoryB -
                    sameCategoryA
                );

            }
        )

        .slice(0, limit);

}


/* =========================================================
   DISPLAY SINGLE ARTICLE
   Kept for compatibility with article.html/article.js.
========================================================= */

function displaySingleArticle() {

    /*
        The actual single-article page is handled
        by js/article.js.

        This function remains here so that older
        pages or code calling PowerNestBlog.displaySingleArticle()
        will not break.
    */

    const articleContent =
        document.getElementById(
            "articleContent"
        );


    if (!articleContent) {

        return;

    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const articleId =
        params.get("id");


    if (!articleId) {

        return;

    }


    const article =
        getArticleById(articleId);


    if (!article) {

        return;

    }


    /*
        Only populate elements that actually exist.
        This prevents conflicts with article.js.
    */

    const titleElement =
        document.getElementById(
            "articleTitle"
        );


    const categoryElement =
        document.getElementById(
            "articleCategory"
        );


    const dateElement =
        document.getElementById(
            "articleDate"
        );


    const authorElement =
        document.getElementById(
            "articleAuthor"
        );


    const bodyElement =
        document.getElementById(
            "articleBody"
        );


    if (titleElement) {

        titleElement.textContent =
            article.title || "";

    }


    if (categoryElement) {

        categoryElement.textContent =
            article.category || "General";

    }


    if (dateElement) {

        dateElement.textContent =
            formatArticleDate(article.date);

    }


    if (authorElement) {

        authorElement.textContent =
            article.author ||
            "PowerNest Electric";

    }


    if (bodyElement) {

        bodyElement.innerHTML =
            article.content || "";

    }


    document.title =
        `${article.title} | PowerNest Electric`;

}


/* =========================================================
   ARTICLE NOT FOUND
========================================================= */

function displayArticleNotFound() {

    const container =
        document.getElementById(
            "articleContent"
        );


    if (!container) {

        return;

    }


    container.innerHTML = `

        <div class="blog-empty-state">

            <h1>
                Article Not Found
            </h1>

            <p>
                Sorry, the article you are looking for
                could not be found.
            </p>

            <a
                href="blog.html"
                class="button">

                ← Back to Blog

            </a>

        </div>

    `;

}


/* =========================================================
   DISPLAY RELATED ARTICLES
========================================================= */

function displayRelatedArticles(
    currentArticle
) {

    const container =
        document.getElementById(
            "relatedArticles"
        );


    if (!container || !currentArticle) {

        return;

    }


    const relatedArticles =
        getRelatedArticles(
            currentArticle,
            3
        );


    if (relatedArticles.length === 0) {

        container.innerHTML = `

            <p>
                No related articles available yet.
            </p>

        `;

        return;

    }


    container.innerHTML =
        relatedArticles

            .map(
                function (article) {

                    return `

                        <article
                            class="related-article">

                            <a
                                href="${getArticleURL(article)}">

                                <div
                                    class="related-article-image">

                                    ${getArticleImage(article)}

                                </div>


                                <div
                                    class="related-article-content">

                                    <span
                                        class="blog-category">

                                        ${escapeHTML(
                                            article.category ||
                                            "General"
                                        )}

                                    </span>


                                    <h3>

                                        ${escapeHTML(
                                            article.title
                                        )}

                                    </h3>


                                    <span>

                                        ${formatArticleDate(
                                            article.date
                                        )}

                                    </span>

                                </div>

                            </a>

                        </article>

                    `;

                }
            )

            .join("");

}


/* =========================================================
   SEARCH FORM
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
   CATEGORY FILTER SETUP
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
   Updates the Blog if Admin is open in another tab.
========================================================= */

window.addEventListener(
    "storage",
    function (event) {

        if (
            BLOG_STORAGE_KEYS.includes(
                event.key
            )
        ) {

            displayBlogArticles();

            displayHomeBlogPreview();

        }

    }
);


/* =========================================================
   INITIALIZE BLOG
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
            Only initialize blog listing if the
            blog listing exists on this page.
        */

        displayBlogArticles();


        /*
            Home page blog preview.
        */

        displayHomeBlogPreview();


        /*
            Search and category controls.
        */

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

    displaySingleArticle:
        displaySingleArticle,

    searchBlogArticles:
        searchBlogArticles,

    filterBlogByCategory:
        filterBlogByCategory,

    displayRelatedArticles:
        displayRelatedArticles

};


/* =========================================================
   END OF BLOG JAVASCRIPT
========================================================= */