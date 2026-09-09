/* =========================================================
   POWERNEST ELECTRIC
   ARTICLE PAGE JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   SHARED STORAGE KEY
   MUST MATCH admin.js AND blog.js
========================================================= */

const ARTICLES_STORAGE_KEY = "powernest_articles";


/* =========================================================
   DEFAULT ARTICLES
   These make the original blog articles work even when
   they have not yet been saved through the admin dashboard.
========================================================= */

const DEFAULT_ARTICLES = [

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
                Electrical safety is important in every home.
                Electricity makes modern life easier, but it can
                also become dangerous when electrical systems,
                appliances and wiring are not used or maintained
                properly.
            </p>

            <h2>Keep Electrical Outlets Safe</h2>

            <p>
                Avoid overloading electrical outlets with too many
                appliances. If an outlet becomes hot, damaged,
                loose or produces sparks, stop using it and have it
                inspected by a qualified electrician.
            </p>

            <h2>Check Your Electrical Cords</h2>

            <p>
                Damaged, exposed or frayed electrical cords can
                create a serious safety hazard. Replace damaged
                cords instead of continuing to use them.
            </p>

            <h2>Keep Electricity Away From Water</h2>

            <p>
                Water and electricity are extremely dangerous
                together. Keep electrical appliances and cords
                away from wet areas and never handle electrical
                equipment with wet hands.
            </p>

            <h2>Do Not Ignore Electrical Problems</h2>

            <p>
                Flickering lights, burning smells, buzzing sounds,
                frequent circuit breaker trips and sparking outlets
                can indicate an electrical problem.
            </p>

            <p>
                Do not attempt complicated electrical repairs
                yourself. Contact a qualified electrical
                professional to inspect and repair the system.
            </p>

            <h2>Professional Electrical Safety</h2>

            <p>
                Regular inspection and maintenance can help keep
                your electrical system safe and reliable.
                PowerNest Electric provides electrical installation,
                maintenance, repair and energy solutions for homes,
                businesses and other facilities.
            </p>

            <p>
                If you notice an electrical problem in your home or
                business, contact PowerNest Electric for
                professional assistance.
            </p>
        `
    },


    {
        id: "solar-energy-for-homes",

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
                Solar energy is becoming an increasingly important
                part of modern energy solutions. Solar systems can
                help homes and businesses generate electricity from
                sunlight.
            </p>

            <h2>How Solar Energy Works</h2>

            <p>
                Solar panels capture energy from sunlight and
                convert it into electrical energy. A complete solar
                system may also include an inverter, batteries,
                protection equipment and other components.
            </p>

            <h2>Why Consider Solar Energy?</h2>

            <p>
                Solar energy can provide an alternative source of
                electricity and may help reduce dependence on
                traditional power sources.
            </p>

            <p>
                Solar systems can also be useful in locations where
                reliable electricity supply is a challenge.
            </p>

            <h2>Choosing the Right Solar System</h2>

            <p>
                The right solar system depends on several factors,
                including the amount of electricity required,
                available space, equipment selection and whether
                battery storage is needed.
            </p>

            <p>
                A professional assessment should be carried out
                before installing a solar system so that the system
                can be properly designed for the expected load.
            </p>

            <h2>Professional Solar Installation</h2>

            <p>
                Proper installation is important for the safety,
                performance and reliability of a solar energy
                system.
            </p>

            <p>
                PowerNest Electric provides modern solar and energy
                solutions designed around the needs of homes,
                businesses and other customers.
            </p>
        `
    },


    {
        id: "electrical-maintenance",

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
                Electrical systems require regular attention to
                remain safe, reliable and efficient. Electrical
                problems can sometimes develop slowly before
                becoming serious.
            </p>

            <h2>What Is Electrical Maintenance?</h2>

            <p>
                Electrical maintenance includes inspection,
                testing, troubleshooting, repairs and other work
                carried out to keep an electrical system operating
                properly.
            </p>

            <h2>Why Maintenance Is Important</h2>

            <p>
                Regular maintenance can help identify loose
                connections, damaged components, overloaded
                circuits and other electrical issues before they
                become larger problems.
            </p>

            <h2>Signs Your Electrical System May Need Attention</h2>

            <ul>
                <li>Frequent circuit breaker trips</li>
                <li>Flickering or dimming lights</li>
                <li>Burning smells</li>
                <li>Buzzing or unusual electrical sounds</li>
                <li>Hot electrical outlets or switches</li>
                <li>Damaged electrical cables</li>
            </ul>

            <h2>Maintenance for Homes and Businesses</h2>

            <p>
                Electrical maintenance is useful for residential,
                commercial and industrial environments. Regular
                inspections can help reduce unexpected electrical
                failures and improve system reliability.
            </p>

            <h2>Professional Electrical Maintenance</h2>

            <p>
                Electrical work should be handled by qualified
                professionals, particularly when the work involves
                electrical panels, wiring, protection systems or
                other potentially dangerous equipment.
            </p>

            <p>
                PowerNest Electric provides electrical
                troubleshooting, repairs, inspections and
                maintenance services for homes, businesses and
                industries.
            </p>
        `
    }

];


/* =========================================================
   GET SAVED ARTICLES
========================================================= */

function getSavedArticles() {

    try {

        const saved =
            localStorage.getItem(
                ARTICLES_STORAGE_KEY
            );

        if (!saved) {

            return [];
        }

        const articles =
            JSON.parse(saved);

        if (!Array.isArray(articles)) {

            return [];
        }

        return articles;

    } catch (error) {

        console.error(
            "PowerNest Article: Could not read saved articles.",
            error
        );

        return [];
    }
}


/* =========================================================
   GET ALL ARTICLES
   Saved admin articles are combined with default articles.

   If an admin article has the same ID as a default article,
   the saved/admin version takes priority.
========================================================= */

function getAllArticles() {

    const savedArticles =
        getSavedArticles();

    const articleMap =
        new Map();


    /* Add default articles first */

    DEFAULT_ARTICLES.forEach(
        function (article) {

            articleMap.set(
                String(article.id),
                article
            );

        }
    );


    /* Add saved articles second */

    savedArticles.forEach(
        function (article) {

            if (
                article &&
                article.id !== undefined &&
                article.id !== null
            ) {

                articleMap.set(
                    String(article.id),
                    article
                );
            }

        }
    );


    return Array.from(
        articleMap.values()
    );
}


/* =========================================================
   GET ARTICLE ID FROM URL
========================================================= */

function getArticleId() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return params.get("id");
}


/* =========================================================
   FIND ARTICLE
========================================================= */

function findArticle(
    articleId
) {

    if (!articleId) {

        return null;
    }

    const articles =
        getAllArticles();

    return articles.find(
        function (article) {

            return String(article.id) ===
                String(articleId);

        }
    ) || null;
}


/* =========================================================
   GET PUBLISHED ARTICLES
========================================================= */

function getPublishedArticles() {

    return getAllArticles()

        .filter(
            function (article) {

                /*
                 * Default articles are treated as published.
                 * Saved articles respect their status.
                 */

                return (
                    !article.status ||
                    article.status === "published"
                );

            }
        )

        .sort(
            function (a, b) {

                return new Date(
                    b.date || "1970-01-01"
                ) -
                new Date(
                    a.date || "1970-01-01"
                );

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

        return "";
    }

    const date =
        new Date(
            dateString + "T00:00:00"
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

function escapeHTML(
    value
) {

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
   DISPLAY ARTICLE IMAGE
========================================================= */

function displayArticleImage(
    article
) {

    const container =
        document.getElementById(
            "articleImageContainer"
        );

    const image =
        document.getElementById(
            "articleImage"
        );


    if (
        !container ||
        !image
    ) {

        return;
    }


    if (
        article.image &&
        String(article.image).trim() !== ""
    ) {

        image.src =
            article.image;

        image.alt =
            article.title ||
            "PowerNest Electric article image";


        image.onerror =
            function () {

                console.warn(
                    "PowerNest Article: Image could not be loaded:",
                    article.image
                );

                container.style.display =
                    "none";
            };


        container.style.display =
            "block";

    } else {

        container.style.display =
            "none";
    }
}


/* =========================================================
   DISPLAY ARTICLE
========================================================= */

function displayArticle(
    article
) {

    if (!article) {

        displayArticleNotFound();

        return;
    }


    /*
     * Do not display drafts publicly.
     */

    if (
        article.status &&
        article.status !== "published"
    ) {

        displayArticleNotFound();

        return;
    }


    const articlePage =
        document.querySelector(
            ".article-page"
        );

    if (articlePage) {

        articlePage.style.display =
            "";
    }


    const notFound =
        document.getElementById(
            "articleNotFound"
        );

    if (notFound) {

        notFound.style.display =
            "none";
    }


    /* =====================================================
       PAGE TITLE
    ====================================================== */

    document.title =
        `${article.title || "Article"} | PowerNest Electric`;


    /* =====================================================
       META DESCRIPTION
    ====================================================== */

    const metaDescription =
        document.getElementById(
            "articleMetaDescription"
        );

    if (metaDescription) {

        metaDescription.setAttribute(
            "content",

            article.excerpt ||
            article.title ||
            "PowerNest Electric electrical and energy article."
        );
    }


    /* =====================================================
       ARTICLE TITLE
    ====================================================== */

    const title =
        document.getElementById(
            "articleTitle"
        );

    if (title) {

        title.textContent =
            article.title ||
            "PowerNest Electric";
    }


    /* =====================================================
       ARTICLE CATEGORY
    ====================================================== */

    const category =
        document.getElementById(
            "articleCategory"
        );

    if (category) {

        category.textContent =
            article.category ||
            "Electrical & Energy";
    }


    /* =====================================================
       ARTICLE META
    ====================================================== */

    const meta =
        document.getElementById(
            "articleMeta"
        );

    if (meta) {

        const formattedDate =
            formatArticleDate(
                article.date
            );

        const author =
            article.author ||
            "PowerNest Electric";


        let metaHTML = "";


        if (formattedDate) {

            metaHTML += `
                <span>
                    ${escapeHTML(
                        formattedDate
                    )}
                </span>
            `;
        }


        if (
            formattedDate &&
            author
        ) {

            metaHTML += `
                <span>•</span>
            `;
        }


        if (author) {

            metaHTML += `
                <span>
                    ${escapeHTML(
                        author
                    )}
                </span>
            `;
        }


        meta.innerHTML =
            metaHTML;
    }


    /* =====================================================
       FEATURED IMAGE
    ====================================================== */

    displayArticleImage(
        article
    );


    /* =====================================================
       ARTICLE EXCERPT
    ====================================================== */

    const excerpt =
        document.getElementById(
            "articleExcerpt"
        );

    if (excerpt) {

        if (
            article.excerpt &&
            String(article.excerpt).trim() !== ""
        ) {

            excerpt.textContent =
                article.excerpt;

            excerpt.style.display =
                "block";

        } else {

            excerpt.style.display =
                "none";
        }
    }


    /* =====================================================
       FULL ARTICLE CONTENT
    ====================================================== */

    const content =
        document.getElementById(
            "articleContent"
        );

    if (content) {

        if (
            article.content &&
            String(article.content).trim() !== ""
        ) {

            /*
             * Admin articles may contain simple HTML such as:
             *
             * <p>
             * <h2>
             * <strong>
             * <ul>
             * <li>
             *
             * This is intentionally inserted as HTML so
             * formatted articles display correctly.
             */

            content.innerHTML =
                article.content;

        } else {

            content.innerHTML = `
                <p>
                    This article does not have any content yet.
                </p>
            `;
        }
    }


    /* =====================================================
       RELATED ARTICLES
    ====================================================== */

    displayRelatedArticles(
        article
    );
}


/* =========================================================
   RELATED ARTICLES
========================================================= */

function displayRelatedArticles(
    currentArticle
) {

    const container =
        document.getElementById(
            "relatedArticles"
        );


    if (
        !container ||
        !currentArticle
    ) {

        return;
    }


    /*
     * First find articles from the same category.
     * Then use other published articles if necessary.
     */

    const publishedArticles =
        getPublishedArticles()
            .filter(
                function (article) {

                    return String(
                        article.id
                    ) !==
                    String(
                        currentArticle.id
                    );

                }
            );


    const sameCategory =
        publishedArticles.filter(
            function (article) {

                return (
                    article.category &&
                    currentArticle.category &&
                    article.category ===
                    currentArticle.category
                );

            }
        );


    const otherArticles =
        publishedArticles.filter(
            function (article) {

                return !sameCategory.includes(
                    article
                );

            }
        );


    const relatedArticles =
        sameCategory
            .concat(otherArticles)
            .slice(0, 3);


    /* =====================================================
       NO RELATED ARTICLES
    ====================================================== */

    if (
        relatedArticles.length === 0
    ) {

        container.innerHTML = `
            <p>
                No related articles available yet.
            </p>
        `;

        return;
    }


    /* =====================================================
       BUILD RELATED ARTICLE CARDS
    ====================================================== */

    container.innerHTML =
        relatedArticles

            .map(
                function (article) {

                    const articleTitle =
                        article.title ||
                        "PowerNest Electric Article";


                    const articleCategory =
                        article.category ||
                        "General";


                    const articleDate =
                        formatArticleDate(
                            article.date
                        );


                    let imageHTML = "";


                    if (
                        article.image &&
                        String(
                            article.image
                        ).trim() !== ""
                    ) {

                        imageHTML = `
                            <img
                                src="${escapeHTML(
                                    article.image
                                )}"
                                alt="${escapeHTML(
                                    articleTitle
                                )}"
                                loading="lazy"
                                onerror="this.style.display='none';">
                        `;

                    } else {

                        imageHTML = `
                            <div
                                class="blog-placeholder-icon">

                                ⚡

                            </div>
                        `;
                    }


                    return `
                        <article
                            class="related-article">

                            <a
                                href="${getArticleURL(
                                    article
                                )}">

                                <div
                                    class="related-article-image">

                                    ${imageHTML}

                                </div>


                                <div
                                    class="related-article-content">

                                    <span
                                        class="blog-category">

                                        ${escapeHTML(
                                            articleCategory
                                        )}

                                    </span>


                                    <h3>

                                        ${escapeHTML(
                                            articleTitle
                                        )}

                                    </h3>


                                    ${
                                        articleDate
                                            ? `
                                                <span>
                                                    ${escapeHTML(
                                                        articleDate
                                                    )}
                                                </span>
                                            `
                                            : ""
                                    }

                                </div>

                            </a>

                        </article>
                    `;
                }
            )
            .join("");
}


/* =========================================================
   ARTICLE NOT FOUND
========================================================= */

function displayArticleNotFound() {

    const articlePage =
        document.querySelector(
            ".article-page"
        );

    const notFound =
        document.getElementById(
            "articleNotFound"
        );


    if (articlePage) {

        articlePage.style.display =
            "none";
    }


    if (notFound) {

        notFound.style.display =
            "block";
    }


    document.title =
        "Article Not Found | PowerNest Electric";
}


/* =========================================================
   INITIALIZE ARTICLE PAGE
========================================================= */

function initializeArticlePage() {

    const articleId =
        getArticleId();


    /*
     * If there is no ?id= in the URL,
     * show Article Not Found.
     */

    if (!articleId) {

        displayArticleNotFound();

        return;
    }


    const article =
        findArticle(
            articleId
        );


    if (!article) {

        displayArticleNotFound();

        return;
    }


    displayArticle(
        article
    );
}


/* =========================================================
   START ARTICLE PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",

    function () {

        initializeArticlePage();

    }
);