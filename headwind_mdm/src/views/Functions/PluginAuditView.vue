<template>
    <main>
        <div class="settings-entire-div">
            <div class="audit-panel">
                <div class="settings-title-div">
                    <h2>감사</h2>
                </div>
                <form>
                    <div class="audit-div">
                        <input type="text" placeholder="사용자 이름 입력" class="form-control audit-username">
                        <select class="form-control audit-actions">
                            <option value="string:">모든 작업</option>
                            <option value="string:plugin.audit.action.user.login">사용자 로그인</option>
                            <option value="string:plugin.audit.action.jwt.login">API 클라이언트 로그인</option>
                            <option value="string:plugin.audit.action.update.configuration">구성 업데이트</option>
                            <option value="string:plugin.audit.action.copy.configuration">구성 복사</option>
                            <option value="string:plugin.audit.action.remove.configuration">구성 제거</option>
                            <option value="string:plugin.audit.action.update.device">장치 업데이트</option>
                            <option value="string:plugin.audit.action.remove.device">장치 제거</option>
                            <option value="string:plugin.audit.action.update.application">애플리케이션 업데이트</option>
                            <option value="string:plugin.audit.action.update.webapp">웹 애플리케이션 업데이트</option>
                            <option value="string:plugin.audit.action.remove.application">애플리케이션 제거</option>
                            <option value="string:plugin.audit.action.update.app.config">애플리케이션 구성 변경됨</option>
                            <option value="string:plugin.audit.action.update.design">디자인 설정 업데이트</option>
                            <option value="string:plugin.audit.action.update.user.roles">사용자 역할 설정 업데이트</option>
                            <option value="string:plugin.audit.action.update.language">언어 설정 업데이트</option>
                            <option value="string:plugin.audit.action.update.plugins">플러그인 설정 업데이트</option>
                            <option value="string:plugin.audit.action.update.user">사용자 업데이트</option>
                            <option value="string:plugin.audit.action.remove.user">사용자 제거</option>
                            <option value="string:plugin.audit.action.update.group">그룹 업데이트</option>
                            <option value="string:plugin.audit.action.remove.group">그룹 제거</option>
                        </select>
                        <input type="date" class="form-control start-date">
                        <input type="date" class="form-control end-date">
                        <button-component :buttonText="'검색'"></button-component>
                    </div>
                </form>
                <table class="main-table">
                    <thead>
                        <tr>
                            <th>날짜와 시간</th>
                            <th>사용자 로그인</th>
                            <th>IP 주소</th>
                            <th>Action</th>
                            <th>조회</th>
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
    name: 'PluginAuditView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.audit-panel {
    width: 60%;
    margin: 0 auto;
}

.audit-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-control.audit-username {
    flex: 0 0 25%;
    max-width: 25%;
}

.form-control.audit-actions {
    flex: 0 0 25%;
    max-width: 25%;
}
</style>