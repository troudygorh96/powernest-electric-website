/* =========================================================
   POWERNEST ELECTRIC
   ADMIN DASHBOARD JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   DEMO ADMIN LOGIN
========================================================= */

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "PowerNest2025";

/* =========================================================
   STORAGE
========================================================= */

const ARTICLES_STORAGE_KEY = "powernest_articles";
const LOGIN_STORAGE_KEY = "powernest_admin_logged_in";

/* =========================================================
   DEFAULT ARTICLES
   These are only used when the website has no saved
   articles yet.
========================================================= */

const defaultArticles = [
    {
        id: "electrical-safety-tips",
        title: "Electrical Safety Tips Every Homeowner Should Know",
        category: "Electrical Safety",
        date: "2025-08-01",
        author: "PowerNest Electric",
        image: "",
        excerpt:
            "Simple electrical safety practices can help protect homes, families and electrical equipment.",
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
                If you notice something unusual, seek professional
                electrical assistance.
            </p>
        `,
        status: "published"
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
                <li>Solar panels can generate electricity from sunlight.</li>
                <li>Battery systems can provide energy storage.</li>
                <li>Solar systems can support different electrical needs.</li>
                <li>Proper system design is important for reliable operation.</li>
            </ul>

            <h2>Proper Planning Is Important</h2>

            <p>
                Before installing a solar system, the electrical
                requirements of the property should be considered.
            </p>
        `,
        status: "published"
    },

    {
        id: "electrical-maintenance",
        title: "Why Regular Electrical Maintenance Matters",
        category: "Maintenance",
        date: "2025-08-10",
        author: "PowerNest Electric",
        image: "",
        excerpt:
            "Regular inspections and maintenance can help identify electrical problems before they become bigger issues.",
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
                troubleshooting and repair services for residential,
                commercial and industrial customers.
            </p>
        `,
        status: "published"
    }
];

/* =========================================================
   GET ARTICLES
========================================================= */

function getArticles() {
    try {
        const saved = localStorage.getItem(
            ARTICLES_STORAGE_KEY
        );

        if (!saved) {
            const initialArticles = [...defaultArticles];

            localStorage.setItem(
                ARTICLES_STORAGE_KEY,
                JSON.stringify(initialArticles)
            );

            return initialArticles;
        }

        const articles = JSON.parse(saved);

        if (!Array.isArray(articles)) {
            return [];
        }

        return articles;

    } catch (error) {
        console.error(
            "PowerNest Electric: Unable to read articles.",
            error
        );

        return [];
    }
}

/* =========================================================
   SAVE ARTICLES
========================================================= */

function saveArticles(articles) {
    try {
        localStorage.setItem(
            ARTICLES_STORAGE_KEY,
            JSON.stringify(articles)
        );

        return true;

    } catch (error) {
        console.error(
            "PowerNest Electric: Unable to save articles.",
            error
        );

        return false;
    }
}

/* =========================================================
   ELEMENT REFERENCES
========================================================= */

const loginSection =
    document.getElementById("loginSection");

const dashboardSection =
    document.getElementById("dashboardSection");

const adminLoginForm =
    document.getElementById("adminLoginForm");

const adminUsername =
    document.getElementById("adminUsername");

const adminPassword =
    document.getElementById("adminPassword");

const loginMessage =
    document.getElementById("loginMessage");

const logoutButton =
    document.getElementById("logoutButton");

const adminUserLabel =
    document.getElementById("adminUserLabel");

const newArticleButton =
    document.getElementById("newArticleButton");

const articleEditorSection =
    document.getElementById("articleEditorSection");

const articleForm =
    document.getElementById("articleForm");

const editorHeading =
    document.getElementById("editorHeading");

const cancelEditorButton =
    document.getElementById("cancelEditorButton");

const cancelArticleButton =
    document.getElementById("cancelArticleButton");

const editorMessage =
    document.getElementById("editorMessage");

const articleId =
    document.getElementById("articleId");

const articleTitleInput =
    document.getElementById("articleTitleInput");

const articleCategoryInput =
    document.getElementById("articleCategoryInput");

const articleDateInput =
    document.getElementById("articleDateInput");

const articleAuthorInput =
    document.getElementById("articleAuthorInput");

const articleImageInput =
    document.getElementById("articleImageInput");

const articleExcerptInput =
    document.getElementById("articleExcerptInput");

const articleContentInput =
    document.getElementById("articleContentInput");

const articleStatusInput =
    document.getElementById("articleStatusInput");

const articleFilter =
    document.getElementById("articleFilter");

const adminArticlesTable =
    document.getElementById("adminArticlesTable");

const totalArticles =
    document.getElementById("totalArticles");

const publishedArticles =
    document.getElementById("publishedArticles");

const draftArticles =
    document.getElementById("draftArticles");

const latestArticleDate =
    document.getElementById("latestArticleDate");

const deleteModal =
    document.getElementById("deleteModal");

const closeDeleteModal =
    document.getElementById("closeDeleteModal");

const confirmDeleteButton =
    document.getElementById("confirmDeleteButton");

const cancelDeleteButton =
    document.getElementById("cancelDeleteButton");

let articleToDelete = null;

/* =========================================================
   LOGIN
========================================================= */

if (adminLoginForm) {
    adminLoginForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const username =
                adminUsername.value.trim();

            const password =
                adminPassword.value;

            if (
                username === ADMIN_USERNAME &&
                password === ADMIN_PASSWORD
            ) {
                localStorage.setItem(
                    LOGIN_STORAGE_KEY,
                    "true"
                );

                showDashboard();

                adminLoginForm.reset();

                if (loginMessage) {
                    loginMessage.textContent = "";
                }

            } else {

                if (loginMessage) {
                    loginMessage.textContent =
                        "Incorrect username or password.";

                    loginMessage.classList.add("error");
                }
            }
        }
    );
}

/* =========================================================
   SHOW DASHBOARD
========================================================= */

function showDashboard() {

    if (loginSection) {
        loginSection.style.display = "none";
    }

    if (dashboardSection) {
        dashboardSection.style.display = "block";
    }

    if (adminUserLabel) {
        adminUserLabel.textContent = "Admin";
    }

    renderDashboard();
}

/* =========================================================
   SHOW LOGIN
========================================================= */

function showLogin() {

    if (loginSection) {
        loginSection.style.display = "flex";
    }

    if (dashboardSection) {
        dashboardSection.style.display = "none";
    }

    closeEditor();
}

/* =========================================================
   LOGOUT
========================================================= */

if (logoutButton) {
    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                LOGIN_STORAGE_KEY
            );

            showLogin();
        }
    );
}

/* =========================================================
   CHECK LOGIN
========================================================= */

function checkLoginStatus() {

    const loggedIn =
        localStorage.getItem(
            LOGIN_STORAGE_KEY
        );

    if (loggedIn === "true") {
        showDashboard();
    } else {
        showLogin();
    }
}

/* =========================================================
   RENDER DASHBOARD
========================================================= */

function renderDashboard() {
    updateStatistics();
    renderArticlesTable();
}

/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateStatistics() {

    const articles =
        getArticles();

    const published =
        articles.filter(function (article) {
            return article.status === "published";
        });

    const drafts =
        articles.filter(function (article) {
            return article.status === "draft";
        });

    if (totalArticles) {
        totalArticles.textContent =
            articles.length;
    }

    if (publishedArticles) {
        publishedArticles.textContent =
            published.length;
    }

    if (draftArticles) {
        draftArticles.textContent =
            drafts.length;
    }

    if (latestArticleDate) {

        if (articles.length === 0) {

            latestArticleDate.textContent = "—";

        } else {

            const sorted =
                [...articles].sort(function (a, b) {
                    return new Date(b.date) -
                        new Date(a.date);
                });

            latestArticleDate.textContent =
                formatDate(sorted[0].date);
        }
    }
}

/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(dateString) {

    if (!dateString) {
        return "—";
    }

    const date =
        new Date(dateString + "T00:00:00");

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );
}

/* =========================================================
   RENDER ARTICLE TABLE
========================================================= */

function renderArticlesTable() {

    if (!adminArticlesTable) {
        return;
    }

    const articles =
        getArticles();

    const filter =
        articleFilter
            ? articleFilter.value
            : "all";

    const filteredArticles =
        articles.filter(function (article) {

            if (filter === "all") {
                return true;
            }

            return article.status === filter;
        });

    if (filteredArticles.length === 0) {

        adminArticlesTable.innerHTML = `
            <tr>
                <td
                    colspan="5"
                    class="admin-empty-state">
                    No articles found.
                </td>
            </tr>
        `;

        return;
    }

    filteredArticles.sort(function (a, b) {

        return new Date(b.date) -
            new Date(a.date);
    });

    adminArticlesTable.innerHTML =
        filteredArticles.map(function (article) {

            return `
                <tr>

                    <td>
                        <strong>
                            ${escapeHTML(article.title)}
                        </strong>
                    </td>

                    <td>
                        ${escapeHTML(article.category)}
                    </td>

                    <td>
                        ${formatDate(article.date)}
                    </td>

                    <td>
                        <span
                            class="admin-status ${
                                article.status === "published"
                                    ? "published"
                                    : "draft"
                            }">

                            ${
                                article.status === "published"
                                    ? "Published"
                                    : "Draft"
                            }

                        </span>
                    </td>

                    <td>

                        <div class="admin-table-actions">

                            <button
                                type="button"
                                class="admin-action-button edit"
                                data-action="edit"
                                data-id="${escapeHTML(article.id)}">

                                Edit

                            </button>

                            <button
                                type="button"
                                class="admin-action-button view"
                                data-action="view"
                                data-id="${escapeHTML(article.id)}">

                                View

                            </button>

                            <button
                                type="button"
                                class="admin-action-button delete"
                                data-action="delete"
                                data-id="${escapeHTML(article.id)}">

                                Delete

                            </button>

                        </div>

                    </td>

                </tr>
            `;

        }).join("");

    attachArticleActions();
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
   ARTICLE ACTIONS
========================================================= */

function attachArticleActions() {

    const buttons =
        document.querySelectorAll(
            "[data-action]"
        );

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const action =
                    button.getAttribute(
                        "data-action"
                    );

                const id =
                    button.getAttribute(
                        "data-id"
                    );

                if (action === "edit") {
                    editArticle(id);
                }

                if (action === "view") {
                    viewArticle(id);
                }

                if (action === "delete") {
                    openDeleteModal(id);
                }
            }
        );
    });
}

/* =========================================================
   NEW ARTICLE
========================================================= */

if (newArticleButton) {

    newArticleButton.addEventListener(
        "click",
        openNewArticleEditor
    );
}

/* =========================================================
   OPEN NEW ARTICLE EDITOR
========================================================= */

function openNewArticleEditor() {

    if (!articleEditorSection) {
        return;
    }

    if (editorHeading) {
        editorHeading.textContent =
            "Create New Article";
    }

    if (articleForm) {
        articleForm.reset();
    }

    if (articleId) {
        articleId.value = "";
    }

    if (articleAuthorInput) {
        articleAuthorInput.value =
            "PowerNest Electric";
    }

    if (articleDateInput) {
        articleDateInput.value =
            getTodayDate();
    }

    if (articleStatusInput) {
        articleStatusInput.value =
            "published";
    }

    if (editorMessage) {
        editorMessage.textContent = "";
    }

    articleEditorSection.style.display =
        "block";

    articleEditorSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* =========================================================
   TODAY DATE
========================================================= */

function getTodayDate() {

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

/* =========================================================
   CLOSE EDITOR
========================================================= */

function closeEditor() {

    if (articleEditorSection) {
        articleEditorSection.style.display =
            "none";
    }

    if (editorMessage) {
        editorMessage.textContent = "";
    }
}

if (cancelEditorButton) {
    cancelEditorButton.addEventListener(
        "click",
        closeEditor
    );
}

if (cancelArticleButton) {
    cancelArticleButton.addEventListener(
        "click",
        closeEditor
    );
}

/* =========================================================
   EDIT ARTICLE
========================================================= */

function editArticle(id) {

    const articles =
        getArticles();

    const article =
        articles.find(function (item) {

            return String(item.id) ===
                String(id);
        });

    if (!article) {
        return;
    }

    if (editorHeading) {
        editorHeading.textContent =
            "Edit Article";
    }

    articleId.value =
        article.id;

    articleTitleInput.value =
        article.title || "";

    articleCategoryInput.value =
        article.category || "";

    articleDateInput.value =
        article.date || "";

    articleAuthorInput.value =
        article.author ||
        "PowerNest Electric";

    articleImageInput.value =
        article.image || "";

    articleExcerptInput.value =
        article.excerpt || "";

    articleContentInput.value =
        article.content || "";

    articleStatusInput.value =
        article.status ||
        "draft";

    if (editorMessage) {
        editorMessage.textContent = "";
    }

    articleEditorSection.style.display =
        "block";

    articleEditorSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* =========================================================
   SAVE ARTICLE
========================================================= */

if (articleForm) {

    articleForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const title =
                articleTitleInput.value.trim();

            const category =
                articleCategoryInput.value;

            const date =
                articleDateInput.value;

            const author =
                articleAuthorInput.value.trim() ||
                "PowerNest Electric";

            const image =
                articleImageInput.value.trim();

            const excerpt =
                articleExcerptInput.value.trim();

            const content =
                articleContentInput.value.trim();

            const status =
                articleStatusInput.value;

            if (
                !title ||
                !category ||
                !date ||
                !excerpt ||
                !content
            ) {

                showEditorMessage(
                    "Please complete all required fields.",
                    true
                );

                return;
            }

            const articles =
                getArticles();

            const existingId =
                articleId.value.trim();

            /* EDIT */

            if (existingId) {

                const index =
                    articles.findIndex(
                        function (article) {
                            return String(article.id) ===
                                String(existingId);
                        }
                    );

                if (index !== -1) {

                    articles[index] = {
                        ...articles[index],
                        title,
                        category,
                        date,
                        author,
                        image,
                        excerpt,
                        content,
                        status
                    };

                    if (saveArticles(articles)) {

                        showEditorMessage(
                            "Article updated successfully."
                        );

                        renderDashboard();

                        setTimeout(
                            closeEditor,
                            1000
                        );
                    }

                    return;
                }
            }

            /* CREATE */

            const newArticle = {

                id: createArticleId(title),

                title,

                category,

                date,

                author,

                image,

                excerpt,

                content,

                status
            };

            articles.push(newArticle);

            if (saveArticles(articles)) {

                showEditorMessage(
                    "Article created successfully."
                );

                renderDashboard();

                articleForm.reset();

                articleAuthorInput.value =
                    "PowerNest Electric";

                articleId.value = "";

                setTimeout(
                    closeEditor,
                    1000
                );
            }
        }
    );
}

/* =========================================================
   CREATE ARTICLE ID
========================================================= */

function createArticleId(title) {

    const base =
        title
            .toLowerCase()
            .trim()
            .replace(
                /[^a-z0-9]+/g,
                "-"
            )
            .replace(
                /^-+|-+$/g,
                ""
            );

    let id =
        base ||
        "article";

    const articles =
        getArticles();

    let counter = 2;

    while (
        articles.some(
            function (article) {
                return article.id === id;
            }
        )
    ) {

        id =
            `${base}-${counter}`;

        counter++;
    }

    return id;
}

/* =========================================================
   EDITOR MESSAGE
========================================================= */

function showEditorMessage(
    message,
    isError = false
) {

    if (!editorMessage) {
        return;
    }

    editorMessage.textContent =
        message;

    editorMessage.classList.toggle(
        "error",
        isError
    );

    editorMessage.classList.toggle(
        "success",
        !isError
    );
}

/* =========================================================
   FILTER
========================================================= */

if (articleFilter) {

    articleFilter.addEventListener(
        "change",
        renderArticlesTable
    );
}

/* =========================================================
   VIEW ARTICLE
========================================================= */

function viewArticle(id) {

    window.open(
        `article.html?id=${encodeURIComponent(id)}`,
        "_blank",
        "noopener,noreferrer"
    );
}

/* =========================================================
   DELETE MODAL
========================================================= */

function openDeleteModal(id) {

    articleToDelete =
        id;

    if (deleteModal) {
        deleteModal.style.display =
            "flex";
    }
}

function closeDeleteConfirmation() {

    articleToDelete =
        null;

    if (deleteModal) {
        deleteModal.style.display =
            "none";
    }
}

if (closeDeleteModal) {

    closeDeleteModal.addEventListener(
        "click",
        closeDeleteConfirmation
    );
}

if (cancelDeleteButton) {

    cancelDeleteButton.addEventListener(
        "click",
        closeDeleteConfirmation
    );
}

/* =========================================================
   CONFIRM DELETE

   IMPORTANT:
   We remove the article from the ONE shared
   storage array. We do NOT recreate default articles.
========================================================= */

if (confirmDeleteButton) {

    confirmDeleteButton.addEventListener(
        "click",
        function () {

            if (!articleToDelete) {
                return;
            }

            const articles =
                getArticles();

            const updatedArticles =
                articles.filter(
                    function (article) {

                        return String(article.id) !==
                            String(articleToDelete);
                    }
                );

            if (
                saveArticles(
                    updatedArticles
                )
            ) {

                closeDeleteConfirmation();

                renderDashboard();
            }
        }
    );
}

/* =========================================================
   CLOSE MODAL BACKGROUND
========================================================= */

if (deleteModal) {

    deleteModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                deleteModal
            ) {

                closeDeleteConfirmation();
            }
        }
    );
}

/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeDeleteConfirmation();
        }
    }
);

/* =========================================================
   INITIALIZE
========================================================= */

checkLoginStatus();