<template>
    <main>
        <div class="settings-entire-div">
            <div class="settings-title-div">
                <h2>기본 디자인</h2>
            </div>
            <div class="default-design-panel">
                <form>
                    <div class="form-group">
                        <label for="bg-color" class="default-label">배경색</label>
                        <input type="color" id="bg-color" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="app-color" class="default-label">애플리케이션 이름 색</label>
                        <input type="color" id="app-color" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="bg-url" class="default-label">배경 이미지의 URL</label>
                        <div class="bg-url-div">
                            <input type="text" id="bg-url" class="form-control" placeholder="배경 이미지 URL을 입력하세요">
                            <button-component :buttonText="'업로드'"></button-component>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="icon-size" class="default-label">아이콘 크기</label>
                        <select id="icon-size" class="form-control">
                            <option value="SMALL" selected="selected">Small</option>
                            <option value="MEDIUM">Average (+ 20%)</option>
                            <option value="LARGE">Large (+ 40%)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="desktop-title" class="default-label">데스크톱 제목</label>
                        <select id="desktop-title" class="form-control">
                            <option value="NO_HEADER" selected="selected">NO</option>
                            <option value="DEVICE_ID">Device ID</option>
                            <option value="DESCRIPTION">Description</option>
                            <option value="TEMPLATE">Custom template</option>
                        </select>
                    </div>
                    <div class="save-btn-div">
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
    name: 'DesignSettingsView',
    components: {
        ButtonComponent,
    },
    data() {
        return {
            color: { hue: 50, saturation: 100, lightness: 50, alpha: 1 },
        }
    },
    methods: {
    }
}
</script>

<style>
.default-design-panel {
    width: 60%;
    margin: 0 auto;
}

.default-label {
    width: 30%;
}

.bg-url-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.bg-url-div>input {
    width: 75%;
}

.save-btn-div {
    display: flex;
    justify-content: flex-end;
}
</style>