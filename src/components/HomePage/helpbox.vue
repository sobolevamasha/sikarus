<template>
  <div class="helpbox cmp-helpbox-container">
    <div class="cmp-helpbox cmp-helpbox-offset">
      <h2 class="cmp-helpbox__title">
        КАК МЫ МОЖЕМ ВАМ ПОМОЧЬ?
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
    <div class="cmp-helpbox-bar cmp-shadow">


      <a href="#" class="cmp-helpbox__icon cmp-font--regular text-left" v-for="(button, index) in buttons" :key="index">
        <img class="cmp-icon cmp-icon-map-marker" :src="button.icon" />
        <div class="cmp-helpbox__icon-text">{{ button.name }}</div>
      </a>


      <!-- <a href="#" class="cmp-helpbox__icon cmp-font--regular">
      <i class="cmp-icon cmp-icon-map-marker"></i>
      <div class="cmp-helpbox__icon-text">Link #2</div>
    </a>
    <a href="#" class="cmp-helpbox__icon cmp-font--regular">
      <i class="cmp-icon cmp-icon-map-marker"></i>
      <div class="cmp-helpbox__icon-text">Link #3</div>
    </a>
    <a href="#" class="cmp-helpbox__icon cmp-font--regular">
      <i class="cmp-icon cmp-icon-map-marker"></i>
      <div class="cmp-helpbox__icon-text">Link #4</div>
    </a> -->
    </div>
  </div>
</template>

<style lang="scss">
.helpbox {
  & .search-form {
    position: relative;
    & input {
      padding: 15px 62px 15px 15px;
      margin-top: 20px;
      border-bottom: 2px solid #616161;
      max-width: 600px;
      width: 100%;
      height: 60px;
    }

    & button {
      position: absolute;
      top: 35px;
      right: 280px;
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
        }
      ]
    },
  }
}
</script>