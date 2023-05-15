<template>
    <!-- Header -->
    <header>
        <div class="header-div-login">
            <h1 class="header-title-logo">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Centerface Logo">
                </router-link>
            </h1>
            <nav class="nav-bar">
                <ul class="nav-items-login">
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
                        <!-- <router-link to="/login" @click="checkLogout">로그아웃</router-link> -->
                        <p @click="checkLogout">로그아웃</p>
                    </li>
                    <li class="nav-item">
                        <router-link to="/mypage/modify" id="profile-wrapper">
                            <img class="profile-image" src="../assets/profile.png" alt="userProfile">
                            <span>yhbae</span>
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
            // console.log(logoutValue)
            if (logoutValue) {
                this.$router.push('/login');
            }
        }
    }
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

.nav-items-login {
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
</style>