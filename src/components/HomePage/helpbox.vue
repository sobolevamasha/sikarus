<template>
  <div class="helpbox cmp-helpbox-container">
    <div class="cmp-helpbox  helpbox__wrap">
      <h2 class="cmp-helpbox__title helpbox__title">
        Как мы можем вам помочь?
      </h2>
      <div class="cmp-helpbox__content">
        <div class="cmp-search-field cmp-search-field--large">
          <form method="get" class="search-form">
            <input type="text" name="q" placeholder="Поиск" data-placeholder-large="Найти Продукт, Систему или Решение"
              autocomplete="off" class="cmp-search-form__field cmp-font--light" />
            <button type="submit">
              <img src="../../assets/icons/search.svg" />
            </button>

          </form>
        </div>
      </div>
    </div>
    <div class="cmp-helpbox-bar cmp-shadow helpbox__list">


      <a href="#" class="cmp-helpbox__icon cmp-font--regular text-left helpbox__item" v-for="(button, index) in buttons"
        :key="index">
        <div class="helpbox__item--content">
          <img class="cmp-icon cmp-icon-map-marker helpbox__item--icon" :src="button.icon" />
          <div class="cmp-helpbox__icon-text text-left">{{ button.name }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.helpbox {

  & h2 {
    margin-bottom: 0;
  }
  &__wrap {
    @include up($sm) {
      margin-top: -50px;
    }
  }

  &__title {
    text-transform: uppercase;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-self: center;
    margin-top: -90px;

    @include up($md) {
      grid-template-columns: repeat(3, 1fr);
      margin-top: -80px;
    }

    @include up($lg) {
      display: flex;
      flex-wrap: wrap;
      margin-top: -60px;
    }
  }

  &__item {
    margin: 5px 0;

    @include up($md) {
      margin: 10px;
    }

    height: 60px;
    font-size: 16px;
    line-height: 100%;

    @include up($lg) {

      height: 80px;
    }

    &--content {
      display: flex;
      //justify-content: space-between;
      width: 200px;
      font-size: 20px;
    }

    &--icon {
      width: 35px;
      height: 35px;
    }
  }

  & .search-form {
    position: relative;

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

<script>
export default {
  computed: {
    buttons() {
      return [
        {
          name: "Контакты",
          icon: require('@/assets/icons/phone.svg'),
        },
        {
          name: "Найти дилера",
          icon: require('@/assets/icons/location.svg'),
        },
        {
          name: "Задать вопрос",
          icon: require('@/assets/icons/phone.svg'),
        },
        {
          name: "Подписаться на Telegram",
          icon: require('@/assets/icons/phone.svg'),
        },
        {
          name: "Обратная связь",
          icon: require('@/assets/icons/phone.svg'),
        },
        // {
        //   name: "Обратная связь",
        //   icon: require('@/assets/icons/phone.svg'),
        // },
        // {
        //   name: "Обратная связь",
        //   icon: require('@/assets/icons/phone.svg'),
        // }
      ]
    },
  }
}
</script>