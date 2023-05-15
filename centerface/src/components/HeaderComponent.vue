<template>
    <!-- Header -->
    <header>
        <div class="header-div">
            <h1 class="header-title-logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Centerface Logo">
                </router-link>
            </h1>
            <nav class="nav-bar">
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
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style>
header {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
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

.nav-item p {
    cursor: pointer;
}
</style>