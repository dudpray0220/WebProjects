<template>
    <main>
        <div class="settings-entire-div">
            <div class="group-panel-div">
                <div class="settings-title-div">
                    <h2>
                        그룹
                    </h2>
                </div>
                <div class="user-div">
                    <input type="text" class="form-control" placeholder="그룹 검색">
                    <button-component :buttonText="'검색'"></button-component>
                    <button-component :buttonText="'추가'"></button-component>
                </div>
                <table class="main-table">
                    <thead>
                        <tr>
                            <th>이름</th>
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
    name: 'GroupsView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.group-panel-div {
    width: 80%;
    margin: 0 auto;
}
</style>