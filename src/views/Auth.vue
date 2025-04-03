<template>
    <div class="auth">
        <!-- <hero :title="h1" :background="background" :isSmall="true" /> -->

        <div class="grid-container my-4 my-sm-8 my-lg-16">
            <h3 class="mb-8">Авторизируйтесь, чтобы попасть в личный кабинет</h3>
            <form class="auth__form">
                <div class="auth__field">
                    <label class="auth__label h5" for="username">Логин:</label>
                    <input class="auth__input" type="text" id="username" required placeholder="Введите Ваш логин" />
                </div>
                <div class="auth__field">
                    <label class="auth__label h5" for="password">Пароль:</label>
                    <input class="auth__input" type="password" id="password" required
                        placeholder="Введите Ваш пароль" />
                </div>
                <btn :label="'Войти'" type="submit"></btn>
                <div v-show="errorMessage" class="auth__error mt-4">Проверьте правильность данных</div>
            </form>
        </div>

    </div>
</template>

<style lang="scss">
.auth {
    & .login-form {
        max-width: 300px;
        margin: auto;
    }

    &__form {
        max-width: 500px;
        margin: 0 auto;
    }

    &__field {
        display: grid;
        justify-content: center;

        @include up($sm) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__input {
        max-width: 400px;
        width: 180px;
        height: 40px;
        border: 1px solid $black;
        margin-bottom: 20px;
        padding: 0 10px;

        @include up($sm) {
            width: 400px;
        }


    }

    &__error {
        color: red;
    }
}
</style>

<script>
import hero from '@/components/hero.vue';
import btn from '@/components/btn.vue';
export default {
    name: "Auth",
    components: {
        hero,
        btn

    },
    data() {
        return {
            h1: 'Авторизация',
            //h4: 'Строим доверие',
            background: require('@/assets/hero-skyline-2.jpg'),
            //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop',
            username: '',
            password: '',
            errorMessage: false
        }
    },
    methods: {

    }
}
</script>