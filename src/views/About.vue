<template>
  <div class="about">
    <hero :title="heroTitle"  :background="background" :isSmall="true" />
    <v-container>
      <div class="about__text grid-container my-4 my-lg-16">
        <p>Sika (Зика) – швейцарский концерн по производству материалов для строительства и промышленности, работающий с
          1910 года. В состав компании входят более 300 производственных предприятий, научные лаборатории, центры
          технической поддержки и торговые представительства в 100 странах мира. В компании работает свыше 25 000
          сотрудников. Объем продаж продукции компании в 2019 финансовом году превысил 8 млрд. швейцарских франков. </p>
        <p>
          В России компания работает с 2003 года и имеет 5 заводов по производству добавок в бетон, 2 завода по
          производству сухих строительных смесей, завод по производству поликарбоксилатных эфиров, завод по производству
          кровельных и гидроизоляционных ПВХ мембран, завод по выпуску напольных эпоксидных и полиуретановых покрытий,
          лабораторию физико-химический испытаний бетонов и бетонных смесей, химическую лабораторию и 5 филиалов в
          разных регионах страны с центральным офисом в городе Лобня Московской области.
        </p>
      </div>
    </v-container>
    <div class="about__block">

      <ul class="about__pagelist">
        <li class="about__pagelist-item" v-for="(item, index) in pages" :key="index">
          <router-link :to="item.to">
            <img :src="item.img" />
            <div class="about__pagelist-content">
              <h5>{{ item.title }}</h5>
              <p class="cmp-line-clamp cmp-line-clamp--4">{{ item.text }}</p>
            </div>
          </router-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<style lang="scss">
.about {
  a {
    color: $black !important;
  }

  img {
    //margin-bottom: 20px;
  }

  &__text p {
    font-size: 22px;
    margin-bottom: 20px;
  }

  &__block {
    background: $light-gray-section;
    padding: 30px 0;
  }

  &__pagelist {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__pagelist-item {
    margin: 10px 10px;
    max-width: 350px;

    @include up($lg) {
      margin: 0 10px;
    }
  }

  &__pagelist-content {
    padding: 30px;
    text-align: left;
    background-color: $white;

    & p {
      font-size: 18px;
      margin-bottom: 0;
    }

    & h5 {
      min-height: 60px;
    }
  }

}
</style>

<script>
import hero from '@/components/hero.vue';
import router from '@/router';

export default {
  name: "About",
  components: {
    hero,

  },
  data() {
    return {
      heroTitle: 'О компании',
      heroSubtitle: 'Строим доверие',
      background: require('@/assets/about.jpg'),
      //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
    }
  },
  computed: {
    pages() {
      return [
        {
          to: '',
          img: require('@/assets/tmp/about/page1.jpg'),
          title: 'Sika – мировой лидер с системой ценностей',
          text: 'Корпоративный дух компании Sika является синонимом прочного набора ценностей и принципов, составляющих ядро компании. Пять принципов управления означают...'
        },
        {
          to: '',
          img: require('@/assets/tmp/about/page2.jpg'),
          title: 'От истоков по настоящее время – Наша история',
          text: 'Каспар Винклер основал свой бизнес в 1910 году. Его первыми изобретениями были средства для защиты и очистки гранита (Conservado, Purigo) и гидроизоляционные строительные растворы...'
        },
        {
          to: '',
          img: require('@/assets/tmp/about/page3.jpg'),
          title: 'Торговая марка Sika',
          text: 'Торговая марка Sika означает качество, инновации и высокий уровень обслуживания. Наша торговая марка придает продукции самобытность и ассоциирует ее с определенным набором ценностей. Это...'
        },
        {
          to: '',
          img: require('@/assets/tmp/about/page4.jpg'),
          title: 'Устойчивое развитие',
          text: 'Компания Sika уделяет большое внимание безопасности, качеству, ответственному росту и созданию ценностей во всех сферах своей деятельности. Компания Sika делегирует ответственность за...'
        },
      ]
    }
  }
}
</script>
