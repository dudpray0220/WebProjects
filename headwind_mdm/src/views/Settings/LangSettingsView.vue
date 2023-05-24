<template>
    <main>
        <div class="settings-entire-div">
            <form class="lang-setting-panel">
                <div class="settings-title-div">
                    <h2>
                        언어 설정
                    </h2>
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="lang-check">기본 언어 사용</label>
                    <input type="checkbox" id="lang-check">
                </div>
                <div class="settings-title-div etc-title-div">
                    <h2>
                        기타 설정
                    </h2>
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="phone-number-format">전화 번호 형식</label>
                    <input class="form-control" type="text" id="phone-number-format" placeholder="+9 (999) 999-99-99">
                </div>

                <!-- <div class="lang-set-span-div">
                    <label class="lang-set-label">여러줄</label>
                    <label class="lang-set-label">장치로 보내기</label>
                </div> -->

                <div class="lang-set-div">
                    <label class="lang-set-label" for="property1">맞춤 속성 #1</label>
                    <input type="text" id="property1" placeholder="맞춤 속성을 입력하세요" class="form-control">
                    <div class="checkbox-div">
                        <label class="lang-set-span-label">여러줄</label>
                        <input type="checkbox">
                    </div>
                    <div class="checkbox-div">
                        <label class="lang-set-span-label">장치로 보내기</label>
                        <input type="checkbox">
                    </div>
                </div>

                <div class="lang-set-div">
                    <label class="lang-set-label" for="property2">맞춤 속성 #2</label>
                    <input type="text" id="property2" placeholder="맞춤 속성을 입력하세요" class="form-control">
                    <div class="checkbox-div">
                        <label class="lang-set-span-label">여러줄</label>
                        <input type="checkbox">
                    </div>
                    <div class="checkbox-div">
                        <label class="lang-set-span-label">장치로 보내기</label>
                        <input type="checkbox">
                    </div>
                </div>

                <div class="lang-set-div">
                    <label class="lang-set-label" for="property3">맞춤 속성 #3</label>
                    <input type="text" id="property3" placeholder="맞춤 속성을 입력하세요" class="form-control">
                    <div class="checkbox-div">
                        <label class="lang-set-span-label">여러줄</label>
                        <input type="checkbox">
                    </div>
                    <div class="checkbox-div">
                        <label class="lang-set-span-label">장치로 보내기</label>
                        <input type="checkbox">
                    </div>
                </div>

                <div class="lang-set-div">
                    <label class="lang-set-label" for="">장치에 설명 보내기</label>
                    <input type="checkbox" id="">
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="">최소 암호 길이</label>
                    <input type="number" id="" class="form-control">
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="">최소 암호 길이</label>
                    <select id="" class="form-control">
                        <option value="0" selected="selected">지정되지 않음 (모든 문자)</option>
                        <option value="1">소문자 및 대문자, 숫자</option>
                        <option value="2">소문자 및 대문자, 숫자, 특수문자</option>
                    </select>
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="">사용자 비밀번호 재설정 필수</label>
                    <input type="checkbox" id="">
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="">처음 액세스 시 장치 추가</label>
                    <input type="checkbox" id="">
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="">새 구성</label>
                    <select id="" class="form-control">
                        <!-- API로 데이터 받아서 넣기 -->
                        <option value="">더미 데이터</option>
                    </select>
                </div>
                <div class="lang-set-div">
                    <label class="lang-set-label" for="">새 장치 그룹</label>
                    <select id="" class="form-control">
                        <!-- API로 데이터 받아서 넣기 -->
                        <option value="">더미 데이터</option>
                    </select>
                </div>
                <div class="lang-set-div">
                    <button-component :buttonText="'저장'"></button-component>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    name: 'LangSettingsView',
    components: {
        ButtonComponent,
    },
}
</script>

<style>
.lang-setting-panel {
    width: 70%;
    margin: 0 auto;
}

.lang-set-div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.lang-set-div>input[type="checkbox"],
.checkbox-div>input[type="checkbox"] {
    width: 30px;
    height: 30px;
}

.etc-title-div {
    margin-top: 4rem;
}

.checkbox-div {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
}

.lang-set-label {
    font-size: 1rem;
    font-weight: 600;
    text-align: right;
}

.lang-set-span-label {
    font-size: 0.8rem;
    font-weight: 600;
}

.lang-set-div>.lang-set-label {
    margin-right: 2rem;
}

.lang-set-div .lang-set-label {
    flex: 0 0 25%;
    max-width: 25%;
}

.lang-set-div input[type="text"] {
    flex: 0 0 55%;
    max-width: 50%;
}

.lang-set-div select {
    flex: 0 0 30%;
    max-width: 30%;
}

#property1,
#property2,
#property3 {
    margin-right: 1rem;
}
</style>