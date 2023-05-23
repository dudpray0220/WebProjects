<template>
    <main>
        <div class="app-entire-div">
            <form class="form-group">
                <div class="app-name-div">
                    <input type="text" class="form-control" placeholder="애플리케이션 이름을 입력하여 검색하세요">
                </div>
                <div class="app-add-div">
                    <button-component :buttonText="'앱 추가'"></button-component>
                </div>
                <div class="app-check-div">
                    <label for="system-app">시스템 애플리케이션 보기</label>
                    <input type="checkbox" id="system-app">
                </div>
            </form>

            <div>

            </div>

            <table class="main-table">
                <thead>
                    <tr>
                        <th>
                            <span>패키지 ID</span>
                        </th>
                        <th>
                            <span>애플리케이션 이름</span>
                        </th>
                        <th>
                            <span>버전</span>
                        </th>
                        <th>
                            <span>URL</span>
                        </th>
                        <th>
                            <span>아이콘</span>
                        </th>
                        <th>
                            <span>Actions</span>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'ApplicationView',
    components: {
        ButtonComponent
    }
}
</script>

<style>
@import url('../css/commonStyle.css');

.app-entire-div {
    padding: 2rem 0 0 1rem;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
}

.app-entire-div>.form-group {
    flex-wrap: wrap;
}

.app-name-div {
    flex: 10;
}

.app-add-div {
    flex: 2;
}

.app-check-div {
    width: 100%;
    margin: 2rem 0 0 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
}

.app-check-div>input[type="checkbox"] {
    width: 24px;
    height: 24px;
}
</style>