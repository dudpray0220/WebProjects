<template>
    <nav class="top-tabl-nav">
        <ul class="top-tab-ul">
            <!-- 라우터 링크들 -->
            <li>
                <router-link to="/">장치</router-link>
            </li>
            <li>
                <router-link to="/applications">어플리케이션</router-link>
            </li>
            <li>
                <router-link to="/configurations">구성</router-link>
            </li>
            <li>
                <router-link to="/files">파일</router-link>
            </li>
            <li>
                <span @click="toggleSetting">설정</span>
                <div class="dropdown-settings" :class="{ 'showSettingDropdown': settingsToggleValue }">
                    <ul>
                        <li><router-link @click="closeSetting" to="/designSettings">기본 디자인</router-link></li>
                        <li><router-link @click="closeSetting" to="/deviceTableSetting">장치탭 테이블 설정</router-link></li>
                        <li><router-link @click="closeSetting" to="/users">사용자</router-link></li>
                        <li><router-link @click="closeSetting" to="/groups">그룹</router-link></li>
                        <li><router-link @click="closeSetting" to="/langSettings">언어 및 기타 설정</router-link></li>
                        <li><router-link @click="closeSetting" to="/hints">도움말</router-link></li>
                        <li><router-link @click="closeSetting" to="/pluginSettings">플러그인</router-link></li>
                        <li><router-link @click="closeSetting" to="/plugin-settings-deviceinfo">자세한 정보</router-link></li>
                        <li><router-link @click="closeSetting" to="/plugin-settings-devicelog">로그</router-link></li>
                        <li><router-link @click="closeSetting" to="/plugin-settings-messaging">메시지 설정</router-link></li>
                        <li><router-link @click="closeSetting" to="/plugin-settings-push">메시지 보내기 설정</router-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <span @click="toggleFunction">기능</span>
                <div class="dropdown-functions" :class="{ 'showFunctionDropdown': functionsToggleValue }">
                    <ul>
                        <li><router-link @click="closeFunction" to="/plugin-deviceinfo">자세한 정보</router-link></li>
                        <li><router-link @click="closeFunction" to="/plugin-devicelog">로그</router-link></li>
                        <li><router-link @click="closeFunction" to="/plugin-messaging">메시지</router-link></li>
                        <li><router-link @click="closeFunction" to="/plugin-push">메시지 보내기</router-link></li>
                        <li><router-link @click="closeFunction" to="/plugin-audit">검사</router-link></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'TabComponent',
    data() {
        return {
            settingsToggleValue: false,
            functionsToggleValue: false,

        }
    },
    methods: {
        toggleSetting() {
            if (this.functionsToggleValue == true) {
                this.functionsToggleValue = false;
            }
            this.settingsToggleValue = !this.settingsToggleValue;
        },
        toggleFunction() {
            if (this.settingsToggleValue == true) {
                this.settingsToggleValue = false;
            }
            this.functionsToggleValue = !this.functionsToggleValue;
        },
        closeSetting() {
            this.settingsToggleValue = false;
        },
        closeFunction() {
            this.functionsToggleValue = false;
        }
    }
}
</script>

<style>
.top-tabl-nav {
    padding: 2rem 0 0 1.5rem;
    width: 100%;
    box-sizing: border-box;
}

.top-tab-ul {
    max-width: 600px;
    display: flex;
    justify-content: space-between;
}

.top-tab-ul>li>a,
.top-tab-ul>li>span {
    text-decoration: none;
    color: #337ab7;
    padding: 10px 15px;

    margin-right: 2px;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
}

.top-tab-ul>li>a:hover,
.top-tab-ul>li>span:hover {
    cursor: pointer;
    background-color: #e6e6e6;
}

.top-tab-ul>li>a:focus,
.top-tab-ul>li>span:focus {
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
}

.top-tabl-nav::after {
    position: absolute;
    display: block;
    content: "";
    top: 7.1rem;
    left: 0px;
    right: 0px;
    width: 100%;
    border-bottom: 1px solid rgb(229, 229, 229);
}

.dropdown-settings {
    display: block;
    position: absolute;
    width: 200px;
    top: 114px;
    background-color: white;
    border: 1px solid #ccc;
    opacity: 0;
    max-height: 0;
    transition: max-height 0.15s ease-out, opacity 0.15s ease-out;
    z-index: 100;
    display: none;
}

.dropdown-settings.showSettingDropdown {
    display: block;
    max-height: 270px;
    opacity: 1;
}

.dropdown-settings>ul>li>a,
.dropdown-functions>ul>li>a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 0.25rem 1rem;
}

.dropdown-settings ul li:hover a,
.dropdown-settings ul li:focus a,
.dropdown-functions ul li:hover a,
.dropdown-functions ul li:focus a {
    color: #fff;
    text-decoration: none;
    background-color: #337ab7;
    outline: 0;
}

.dropdown-functions {
    display: block;
    position: absolute;
    width: 200px;
    top: 114px;
    background-color: white;
    border: 1px solid #ccc;
    opacity: 0;
    max-height: 0;
    transition: max-height 0.15s ease-out, opacity 0.15s ease-out;
    z-index: 100;
    display: none;
}

.dropdown-functions.showFunctionDropdown {
    display: block;
    max-height: 125px;
    opacity: 1;
}
</style>