<template>
    <main>
        <div class="settings-entire-div">
            <div class="user-panel-div">
                <div class="settings-title-div">
                    <h2>
                        사용자
                    </h2>
                </div>
                <div class="user-div">
                    <input type="text" class="form-control">
                    <button-component :buttonText="'검색'"></button-component>
                    <button-component :buttonText="'추가'"></button-component>
                </div>
                <table class="main-table">
                    <thead>
                        <tr>
                            <th>로그인</th>
                            <th>이름</th>
                            <th>역할</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'UsersView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.user-panel-div {
    width: 80%;
    margin: 0 auto;
}

.user-div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
}

.user-div input {
    width: 80%;
}
</style>