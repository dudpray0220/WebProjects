<template>
    <main>
        <div class="settings-entire-div">
            <div class="info-panel">
                <div class="settings-title-div">
                    <h2>자세한 정보</h2>
                </div>
                <form class="info-set-form">
                    <div class="info-set-input-div">
                        <lable class="info-set-label" for="storage-days">보관 기간(일)</lable>
                        <input type="number" id="storage-days" class="form-control">
                    </div>

                    <div class="info-set-input-div">
                        <lable class="info-set-label" for="info">상세 정보 전송</lable>
                        <input type="checkbox" id="info">
                    </div>

                    <div class="info-set-input-div">
                        <lable class="info-set-label" for="interval">데이터 수집 간격</lable>
                        <select name="" id="interval" class="form-control">
                            <option value="number:15" selected="selected">15 minutes</option>
                            <option value="number:30">30 minutes</option>
                            <option value="number:60">1 hour</option>
                            <option value="number:120">2 hours</option>
                            <option value="number:360">6 hours</option>
                            <option value="number:720">12 hours</option>
                            <option value="number:1440">24 hours</option>
                        </select>
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
    name: 'PluginSettingsDeviceInfoView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.info-panel {
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.info-set-label {
    font-size: 1rem;
    font-weight: 600;
    text-align: right;
    flex: 2;
    margin-right: 1rem;
}

.info-set-input-div>input[type="checkbox"],
.info-set-input-div>input[type="number"],
.info-set-input-div>select {
    flex: 2;
    height: 30px;
}

.info-set-input-div>input[type="checkbox"] {
    width: 30px;
}

.info-set-input-div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
</style>