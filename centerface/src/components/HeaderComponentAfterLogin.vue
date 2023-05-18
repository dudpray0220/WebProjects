<template>
    <!-- Header -->
    <header>
        <div class="header-div-login">
            <h1 class="header-title-logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Centerface Logo">
                </router-link>
            </h1>
            <nav class="nav-bar-big-after-login">
                <ul class="nav-items-after-login">
                    <li class="nav-item">
                        <router-link to="/">홈</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/reservation">회의예약</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/list">회의목록</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/faq">자주 묻는 질문</router-link>
                    </li>
                    <li class="nav-item">
                        <p @click="checkLogout" class="logout-p">로그아웃</p>
                    </li>
                    <li class="nav-item">
                        <router-link to="/mypage/modify" id="profile-wrapper">
                            <img class="profile-image" src="../assets/profile.png" alt="userProfile">
                            <span>{{ $store.state.userId }}</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <nav class="nav-bar-small">
                <ul class="nav-items nav-items-after-login">
                    <li class="nav-item">
                        <router-link to="/" class="nav-router">
                            <font-awesome-icon class="nav-icon" :icon="['fas', 'house']" />
                            <span class="icon-span">홈</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/reservation" class="nav-router">
                            <font-awesome-icon :icon="['fas', 'video']" />
                            <span class="icon-span">회의예약</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/list" class="nav-router">
                            <font-awesome-icon :icon="['fas', 'list']" />
                            <span class="icon-span">회의목록</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/faq" class="nav-router">
                            <font-awesome-icon class="nav-icon" :icon="['fas', 'circle-question']" />
                            <span class="icon-span">FAQ</span>
                        </router-link>
                    </li>
                    <li class="nav-item" @click="checkLogout">
                        <div class="logout-div">
                            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                            <span class="icon-span">로그아웃</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/mypage/modify" id="profile-wrapper" class="nav-router">
                            <font-awesome-icon class="nav-icon" :icon="['fas', 'user']" />
                            <span class="icon-span">{{ $store.state.userId }}</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods: {
        checkLogout() {
            let logoutValue = confirm("정말 로그아웃 하시겠습니까?");
            if (logoutValue) {
                this.$store.commit('loginChange');
                console.log(this.$store.state.isLogin);
                this.$router.push('/login');
            }
        }
    },
}
</script>

<style>
.header-div-login {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1rem 1.5rem;
}

.nav-items-after-login {
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
    align-items: center;
}

.profile-image {
    width: 30px;
    height: 30px;
}

#profile-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

#profile-wrapper span {
    font-size: 0.9rem;
    font-weight: 300;
}

.nav-item .logout-p {
    cursor: pointer;
}

/* =============== MEDIA QUERIES ======= */


@media screen and (max-width: 768px) {
    .nav-bar-big-after-login {
        display: none;
    }

    .logout-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 0.3rem;
        cursor: pointer;
    }

    #profile-wrapper .icon-span {
        font-size: 0.7rem;
    }
}


@media screen and (max-width: 576px) {
    .nav-items-after-login {
        column-gap: 0.5rem;
    }

    .header-title-logo {
        width: 8rem;
    }

    .header-title-logo img {
        width: 90%;
    }

    .header-div-login {
        padding: 1rem 1.5rem 1rem 1rem;
    }
}
</style>