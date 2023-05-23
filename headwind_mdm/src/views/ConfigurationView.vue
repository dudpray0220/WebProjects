<template>
    <main>
        <div class="config-entire-div">
            <form class="form-group">
                <div class="config-search-div">
                    <input type="text" class="form-control" placeholder="구성을 입력하여 검색하세요">
                </div>
                <div class="config-btn-div">
                    <button-component :buttonText="'검색'"></button-component>
                    <button-component :buttonText="'구성 추가'"></button-component>
                </div>
            </form>
            <table class="main-table">
                <thead>
                    <tr>
                        <th>
                            <span>이름</span>
                        </th>
                        <th>
                            <span>설명</span>
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
    name: 'ConfigurationView',
    components: {
        ButtonComponent
    }
}
</script>

<style>
.config-entire-div {
    padding: 2rem 0 0 1rem;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
}

.config-search-div {
    width: 85%;
}

.config-btn-div {
    width: 15%;
    display: flex;
    column-gap: 0.5rem;
}
</style>