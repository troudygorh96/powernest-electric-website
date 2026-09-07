/* =========================================================
   POWERNEST ELECTRIC
   ARTICLE PAGE JAVASCRIPT
   FINAL VERSION
========================================================= */

"use strict";


/* =========================================================
   STORAGE KEY
========================================================= */

const ARTICLE_STORAGE_KEY = "powerNestArticles";


/* =========================================================
   DEFAULT ARTICLES
========================================================= */

const defaultArticles = [

    {
        id: "electrical-maintenance",
        title: "Why Regular Electrical Maintenance Matters",
        category: "Maintenance",
        date: "2025-08-10",
        author: "PowerNest Electric",
        image: "",
        excerpt:
            "Regular inspections and maintenance can help identify electrical problems before they become bigger issues.",
        status: "published",

        content: `
            <p>
                Regular electrical maintenance is an important
                part of keeping homes, businesses and electrical
                systems operating safely and reliably.
            </p>

            <h2>Why Electrical Maintenance Matters</h2>

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
        `
    },


    {
        id: "solar-energy-for-homes",
        title: "Understanding Solar Energy for Your Home",
        category: "Solar & Energy",
        date: "2025-08-05",
        author: "PowerNest Electric",
        image: "",
        excerpt:
            "Learn some basic considerations when exploring solar and modern energy solutions.",
        status: "published",

        content: `
            <p>
                Solar energy can provide an alternative way to
                generate electricity for homes and other properties.
            </p>

            <h2>What Is Solar Energy?</h2>

            <p>
                Solar energy systems use sunlight to generate
                electrical power. Depending on the system design,
                solar panels can work together with batteries,
                inverters and other equipment.
            </p>

            <h2>Why Consider Solar Energy?</h2>

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

            <h2>Proper Planning Is Important</h2>

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
        `
    },


    {
        id: "electrical-safety-tips",
        title: "Electrical Safety Tips Every Homeowner Should Know",
        category: "Electrical Safety",
        date: "2025-08-01",
        author: "PowerNest Electric",
        image: "",
        excerpt:
            "Simple electrical safety practices can help protect homes, families and electrical equipment.",
        status: "published",

        content: `
            <p>
                Electricity is an essential part of modern homes,
                but electrical systems must always be treated with
                care and respect.
            </p>

            <h2>Keep Electrical Systems in Good Condition</h2>

            <p>
                Damaged cables, broken outlets, exposed wires and
                faulty electrical equipment should not be ignored.
                Electrical problems should be inspected and repaired
                by a qualified professional.
            </p>

            <h2>Avoid Overloading Outlets</h2>

            <p>
                Connecting too many electrical devices to one outlet
                or power strip can create unnecessary electrical
                stress.
            </p>

            <p>
                Make sure electrical equipment is used according
                to its intended requirements.
            </p>

            <h2>Watch for Warning Signs</h2>

            <ul>
                <li>Frequent circuit breaker trips.</li>
                <li>Burning smells from electrical equipment.</li>
                <li>Sparks from outlets or switches.</li>
                <li>Damaged electrical cables.</li>
                <li>Flickering lights.</li>
                <li>Unusual heat around outlets or equipment.</li>
            </ul>

            <h2>Get Problems Checked</h2>

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
        `
    },


    {
        id: "why-electrical-inspection-is-important",
        title: "Why Electrical Inspection Is Important",
        category: "Electrical Safety",
        date: "2026-09-07",
        author: "PowerNest Electric",
        image: "",
        excerpt:
            "Regular electrical inspections can help identify potential problems and support safer, more reliable electrical systems.",
        status: "published",

        content: `
            <p>
                Electrical systems are an important part of homes,
                businesses and industrial facilities. Because
                electrical problems are not always visible,
                regular inspection can play an important role
                in maintaining a safe and reliable system.
            </p>

            <h2>What Is an Electrical Inspection?</h2>

            <p>
                An electrical inspection involves checking an
                electrical installation and its components to
                identify possible problems, damage, unsafe
                conditions or areas that may require attention.
            </p>

            <h2>Why Are Electrical Inspections Important?</h2>

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

            <h2>Warning Signs You Should Not Ignore</h2>

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

            <h2>Professional Electrical Inspection</h2>

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
        `
    }

];


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    if (value === null || value === undefined) {
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
   FORMAT DATE
========================================================= */

function formatArticleDate(dateString) {

    if (!dateString) {
        return "";
    }

    const date = new Date(dateString + "T00:00:00");

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}


/* =========================================================
   GET ARTICLES
   IMPORTANT:
   Merge saved Admin articles with default articles.
========================================================= */

function getArticles() {

    let savedArticles = [];

    try {

        const saved =
            localStorage.getItem(ARTICLE_STORAGE_KEY);

        if (saved) {

            const parsed = JSON.parse(saved);

            if (Array.isArray(parsed)) {
                savedArticles = parsed;
            }

        }

    } catch (error) {

        console.warn(
            "PowerNest Electric: Could not read saved articles.",
            error
        );

    }


    /*
        Start with the default articles.
    */

    const mergedArticles = [...defaultArticles];


    /*
        Add or replace defaults with saved articles.
    */

    savedArticles.forEach(function (savedArticle) {

        if (!savedArticle || !savedArticle.id) {
            return;
        }


        const existingIndex =
            mergedArticles.findIndex(function (article) {

                return String(article.id) ===
                    String(savedArticle.id);

            });


        if (existingIndex >= 0) {

            /*
                Saved Admin version replaces default version.
            */

            mergedArticles[existingIndex] = {
                ...mergedArticles[existingIndex],
                ...savedArticle
            };

        } else {

            /*
                New article created from Admin.
            */

            mergedArticles.push(savedArticle);

        }

    });


    return mergedArticles;
}


/* =========================================================
   GET ARTICLE ID
========================================================= */

function getArticleId() {

    const params =
        new URLSearchParams(window.location.search);

    return params.get("id");
}


/* =========================================================
   FIND ARTICLE
========================================================= */

function findArticle(articleId) {

    if (!articleId) {
        return null;
    }

    const articles = getArticles();

    return articles.find(function (article) {

        return String(article.id) ===
            String(articleId);

    }) || null;
}


/* =========================================================
   SHOW ARTICLE
========================================================= */

function displayArticle(article) {

    if (!article) {

        displayArticleNotFound();

        return;
    }


    /*
        Make sure article page is visible.
    */

    const articlePage =
        document.querySelector(".article-page");

    if (articlePage) {
        articlePage.style.display = "";
    }


    /*
        Hide not found message.
    */

    const notFound =
        document.getElementById("articleNotFound");

    if (notFound) {
        notFound.style.display = "none";
    }


    /*
        Page title.
    */

    document.title =
        `${article.title} | PowerNest Electric`;


    /*
        Meta description.
    */

    const metaDescription =
        document.getElementById(
            "articleMetaDescription"
        );

    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            article.excerpt ||
            article.title ||
            "PowerNest Electric article."
        );

    }


    /*
        Article title.
    */

    const title =
        document.getElementById("articleTitle");

    if (title) {

        title.textContent =
            article.title ||
            "PowerNest Electric";

    }


    /*
        Category.
    */

    const category =
        document.getElementById("articleCategory");

    if (category) {

        category.textContent =
            article.category ||
            "Electrical & Energy";

    }


    /*
        Date + author.
    */

    const meta =
        document.getElementById("articleMeta");

    if (meta) {

        meta.innerHTML = `

            <span>
                ${escapeHTML(
                    formatArticleDate(article.date)
                )}
            </span>

            <span>•</span>

            <span>
                ${escapeHTML(
                    article.author ||
                    "PowerNest Electric"
                )}
            </span>

        `;

    }


    /*
        Featured image.
    */

    displayArticleImage(article);


    /*
        Article excerpt.
    */

    const excerpt =
        document.getElementById("articleExcerpt");

    if (excerpt) {

        if (article.excerpt) {

            excerpt.textContent =
                article.excerpt;

            excerpt.style.display =
                "block";

        } else {

            excerpt.style.display =
                "none";

        }

    }


    /*
        Main article content.
    */

    const content =
        document.getElementById("articleContent");

    if (content) {

        content.innerHTML =
            article.content ||
            "<p>This article does not have any content yet.</p>";

    }


    /*
        Related articles.
    */

    displayRelatedArticles(article);

}


/* =========================================================
   FEATURED IMAGE
========================================================= */

function displayArticleImage(article) {

    const container =
        document.getElementById(
            "articleImageContainer"
        );

    const image =
        document.getElementById(
            "articleImage"
        );


    if (!container || !image) {
        return;
    }


    if (article.image) {

        image.src =
            article.image;

        image.alt =
            article.title ||
            "PowerNest Electric article image";


        image.onerror = function () {

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
   RELATED ARTICLES
========================================================= */

function displayRelatedArticles(currentArticle) {

    const container =
        document.getElementById(
            "relatedArticles"
        );


    if (!container) {
        return;
    }


    const articles =
        getArticles()
            .filter(function (article) {

                return (
                    String(article.id) !==
                    String(currentArticle.id)
                );

            })
            .filter(function (article) {

                return (
                    article.status === "published" ||
                    !article.status
                );

            });


    /*
        Same category first.
    */

    articles.sort(function (a, b) {

        const aSame =
            a.category === currentArticle.category
                ? 1
                : 0;

        const bSame =
            b.category === currentArticle.category
                ? 1
                : 0;

        return bSame - aSame;

    });


    const related =
        articles.slice(0, 3);


    if (related.length === 0) {

        container.innerHTML = `
            <p>
                No related articles available yet.
            </p>
        `;

        return;
    }


    container.innerHTML =
        related.map(function (article) {

            return `

                <article class="related-article">

                    <a
                        href="article.html?id=${encodeURIComponent(article.id)}">

                        <div class="related-article-image">

                            ${
                                article.image
                                    ? `
                                        <img
                                            src="${escapeHTML(article.image)}"
                                            alt="${escapeHTML(article.title)}">
                                      `
                                    : `
                                        <div class="blog-placeholder-icon">
                                            ⚡
                                        </div>
                                      `
                            }

                        </div>


                        <div class="related-article-content">

                            <span class="blog-category">

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

                                ${escapeHTML(
                                    formatArticleDate(article.date)
                                )}

                            </span>

                        </div>

                    </a>

                </article>

            `;

        }).join("");

}


/* =========================================================
   ARTICLE NOT FOUND
========================================================= */

function displayArticleNotFound() {

    const articlePage =
        document.querySelector(".article-page");

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
   INITIALIZE
========================================================= */

function initializeArticlePage() {

    const articleId =
        getArticleId();


    console.log(
        "PowerNest Article ID:",
        articleId
    );


    const article =
        findArticle(articleId);


    console.log(
        "PowerNest Article:",
        article
    );


    if (!article) {

        displayArticleNotFound();

        return;

    }


    displayArticle(article);

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeArticlePage();

    }
);