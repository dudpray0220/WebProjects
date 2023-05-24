<template>
    <main>
        <div class="settings-entire-div">
            <div class="detailed-info-panel">
                <div class="settings-title-div">
                    <h2>자세한 정보</h2>
                </div>
                <form class="detailed-info-form">
                    <div class="info-form-input-div">
                        <input type="text" class="form-control" placeholder="장치를 선택하세요">
                    </div>
                    <div class="info-form-btn-div">
                        <button-component :buttonText="'검색'"></button-component>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
    components: { ButtonComponent },
    name: 'PluginDeviceInfoView'
}
</script>

<style>
.detailed-info-panel {
    width: 70%;
    margin: 0 auto;
}

.detailed-info-form {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
}

.info-form-input-div {
    flex: 0 0 60%;
    max-width: 60%;
}
</style>