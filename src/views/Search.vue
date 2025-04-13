<template>
    <div class="search grid-container">
        <form method="get" class="search__form">
            <input type="text" name="q" placeholder="Поиск" data-placeholder-large="Найти Продукт, Систему или Решение"
                autocomplete="off" class="cmp-search-form__field cmp-font--light" />
            <button type="submit">
                <img src="@/assets/icons/search.svg" />
            </button>
        </form>
        <div class="section-margin">
            <ul class="search__list">
                <li class="search__item">
                    <a href="/news">
                        <h4 class="search__title">
                            Цели и бренд <em>Sika</em>
                        </h4>
                        <p class="search__url">
                            https://rus.sika.com/ru/o-kompanii/celi-i-brend-sika.html</p>
                        <p class="cmp-line-clamp cmp-line-clamp--4">Цель
                            компании
                            <em>Sika</em> состоит в том, чтобы предвидеть и отвечать на будущие вызовы путем
                            предоставления
                            надежных, инновационных, устойчивых и долгосрочных решений в строительной и производственной
                        </p>
                    </a>
                </li>
                <li class="search__item">
                    <a href="/news">
                        <h4 class="search__title">
                            Цели и бренд <em>Sika</em>
                        </h4>
                        <p class="search__url">
                            https://rus.sika.com/ru/o-kompanii/celi-i-brend-sika.html</p>
                        <p class="cmp-line-clamp cmp-line-clamp--4">Цель
                            компании
                            <em>Sika</em> состоит в том, чтобы предвидеть и отвечать на будущие вызовы путем
                            предоставления
                            надежных, инновационных, устойчивых и долгосрочных решений в строительной и производственной
                        </p>
                    </a>
                </li>
                <li class="search__item">
                    <a href="/news">
                        <h4 class="search__title">
                            Цели и бренд <em>Sika</em>
                        </h4>
                        <p class="search__url">
                            https://rus.sika.com/ru/o-kompanii/celi-i-brend-sika.html</p>
                        <p class="cmp-line-clamp cmp-line-clamp--4">Цель
                            компании
                            <em>Sika</em> состоит в том, чтобы предвидеть и отвечать на будущие вызовы путем
                            предоставления
                            надежных, инновационных, устойчивых и долгосрочных решений в строительной и производственной
                        </p>
                    </a>
                </li>
                <li class="search__item">
                    <a href="/news">
                        <h4 class="search__title">
                            Цели и бренд <em>Sika</em>
                        </h4>
                        <p class="search__url">
                            https://rus.sika.com/ru/o-kompanii/celi-i-brend-sika.html</p>
                        <p class="cmp-line-clamp cmp-line-clamp--4">Цель
                            компании
                            <em>Sika</em> состоит в том, чтобы предвидеть и отвечать на будущие вызовы путем
                            предоставления
                            надежных, инновационных, устойчивых и долгосрочных решений в строительной и производственной
                        </p>
                    </a>
                </li>
                <li class="search__item">
                    <a href="/news">
                        <h4 class="search__title">
                            Цели и бренд <em>Sika</em>
                        </h4>
                        <p class="search__url">
                            https://rus.sika.com/ru/o-kompanii/celi-i-brend-sika.html</p>
                        <p class="cmp-line-clamp cmp-line-clamp--4">Цель
                            компании
                            <em>Sika</em> состоит в том, чтобы предвидеть и отвечать на будущие вызовы путем
                            предоставления
                            надежных, инновационных, устойчивых и долгосрочных решений в строительной и производственной
                        </p>
                    </a>
                </li>
                <li class="search__item">
                    <a href="/news">
                        <h4 class="search__title">
                            Цели и бренд <em>Sika</em>
                        </h4>
                        <p class="search__url">
                            https://rus.sika.com/ru/o-kompanii/celi-i-brend-sika.html</p>
                        <p class="cmp-line-clamp cmp-line-clamp--4">Цель
                            компании
                            <em>Sika</em> состоит в том, чтобы предвидеть и отвечать на будущие вызовы путем
                            предоставления
                            надежных, инновационных, устойчивых и долгосрочных решений в строительной и производственной
                        </p>
                    </a>
                </li>
                <li class="search__item">
                    <a href="/news">
                        <h4 class="search__title">
                            Цели и бренд <em>Sika</em>
                        </h4>
                        <p class="search__url">
                            https://rus.sika.com/ru/o-kompanii/celi-i-brend-sika.html</p>
                        <p class="cmp-line-clamp cmp-line-clamp--4">Цель
                            компании
                            <em>Sika</em> состоит в том, чтобы предвидеть и отвечать на будущие вызовы путем
                            предоставления
                            надежных, инновационных, устойчивых и долгосрочных решений в строительной и производственной
                        </p>
                    </a>
                </li>
            </ul>

            <button id="showMoreBtn" class="search__showmore">Показать еще</button>
        </div>
    </div>
</template>

<script>
import { showMoreResults } from '@/utils/utils';
export default {
    methods: {
        initScripts() {
            showMoreResults();
        },
    },

    mounted() {
        this.initScripts();
    }
}
</script>

<style lang="scss">
.search {

    &__showmore {
        font-weight: 700;
        text-transform: uppercase;
        background-color: $sika-yellow !important;
        color: #000;
        height: 40px !important;
        padding: 8px 30px !important;
        font-size: 16px !important;
        line-height: 10px !important;
        transition: all 0.3s ease-in-out;
        border: 2px solid transparent;
        &:hover {
            background-color: #fff !important;
            color: $sika-yellow;
            border: 2px solid $sika-yellow;
        }
    }

    & a {
        color: #000 !important;
    }

    &__list {
        text-align: left;
        margin-bottom: 20px !important;
    }

    &__item {
        padding: 10px 0;
        border-bottom: 2px solid #e0e0e0;

        & em {
            color: $sika-yellow;
        }
    }

    &__form {
        position: relative;
        margin-bottom: 60px;

        & input {
            padding: 15px 62px 15px 15px;
            margin-top: 20px;
            border-bottom: 2px solid #616161;
            max-width: 600px;
            height: 40px;
            width: 100%;

            @include up($md) {
                height: 60px;
            }
        }

        & button {
            position: absolute;
            right: 10px;
            top: 27px;

            @include up($md) {
                right: 280px;
                top: 35px;
            }
        }
    }
}
</style>