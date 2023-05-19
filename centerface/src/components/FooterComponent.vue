<template>
    <!-- footer -->
    <footer>
        <div class="footer-div">
            <h2 class="footer-title-logo">
                <img src="../assets/logo2.png" alt="Tilon Logo">
            </h2>
            <div class="footer-info-div">
                <address>
                    <p>주식회사틸론 | </p>
                    <p>대표: 최백준 | </p>
                    <p>대표전화: 02-2627-9000 | </p>
                    <p>FAX: 02-2627-9099 | </p>
                    <p>사업자번호: 119-81-49757 | </p>
                    <p>통신판매업신고번호: 2020-서울강서-2069</p>
                </address>
                <p>서울 법인: (07789) 서울시 강서구 마곡중앙14로 22</p>
                <p>제주 법인: (63309) 제주특별자치도 제주시 첨단로 213-3 311, 312호</p>
                <small>Copyright © Tilon Co., All Rights Reserved</small>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style>
footer {
    background-color: #F0F8FF;
    /* 고정 위치 */
    /* position: fixed; */
    /* 푸터를 하단에 고정 */
    /* bottom: 0; */
    /* 푸터의 너비를 전체 너비로 설정 */
    /* width: 100%; */
}

.footer-div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    padding: 2rem 1rem;
}

.footer-title-logo {
    width: 9rem;
}

.footer-title-logo img {
    width: 100%;
}

.footer-info-div {
    margin: 0 3rem;
}

.footer-info-div address {
    margin-bottom: 0.5rem;
}

.footer-info-div address p {
    display: inline;
}

.footer-info-div small {
    display: block;
    margin-top: 0.5rem;
}

/* =============== MEDIA QUERIES ======= */

@media screen and (max-width: 768px) {
    .footer-info-div {
        font-size: 0.8rem;
    }

    .footer-div {
        padding: 1rem;
        line-height: 1rem;
    }

    .footer-title-logo {
        width: 11rem;
    }

    .footer-title-logo img {
        width: 100%;
    }
}

@media screen and (max-width: 576px) {
    .footer-title-logo {
        width: 14rem;
    }

    .footer-info-div {
        margin: 0 0 0 1rem;
        font-size: 0.7rem;
    }
}
</style>