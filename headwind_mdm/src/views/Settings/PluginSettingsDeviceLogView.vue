<template>
    <main>
        <div class="settings-entire-div">
            <div class="log-plugin-panel">
                <div class="settings-title-div">
                    <h2>로그 플러그인 설정</h2>
                </div>
                <form>
                    <div class="log-storage-div">
                        <label for="log-storage-time" class="set-label set-log-label">로그 저장 시간(일)</label>
                        <input type="number" id="log-storage-time" class="form-control">
                        <button-component :buttonText="'저장'"></button-component>
                    </div>
                    <div class="settings-title-div">
                        <h2>규칙</h2>
                    </div>
                    <div class="log-set-btn-div">
                        <button-component :buttonText="'추가'"></button-component>
                    </div>
                    <table class="main-table">
                        <thead>
                            <tr>
                                <th>규칙 이름</th>
                                <th>활성상태</th>
                                <th>심각성</th>
                                <th>필터</th>
                                <th>애플리케이션</th>
                                <th>구성</th>
                                <th>그룹</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'PluginSettingsDeviceLogView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
@import url('../../css/commonStyle.css');

.log-plugin-panel {
    width: 80%;
    margin: 0 auto;
}

.log-storage-div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
    margin-bottom: 4rem;
}

.log-storage-div .form-control {
    width: 10%;
}

.log-set-btn-div {
    display: flex;
    justify-content: right;
}
</style>