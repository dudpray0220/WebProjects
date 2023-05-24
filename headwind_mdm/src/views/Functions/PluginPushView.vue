<template>
    <main>
        <div class="settings-entire-div">
            <div class="function-push-msg-panel">
                <div class="settings-title-div">
                    <h2>푸시 메시지</h2>
                </div>
                <form>
                    <div class="msg-search-top-div">
                        <input type="text" placeholder="장치를 검색하세요" class="form-control search-push-msg-device">
                        <input type="text" placeholder="메시지를 검색하세요" class="form-control search-msg">
                    </div>
                    <div class="msg-search-bottom-div">
                        <input type="date" class="form-control start-date">
                        <input type="date" class="form-control end-date">
                        <div class="function-log-btn-div">
                            <button-component :buttonText="'검색'"></button-component>
                            <button-component :buttonText="'새 메시지'"></button-component>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'PluginPushView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.function-push-msg-panel {
    width: 50%;
    margin: 0 auto;
}

.form-control.search-push-msg-device {
    width: 20%;
    max-width: 20%;
}
</style>