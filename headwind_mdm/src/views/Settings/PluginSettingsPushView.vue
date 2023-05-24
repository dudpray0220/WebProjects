<template>
    <main>
        <div class="settings-entire-div">
            <div class="message-plugin-panel">
                <div class="settings-title-div">
                    <h2>푸시 플러그인 설정</h2>
                </div>
                <form>
                    <div class="msg-plugin-div">
                        <label for="msg-purge-day" class="set-label set-message-label">보다 오래된 푸시 메시지 제거 (일)</label>
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
    name: 'PluginSettingsPushView',
    components: {
        ButtonComponent,
    },
}
</script>

<style></style>