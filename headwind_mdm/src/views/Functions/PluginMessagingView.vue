<template>
    <main>
        <div class="settings-entire-div">
            <div class="function-msg-panel">
                <div class="settings-title-div">
                    <h2>메시지</h2>
                </div>
                <form>
                    <div class="msg-search-top-div">
                        <input type="text" placeholder="장치를 검색하세요" class="form-control search-msg-device">
                        <input type="text" placeholder="메시지를 검색하세요" class="form-control search-msg">
                    </div>
                    <div class="msg-search-bottom-div">
                        <input type="date" class="form-control start-date">
                        <input type="date" class="form-control end-date">
                        <select class="form-control select-msg">
                            <option value="-1" selected="selected">모든 메시지</option>
                            <option value="0">보낸 메시지</option>
                            <option value="1">전달된 메시지</option>
                            <option value="2">읽은 메시지</option>
                        </select>
                        <div class="function-log-btn-div">
                            <button-component :buttonText="'검색'"></button-component>
                            <button-component :buttonText="'새 메시지'"></button-component>
                        </div>
                    </div>
                </form>
                <table class="main-table">
                    <thead>
                        <tr>
                            <th>시간</th>
                            <th>장치</th>
                            <th>메시지 상태</th>
                            <th>메시지 내용</th>
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
    name: 'PluginMessagingView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.function-msg-panel {
    width: 70%;
    margin: 0 auto;
}

.msg-search-top-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.form-control.search-msg-device {
    max-width: 25%;
    width: 20%;
    margin-right: 25%;
}

.form-control.search-msg {
    flex: 0 0 50%;
    max-width: 50%;
}

.msg-search-bottom-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-control.select-msg {
    flex: 0 0 20%;
    max-width: 20%;
}
</style>