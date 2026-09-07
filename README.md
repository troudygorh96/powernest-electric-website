# powernest-electric-website/* =========================================================
   POWERNEST ELECTRIC
   ADMIN DASHBOARD
========================================================= */


/*
    DEVELOPMENT LOGIN

    IMPORTANT:
    This is NOT production security.

    Username:
    admin

    Password:
    PowerNest2025
*/


const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "PowerNest2025";

const SESSION_KEY =
    "powernestAdminLoggedIn";


/* =========================================================
   DEFAULT BLOG POSTS
========================================================= */

const ADMIN_DEFAULT_POSTS = [

    {
        id: "electrical-safety-home",
        title: "Electrical Safety Tips Every Homeowner Should Know",
        category: "Electrical Safety",
        date: "2025-08-01",
        image: "photos/RESIDENTIAL%20WORK/01.jpg",

        excerpt:
            "Simple electrical safety practices can help reduce risks and protect homes, people and equipment.",

        content: `
            <p>
                Electrical systems are an important part of every modern home.
                However, electrical equipment and wiring should always be
                treated carefully.
            </p>

            <h2>Inspect Electrical Problems Early</h2>

            <p>
                Flickering lights, damaged outlets, unusual smells, sparks
                and frequently tripping breakers should not simply be ignored.
            </p>

            <h2>Avoid Overloading Outlets</h2>

            <p>
                Avoid connecting too many high-power appliances to one outlet
                or extension arrangement.
            </p>

            <h2>Use Qualified Electrical Support</h2>

            <p>
                Electrical installation, repairs and major wiring work should
                be handled carefully by appropriately qualified professionals.
            </p>
        `
    },


    {
        id: "electrical-maintenance",
        title: "Why Regular Electrical Maintenance Matters",
        category: "Maintenance",
        date: "2025-08-05",
        image: "photos/INDUSTRIAL%20WORK/1000277400.jpg",

        excerpt:
            "Regular electrical inspection and maintenance can help identify problems before they become larger issues.",

        content: `
            <p>
                Electrical systems require attention over time. Regular
                maintenance can help identify damaged components,
                connection problems and other issues.
            </p>

            <h2>Identify Problems Early</h2>

            <p>
                Maintenance gives property owners an opportunity to identify
                electrical problems before they become more complicated.
            </p>

            <h2>Protect Electrical Equipment</h2>

            <p>
                Proper maintenance can help keep electrical systems operating
                reliably.
            </p>
        `
    },


    {
        id: "solar-energy-basics",
        title: "Understanding Solar and Energy Solutions",
        category: "Solar & Energy",
        date: "2025-08-10",
        image: "photos/SOLAR%20%26%20ENERGY/01.jpg",

        excerpt:
            "Solar energy can form part of a modern power strategy when properly planned around electrical requirements.",

        content: `
            <p>
                Solar energy is becoming an important part of discussions
                about modern electricity and energy solutions.
            </p>

            <h2>Understand Your Power Requirements</h2>

            <p>
                Before selecting a solar or energy solution, it is useful
                to understand what equipment needs power.
            </p>

            <h2>Professional Planning Matters</h2>

            <p>
                Proper planning helps ensure that an energy solution is
                suitable for the intended application.
            </p>
        `
    }

];


/* =========================================================
   STORAGE FUNCTIONS
========================================================= */

function getAdminPosts() {

    try {

        const stored =
            localStorage.getItem(
                "powernestBlogPosts"
            );

        if (stored) {

            const posts =
                JSON.parse(stored);

            if (Array.isArray(posts)) {
                return posts;
            }

        }

    } catch (error) {

        console.error(error);

    }

    localStorage.setItem(
        "powernestBlogPosts",
        JSON.stringify(ADMIN_DEFAULT_POSTS)
    );

    return ADMIN_DEFAULT_POSTS;

}


function saveAdminPosts(posts) {

    localStorage.setItem(
        "powernestBlogPosts",
        JSON.stringify(posts)
    );

}


/* =========================================================
   LOGIN
========================================================= */

function isLoggedIn() {

    return (
        sessionStorage.getItem(
            SESSION_KEY
        ) === "true"
    );

}


function login() {

    const username =
        document.getElementById(
            "adminUsername"
        ).value.trim();

    const password =
        document.getElementById(
            "adminPassword"
        ).value;


    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        sessionStorage.setItem(
            SESSION_KEY,
            "true"
        );

        showDashboard();

    } else {

        const message =
            document.getElementById(
                "loginMessage"
            );

        message.textContent =
            "Incorrect username or password.";

    }

}


function logout() {

    sessionStorage.removeItem(
        SESSION_KEY
    );

    location.reload();

}


/* =========================================================
   SHOW DASHBOARD
========================================================= */

function showDashboard() {

    const loginSection =
        document.getElementById(
            "loginSection"
        );

    const dashboard =
        document.getElementById(
            "dashboard"
        );

    const headerActions =
        document.getElementById(
            "adminHeaderActions"
        );


    if (loginSection) {
        loginSection.style.display = "none";
    }

    if (dashboard) {
        dashboard.style.display = "block";
    }

    if (headerActions) {
        headerActions.style.display = "flex";
    }


    renderAdminArticles();

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeAdminHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   RENDER ARTICLES
========================================================= */

function renderAdminArticles() {

    const container =
        document.getElementById(
            "adminArticles"
        );

    if (!container) {
        return;
    }


    const posts =
        getAdminPosts()
            .slice()
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            );


    if (!posts.length) {

        container.innerHTML = `
            <p>
                No articles available.
            </p>
        `;

        return;
    }


    container.innerHTML =
        posts.map(
            post => `

                <div
                    class="admin-article">

                    <h3>
                        ${escapeAdminHTML(post.title)}
                    </h3>

                    <small>
                        ${escapeAdminHTML(post.category)}
                        ·
                        ${escapeAdminHTML(post.date)}
                    </small>

                    <p style="margin-top:10px;">
                        ${escapeAdminHTML(post.excerpt)}
                    </p>

                    <div class="admin-actions">

                        <button
                            type="button"
                            class="admin-button"
                            onclick="editArticle('${post.id}')">

                            Edit

                        </button>

                        <button
                            type="button"
                            class="admin-button danger"
                            onclick="deleteArticle('${post.id}')">

                            Delete

                        </button>

                        <a
                            href="article.html?id=${encodeURIComponent(post.id)}"
                            target="_blank"
                            class="admin-button secondary">

                            View

                        </a>

                    </div>

                </div>
            `
        )
        .join("");

}


/* =========================================================
   SAVE ARTICLE
========================================================= */

function saveArticle(event) {

    event.preventDefault();


    const id =
        document.getElementById(
            "articleId"
        ).value.trim();


    const title =
        document.getElementById(
            "articleTitle"
        ).value.trim();


    const category =
        document.getElementById(
            "articleCategory"
        ).value;


    const date =
        document.getElementById(
            "articleDate"
        ).value;


    const image =
        document.getElementById(
            "articleImage"
        ).value.trim();


    const excerpt =
        document.getElementById(
            "articleExcerpt"
        ).value.trim();


    const content =
        document.getElementById(
            "articleContent"
        ).value.trim();


    if (
        !title ||
        !category ||
        !date ||
        !excerpt ||
        !content
    ) {

        alert(
            "Please complete all required fields."
        );

        return;

    }


    let posts =
        getAdminPosts();


    if (id) {

        const index =
            posts.findIndex(
                post =>
                    post.id === id
            );


        if (index !== -1) {

            posts[index] = {

                ...posts[index],

                title,
                category,
                date,
                image:
                    image ||
                    posts[index].image,
                excerpt,
                content

            };

        }

    } else {

        const newId =
            createSlug(title) +
            "-" +
            Date.now();


        posts.unshift({

            id: newId,
            title,
            category,
            date,
            image:
                image ||
                "logo.png",
            excerpt,
            content

        });

    }


    saveAdminPosts(posts);

    clearArticleForm();

    renderAdminArticles();

    alert(
        "Article saved successfully."
    );

}


/* =========================================================
   SLUG
========================================================= */

function createSlug(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

}


/* =========================================================
   EDIT
========================================================= */

function editArticle(id) {

    const posts =
        getAdminPosts();


    const post =
        posts.find(
            item =>
                item.id === id
        );


    if (!post) {
        return;
    }


    document.getElementById(
        "articleId"
    ).value = post.id;


    document.getElementById(
        "articleTitle"
    ).value = post.title;


    document.getElementById(
        "articleCategory"
    ).value = post.category;


    document.getElementById(
        "articleDate"
    ).value = post.date;


    document.getElementById(
        "articleImage"
    ).value = post.image;


    document.getElementById(
        "articleExcerpt"
    ).value = post.excerpt;


    document.getElementById(
        "articleContent"
    ).value = post.content;


    document.getElementById(
        "formTitle"
    ).textContent =
        "Edit Article";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   DELETE
========================================================= */

function deleteArticle(id) {

    const posts =
        getAdminPosts();


    const post =
        posts.find(
            item =>
                item.id === id
        );


    if (!post) {
        return;
    }


    const confirmed =
        confirm(
            "Delete this article?\n\n" +
            post.title
        );


    if (!confirmed) {
        return;
    }


    const updated =
        posts.filter(
            item =>
                item.id !== id
        );


    saveAdminPosts(updated);

    renderAdminArticles();

}


/* =========================================================
   CLEAR FORM
========================================================= */

function clearArticleForm() {

    document.getElementById(
        "articleForm"
    ).reset();


    document.getElementById(
        "articleId"
    ).value = "";


    document.getElementById(
        "formTitle"
    ).textContent =
        "Add New Article";

}


/* =========================================================
   EXPORT
========================================================= */

function exportBlogData() {

    const posts =
        getAdminPosts();


    const data =
        JSON.stringify(
            posts,
            null,
            2
        );


    const blob =
        new Blob(
            [data],
            {
                type: "application/json"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "powernest-blog-backup.json";


    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

}


/* =========================================================
   IMPORT
========================================================= */

function importBlogData(event) {

    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload =
        function () {

            try {

                const posts =
                    JSON.parse(
                        reader.result
                    );


                if (!Array.isArray(posts)) {

                    throw new Error(
                        "Invalid format"
                    );

                }


                saveAdminPosts(posts);

                renderAdminArticles();


                alert(
                    "Blog data imported successfully."
                );


            } catch (error) {

                alert(
                    "Could not import the selected JSON file."
                );

            }

        };


    reader.readAsText(file);

}


/* =========================================================
   RESET
========================================================= */

function resetBlog() {

    const confirmed =
        confirm(
            "Reset the blog to the original demo articles?"
        );


    if (!confirmed) {
        return;
    }


    saveAdminPosts(
        ADMIN_DEFAULT_POSTS
    );


    renderAdminArticles();

    clearArticleForm();

    alert(
        "Demo blog has been reset."
    );

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const loginForm =
            document.getElementById(
                "loginForm"
            );


        if (loginForm) {

            loginForm.addEventListener(
                "submit",
                login
            );

        }


        const logoutButton =
            document.getElementById(
                "logoutButton"
            );


        if (logoutButton) {

            logoutButton.addEventListener(
                "click",
                logout
            );

        }


        const articleForm =
            document.getElementById(
                "articleForm"
            );


        if (articleForm) {

            articleForm.addEventListener(
                "submit",
                saveArticle
            );

        }


        const clearButton =
            document.getElementById(
                "cancelEditButton"
            );


        if (clearButton) {

            clearButton.addEventListener(
                "click",
                clearArticleForm
            );

        }


        const exportButton =
            document.getElementById(
                "exportButton"
            );


        if (exportButton) {

            exportButton.addEventListener(
                "click",
                exportBlogData
            );

        }


        const importFile =
            document.getElementById(
                "importFile"
            );


        if (importFile) {

            importFile.addEventListener(
                "change",
                importBlogData
            );

        }


        const resetButton =
            document.getElementById(
                "resetBlogButton"
            );


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                resetBlog
            );

        }


        if (isLoggedIn()) {

            showDashboard();

        }

    }
);