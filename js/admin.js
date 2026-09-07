/* =========================================================
   POWERNEST ELECTRIC
   ADMIN DASHBOARD JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   DEMO ADMIN LOGIN
=========================================================

   IMPORTANT:
   This is suitable for local development/testing only.

   Before publishing the website publicly, replace this
   browser-based authentication with secure server-side
   authentication and a database.
========================================================= */

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "PowerNest2025";


/* =========================================================
   STORAGE KEYS
========================================================= */

const ARTICLES_STORAGE_KEY =
    "powernest_articles";

const LOGIN_STORAGE_KEY =
    "powernest_admin_logged_in";


/* =========================================================
   DEFAULT ARTICLES
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
<p>Electrical safety is important in every home. Small electrical problems can become serious when they are ignored.</p>

<h2>Inspect electrical equipment regularly</h2>

<p>Check electrical outlets, switches, extension cords and appliances for visible damage or unusual signs.</p>

<h2>Avoid overloaded outlets</h2>

<p>Do not connect too many appliances to one electrical outlet or extension board.</p>

<h2>Keep electrical equipment away from water</h2>

<p>Water and electricity can create dangerous situations. Keep electrical equipment and connections away from wet areas.</p>

<h2>Contact a qualified professional</h2>

<p>If you notice electrical problems that you cannot safely handle, contact an electrical professional for inspection and repair.</p>

<p>PowerNest Electric is committed to safety-focused electrical solutions for homes, businesses and industries in Liberia.</p>
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
<p>Solar energy can provide an alternative source of electrical power for homes and businesses.</p>

<h2>What is solar energy?</h2>

<p>Solar energy systems use sunlight to generate electrical power through solar panels.</p>

<h2>Why consider solar?</h2>

<p>Solar systems can support electrical needs and may be useful where reliable power is an important consideration.</p>

<h2>Professional assessment matters</h2>

<p>Before installing a solar system, the electrical requirements of the property should be properly assessed.</p>

<p>The size of the system, expected electrical load, available space and energy requirements should all be considered.</p>

<p>PowerNest Electric can discuss your electrical and energy requirements and help you understand possible solutions.</p>
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
<p>Regular electrical maintenance can help identify problems before they develop into larger electrical issues.</p>

<h2>Why maintenance is important</h2>

<p>Electrical systems contain many components that require proper inspection and maintenance.</p>

<h2>Early identification of problems</h2>

<p>Regular inspection can help identify damaged components, loose connections and other issues that may require attention.</p>

<h2>Maintenance for businesses</h2>

<p>Businesses depend on electrical systems for lighting, equipment and daily operations. Proper maintenance can help keep these systems operating reliably.</p>

<h2>Professional electrical support</h2>

<p>Electrical maintenance should be carried out safely and appropriately. When a problem requires professional attention, contact an electrical service provider.</p>

<p>PowerNest Electric provides electrical maintenance, troubleshooting and repair services in Liberia.</p>
`,
        status: "published"
    }

];


/* =========================================================
   GET ARTICLES
========================================================= */

function getArticles() {

    try {

        const saved =
            localStorage.getItem(
                ARTICLES_STORAGE_KEY
            );


        if (!saved) {

            localStorage.setItem(
                ARTICLES_STORAGE_KEY,
                JSON.stringify(defaultArticles)
            );

            return [...defaultArticles];

        }


        const articles =
            JSON.parse(saved);


        if (!Array.isArray(articles)) {

            return [...defaultArticles];

        }


        return articles;

    } catch (error) {

        console.error(
            "Unable to read articles:",
            error
        );

        return [...defaultArticles];

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
            "Unable to save articles:",
            error
        );

        return false;

    }

}


/* =========================================================
   ELEMENT REFERENCES
========================================================= */

const loginSection =
    document.getElementById(
        "loginSection"
    );

const dashboardSection =
    document.getElementById(
        "dashboardSection"
    );

const adminLoginForm =
    document.getElementById(
        "adminLoginForm"
    );

const adminUsername =
    document.getElementById(
        "adminUsername"
    );

const adminPassword =
    document.getElementById(
        "adminPassword"
    );

const loginMessage =
    document.getElementById(
        "loginMessage"
    );

const logoutButton =
    document.getElementById(
        "logoutButton"
    );

const adminUserLabel =
    document.getElementById(
        "adminUserLabel"
    );


/* =========================================================
   DASHBOARD ELEMENTS
========================================================= */

const newArticleButton =
    document.getElementById(
        "newArticleButton"
    );

const articleEditorSection =
    document.getElementById(
        "articleEditorSection"
    );

const articleForm =
    document.getElementById(
        "articleForm"
    );

const editorHeading =
    document.getElementById(
        "editorHeading"
    );

const cancelEditorButton =
    document.getElementById(
        "cancelEditorButton"
    );

const cancelArticleButton =
    document.getElementById(
        "cancelArticleButton"
    );

const editorMessage =
    document.getElementById(
        "editorMessage"
    );


/* =========================================================
   ARTICLE FORM ELEMENTS
========================================================= */

const articleId =
    document.getElementById(
        "articleId"
    );

const articleTitleInput =
    document.getElementById(
        "articleTitleInput"
    );

const articleCategoryInput =
    document.getElementById(
        "articleCategoryInput"
    );

const articleDateInput =
    document.getElementById(
        "articleDateInput"
    );

const articleAuthorInput =
    document.getElementById(
        "articleAuthorInput"
    );

const articleImageInput =
    document.getElementById(
        "articleImageInput"
    );

const articleExcerptInput =
    document.getElementById(
        "articleExcerptInput"
    );

const articleContentInput =
    document.getElementById(
        "articleContentInput"
    );

const articleStatusInput =
    document.getElementById(
        "articleStatusInput"
    );


/* =========================================================
   ARTICLE MANAGEMENT ELEMENTS
========================================================= */

const articleFilter =
    document.getElementById(
        "articleFilter"
    );

const adminArticlesTable =
    document.getElementById(
        "adminArticlesTable"
    );


/* =========================================================
   STAT ELEMENTS
========================================================= */

const totalArticles =
    document.getElementById(
        "totalArticles"
    );

const publishedArticles =
    document.getElementById(
        "publishedArticles"
    );

const draftArticles =
    document.getElementById(
        "draftArticles"
    );

const latestArticleDate =
    document.getElementById(
        "latestArticleDate"
    );


/* =========================================================
   DELETE MODAL ELEMENTS
========================================================= */

const deleteModal =
    document.getElementById(
        "deleteModal"
    );

const closeDeleteModal =
    document.getElementById(
        "closeDeleteModal"
    );

const confirmDeleteButton =
    document.getElementById(
        "confirmDeleteButton"
    );

const cancelDeleteButton =
    document.getElementById(
        "cancelDeleteButton"
    );


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

                    loginMessage.classList.add(
                        "error"
                    );

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

        loginSection.style.display =
            "none";

    }


    if (dashboardSection) {

        dashboardSection.style.display =
            "block";

    }


    if (adminUserLabel) {

        adminUserLabel.textContent =
            "Admin";

    }


    renderDashboard();

}


/* =========================================================
   SHOW LOGIN
========================================================= */

function showLogin() {

    if (loginSection) {

        loginSection.style.display =
            "flex";

    }


    if (dashboardSection) {

        dashboardSection.style.display =
            "none";

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
   CHECK LOGIN STATUS
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
        articles.filter(
            function (article) {

                return article.status ===
                    "published";

            }
        );


    const drafts =
        articles.filter(
            function (article) {

                return article.status ===
                    "draft";

            }
        );


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

            latestArticleDate.textContent =
                "—";

        } else {

            const sorted =
                [...articles].sort(
                    function (a, b) {

                        return new Date(b.date) -
                            new Date(a.date);

                    }
                );


            latestArticleDate.textContent =
                formatDate(
                    sorted[0].date
                );

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
        new Date(
            dateString + "T00:00:00"
        );


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
        articles.filter(
            function (article) {

                if (filter === "all") {

                    return true;

                }


                return article.status ===
                    filter;

            }
        );


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


    filteredArticles.sort(
        function (a, b) {

            return new Date(b.date) -
                new Date(a.date);

        }
    );


    adminArticlesTable.innerHTML =
        filteredArticles.map(
            function (article) {

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
                                class="admin-status ${article.status === "published"
                                    ? "published"
                                    : "draft"}">

                                ${article.status === "published"
                                    ? "Published"
                                    : "Draft"}

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

            }
        ).join("");


    attachArticleActions();

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    if (value === null ||
        value === undefined) {

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


    buttons.forEach(
        function (button) {

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

        }
    );

}


/* =========================================================
   NEW ARTICLE
========================================================= */

if (newArticleButton) {

    newArticleButton.addEventListener(
        "click",
        function () {

            openNewArticleEditor();

        }
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


    articleEditorSection.scrollIntoView(
        {
            behavior: "smooth",
            block: "start"
        }
    );

}


/* =========================================================
   GET TODAY DATE
========================================================= */

function getTodayDate() {

    const today =
        new Date();


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


/* =========================================================
   CANCEL EDITOR
========================================================= */

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
        articles.find(
            function (item) {

                return item.id === id;

            }
        );


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


    articleEditorSection.scrollIntoView(
        {
            behavior: "smooth",
            block: "start"
        }
    );

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


            if (existingId) {

                const index =
                    articles.findIndex(
                        function (article) {

                            return article.id ===
                                existingId;

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


                    if (
                        saveArticles(
                            articles
                        )
                    ) {

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


            articles.push(
                newArticle
            );


            if (
                saveArticles(
                    articles
                )
            ) {

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
   ARTICLE FILTER
========================================================= */

if (articleFilter) {

    articleFilter.addEventListener(
        "change",
        function () {

            renderArticlesTable();

        }
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


/* =========================================================
   CLOSE DELETE MODAL
========================================================= */

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

                        return article.id !==
                            articleToDelete;

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
   CLOSE MODAL WHEN CLICKING BACKGROUND
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

        if (
            event.key === "Escape"
        ) {

            closeDeleteConfirmation();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

checkLoginStatus();