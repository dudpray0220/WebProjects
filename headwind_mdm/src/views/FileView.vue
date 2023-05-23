<template>
    <main>
        <div class="config-entire-div">
            <form class="form-group">
                <div class="config-search-div">
                    <input type="text" class="form-control" placeholder="파일을 입력하여 검색하세요">
                </div>
                <div class="config-btn-div">
                    <button-component :buttonText="'검색'"></button-component>
                    <button-component :buttonText="'파일 추가'"></button-component>
                </div>
            </form>
            <table class="main-table">
                <thead>
                    <tr>
                        <th>
                            <span>파일 이름</span>
                        </th>
                        <th>
                            <span>경로</span>
                        </th>
                        <th>
                            <span>주소</span>
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
    name: 'FileView',
    components: {
        ButtonComponent
    }
}
</script>

<style></style>