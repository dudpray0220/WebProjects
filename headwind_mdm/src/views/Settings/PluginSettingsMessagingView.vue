<template>
    <main>
        <div class="settings-entire-div">
            <div class="message-plugin-panel">
                <div class="settings-title-div">
                    <h2>메시징 플러그인 설정</h2>
                </div>
                <form>
                    <div class="msg-plugin-div">
                        <label for="msg-purge-day" class="set-label set-message-label">보다 오래된 메시지 제거 (일)</label>
                        <input type="number" id="msg-purge-day" class="form-control">
                        <button-component :buttonText="'제거'"></button-component>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'PluginSettingsMessagingView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.message-plugin-panel {
    width: 50%;
    margin: 0 auto;
}

.msg-plugin-div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
    margin-bottom: 4rem;
}

.msg-plugin-div .form-control {
    width: 10%;
}
</style>