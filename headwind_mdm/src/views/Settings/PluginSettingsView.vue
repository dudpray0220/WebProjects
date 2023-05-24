<template>
    <main>
        <div class="settings-entire-div">
            <div class="used-plugin-panel">
                <div class="settings-title-div">
                    <h2>사용한 플러그인</h2>
                </div>
                <form class="plugin-set-form">
                    <div class="plugin-set-input-div">
                        <lable class="plugin-set-label" for="audit">심사</lable>
                        <input type="checkbox" id="audit">
                    </div>
                    <div class="plugin-set-input-div">
                        <lable class="plugin-set-label" for="info">자세한 정보</lable>
                        <input type="checkbox" id="info">
                    </div>
                    <div class="plugin-set-input-div">
                        <lable class="plugin-set-label" for="log">로그</lable>
                        <input type="checkbox" id="log">
                    </div>
                    <div class="plugin-set-input-div">
                        <lable class="plugin-set-label" for="messaging">메시지</lable>
                        <input type="checkbox" id="messaging">
                    </div>
                    <div class="plugin-set-input-div">
                        <lable class="plugin-set-label" for="push-message">메시지 보내기</lable>
                        <input type="checkbox" id="push-message">
                    </div>
                    <div class="plugin-set-input-div plugin-set-save-div">
                        <button-component :buttonText="'저장'"></button-component>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'PluginSettingsView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.plugin-set-input-div {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.plugin-set-input-div>input {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
}

.plugin-set-label {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 6rem;
    width: 150px;
    text-align: right;
}

.used-plugin-panel {
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.plugin-set-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.plugin-set-input-div.plugin-set-save-div {
    justify-content: right;
    margin-top: 2rem;
}
</style>