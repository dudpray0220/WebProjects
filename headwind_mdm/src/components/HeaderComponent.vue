<template>
    <header>
        <div class="header-entire-div">
            <div class="header-title-div">
                <h2>MDM</h2>
            </div>
            <nav class="header-nav">
                <ul class="header-nav-ul">
                    <li>
                        <span>datetime</span>
                    </li>
                    <li>
                        <!-- 드롭다운 메뉴 -->
                        <span @click="toggleNav">username</span>
                        <div class="dropdown-menu" :class="{ 'showDropdown': dropdownToggleValue }">
                            <ul>
                                <li>About</li>
                                <li>내 정보</li>
                                <li>로그아웃</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            dropdownToggleValue: false,
        }
    },
    methods: {
        toggleNav() {
            this.dropdownToggleValue = !this.dropdownToggleValue
        }
    }
}
</script>

<style>
header {
    height: 50px;
    background-color: #7a9ab9;
}

.header-entire-div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1.5rem;
}

.header-title-div h2 {
    text-decoration: none;
    color: #afd0df;
    font-size: 1.5rem;
}

.header-nav-ul {
    display: flex;
    column-gap: 2rem;
    color: #fff;
}

.header-nav-ul>li>span:hover {
    cursor: pointer;
}

.dropdown-menu {
    display: block;
    position: absolute;
    width: 150px;
    top: 50px;
    right: 0;
    background-color: #7a9ab9;
    text-align: center;
    height: 80px;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    padding: 0.5rem 0;
    z-index: 100;
}

.dropdown-menu.showDropdown {
    max-height: 80px;
    opacity: 1;
}

.dropdown-menu ul li {
    margin-bottom: 0.7rem;
}
</style>