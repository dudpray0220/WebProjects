<template>
    <main>
        <div class="settings-entire-div">
            <div class="hint-panel">
                <div class="settings-title-div">
                    <h2>
                        도움말
                    </h2>
                </div>
                <div class="hint-btn-div">
                    <button-component :buttonText="'툴팁 보이기'"></button-component>
                    <button-component :buttonText="'툴팁 숨기기'"></button-component>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'HintsView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.hint-panel {
    width: 40%;
    margin: 0 auto;
}

.hint-btn-div {
    display: flex;
    justify-content: space-between;
}
</style>