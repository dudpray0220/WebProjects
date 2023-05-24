<template>
    <main>
        <div class="settings-entire-div">
            <div class="function-log-panel">
                <div class="settings-title-div">
                    <h2>로그</h2>
                </div>
                <form class="function-log-form">
                    <div class="fuction-log-input-div">
                        <input type="text" placeholder="장치를 검색하세요" class="form-control ">
                        <input type="text" placeholder="앱을 검색하세요" class="form-control">
                        <input type="text" placeholder="메시지를 검색하세요" class="form-control msg-log">
                    </div>
                    <div class="fuction-log-input-div">
                        <input type="date" class="form-control start-date">
                        <input type="date" class="form-control end-date">
                        <select class="form-control log-select-search">
                            <option value="-1" selected="selected">심각도 검색</option>
                            <option value="0">없음</option>
                            <option value="1">에러</option>
                            <option value="2">경고</option>
                            <option value="3">정보</option>
                            <option value="4">디버그</option>
                            <option value="5">상세</option>
                        </select>
                        <div class="function-log-btn-div">
                            <button-component :buttonText="'검색'"></button-component>
                            <button-component :buttonText="'파일로 추출'"></button-component>
                        </div>
                    </div>
                </form>
                <!-- 페이지네이션 추가 -->
                <table class="main-table">
                    <thead>
                        <tr>
                            <th>날짜와 시간</th>
                            <th>장치번호</th>
                            <th>애플리케이션</th>
                            <th>심각성</th>
                            <th>메시지</th>
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
    name: 'PluginDeviceLogView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.function-log-panel {
    width: 75%;
    margin: 0 auto;
}

.fuction-log-input-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 0.5rem;
}

.function-log-btn-div {
    display: flex;
}

.form-control.msg-log {
    flex: 0 0 50%;
    max-width: 50%;
}

.form-control.start-date,
.form-control.end-date {
    flex: 0 0 15%;
    max-width: 15%;
}

.form-control.log-select-search {
    flex: 0 0 40%;
    max-width: 40%;
}

.function-log-btn-div {
    column-gap: 0.5rem;
}
</style>