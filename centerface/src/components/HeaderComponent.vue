<template>
    <!-- Header -->
    <header>
        <div class="header-div">
            <h1 class="header-title-logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Centerface Logo">
                </router-link>
            </h1>
            <nav class="nav-bar-big">
                <ul class="nav-items">
                    <li class="nav-item">
                        <router-link to="/">홈</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login">로그인</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/signup">회원가입</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/faq">자주 묻는 질문</router-link>
                    </li>
                </ul>
            </nav>
            <nav class="nav-bar-small">
                <ul class="nav-items">
                    <li class="nav-item">
                        <router-link to="/" class="nav-router">
                            <font-awesome-icon class="nav-icon" :icon="['fas', 'house']" />
                            <span class="icon-span">홈</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-router">
                            <font-awesome-icon class="nav-icon" :icon="['fas', 'right-to-bracket']" />
                            <span class="icon-span">로그인</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/signup" class="nav-router">
                            <font-awesome-icon class="nav-icon" :icon="['fas', 'user-plus']" />
                            <span class="icon-span">회원가입</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/faq" class="nav-router">
                            <font-awesome-icon class="nav-icon" :icon="['fas', 'circle-question']" />
                            <span class="icon-span">FAQ</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <font-awesome-icon class="hamburger-menu" :icon="['fas', 'bars']" @click="toggleNav" />
            <div class="dropdown-menu" :class="{ 'showDropdown': showNav }">
                <ul class="dropdown-ul">
                    <li class="dropdown-li">
                        <router-link to="/">홈</router-link>
                    </li>
                    <li class="dropdown-li">
                        <router-link to="/login">로그인</router-link>
                    </li>
                    <li class="dropdown-li">
                        <router-link to="/signup">회원가입</router-link>
                    </li>
                    <li class="dropdown-li">
                        <router-link to="/faq">자주 묻는 질문</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            showNav: false
        }
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav;
            console.log(this.showNav);
        }
    },
    watch: {
        '$route': function () {
            this.showNav = false;
        }
    }
}
</script>

<style>
header {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
    z-index: 10;
}

.header-div {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1rem 1.5rem;
}

.header-title-logo {
    width: 12rem;
}

.header-title-logo img {
    width: 100%;
}

.nav-items {
    display: flex;
    column-gap: 1.5rem;
}

.nav-item a {
    text-decoration: none;
    color: black;
}

.nav-bar-small {
    display: none;
    ;
}

.hamburger-menu,
.dropdown-menu {
    display: none;
}

/* =============== MEDIA QUERIES ======= */

@media screen and (max-width: 768px) {
    .nav-bar-big {
        display: none;
    }

    .nav-bar-small {
        display: block;
    }

    .header-title-logo img {
        width: 80%;
    }

    .icon-span {
        display: block;
        font-size: 0.7rem;
    }

    .nav-router {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.3rem;
        cursor: pointer;
    }
}

/* =============== MEDIA QUERIES ======= */
@media screen and (max-width: 576px) {
    .icon-span {
        font-size: 4px;
    }

    .nav-router {
        width: 40px;
    }

    .nav-items {
        column-gap: 0.5rem;
    }

    .header-title-logo {
        width: 7rem;
    }

    .header-title-logo img {
        width: 100%;
    }

    .nav-bar-small {
        display: none;
    }

    .hamburger-menu {
        display: block;
        cursor: pointer;
    }

    .dropdown-menu {
        display: block;
        position: absolute;
        width: 150px;
        top: 53px;
        right: 0;
        background-color: #fff;
        z-index: 100;
        text-align: center;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    }

    .dropdown-menu.showDropdown {
        max-height: 300px;
        opacity: 1;
    }

    .dropdown-ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .dropdown-li {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    .dropdown-li:last-child {
        border-bottom: none;
    }

    .dropdown-li a {
        text-decoration: none;
        color: black;
        line-height: 1.5rem;
    }

    .dropdown-li a:hover {
        color: rgb(245, 124, 0);
    }
}
</style>