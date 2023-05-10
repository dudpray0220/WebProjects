<template>
    <!-- Main -->
    <main>
        <section class="main-section-top">
            <div class="main-div-top">
                <div class="centerface-div">
                    <h2>CenterFace</h2>
                    <p>CenterFace는 어떤 환경이든 능동적으로 적응하여 최적의 화상회의를 제공합니다.<br>
                        CenterFace와 함께 평범한 화상회의를 특별하게 만나보세요</p>
                    <button class="cf-button-white">회의 시작하기</button>
                </div>
            </div>
        </section>
        <section class="main-section-bottom">
            <div class="main-div-bottom">
                <p class="why-cf">화상회의, 왜 <span>CenterFace</span> 일까요?</p>
                <ul class="cf-items">
                    <li class="cf-item">
                        <span>01</span>
                        <strong>강력한 보안</strong>
                        <p>보안 및 IT 정책에 따라 액세스 권한을 등급별로 설정할 수 있습니다. 또한 IP 주소, 사용자 패턴, 메시지 내용 등을 완벽하게 보호합니다.</p>
                    </li>
                    <li class="cf-item">
                        <span>02</span>
                        <strong>다양한 기능</strong>
                        <p>회의 시 해상도 설정 및 공유 기능, 발언권 및 이모지, 투표, 무제한 녹화 기능을 제공합니다.</p>
                    </li>
                    <li class="cf-item">
                        <span>03</span>
                        <strong>자유로운 확장성</strong>
                        <p>다양한 국내 오픈소스와의 통합 기능을 제공하여 자유롭게 기능 커스터마이징이 가능합니다.</p>
                    </li>
                    <li class="cf-item">
                        <span>04</span>
                        <strong>간편한 회의 환경</strong>
                        <p>별도의 프로그램 설치 없이 클릭 한 번으로 언제든지 간편하게 화상회의가 가능합니다.</p>
                    </li>
                    <li class="cf-item">
                        <span>05</span>
                        <strong>장애 및 오류 업무 자동화</strong>
                        <p>사용자가 봇을 설정하여 오류가 발생했을 때 자동으로 채널에 알리고 관리자 채널에 발신을 통해 사고에 대한 신속한 대응이 가능합니다.</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style>
@import '../css/commonStyle.css';

.main-div-top {
    position: relative;
    max-width: 1400px;
    height: 430px;
    margin: 0 auto;
    background-image: url('../assets/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right bottom;
}

.centerface-div {
    position: absolute;
    /* 중앙으로 정렬 */
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    padding: 0 1rem;
}

.centerface-div h2 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
}

.centerface-div p {
    line-height: 1.5rem;
    margin-bottom: 3rem;
}

.main-div-bottom {
    text-align: center;
    padding: 3.5rem 1.5rem 9rem;
    max-width: 1400px;
    margin: 0 auto;
}

.why-cf {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 3rem;
}

.why-cf span {
    color: rgb(245, 124, 0);
    ;
}

.cf-items {
    display: flex;
    justify-content: space-between;
    column-gap: 1.25rem;
}

.cf-item {
    max-width: 240px;
    height: 250px;
    border: 1px solid rgb(246, 233, 219);
    border-radius: 10px;
    background-color: rgb(255, 250, 242);
    padding: 1.3rem 0.8rem;
}

.cf-item span {
    display: block;
    font-size: 1.7rem;
    color: rgb(245, 124, 0);
    text-decoration: underline;
    margin: 0 auto 1rem;
}

.cf-item strong {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    display: block;
    font-weight: 600;
}

.cf-item p {
    font-size: 1rem;
    font-weight: 300;
}
</style>