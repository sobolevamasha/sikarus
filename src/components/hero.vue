<template>
  <div class="cmp-font--klavika hero">
    <div class="cmp-hero cmp-hero--darkbg cmp-hero--parallax" :class="heroClass">
      <div v-if="background && !video" class="cmp-hero__background">
        <picture v-show="background">
          <img :src="background">
        </picture>
      </div>
      <div v-else class="cmp-video">
        <video v-if="video" playsinline="" autoplay="autoplay" muted="muted" loop="loop">
          <source :src="video" type="video/mp4">
        </video>
      </div>

      <div class="container cmp-hero__content">
        <div class="cmp-hero__content--wrapper">
          <div class="cmp-hero__content--wrapper--dark">
            <h1 class="cmp-display">{{ title }}</h1>
            <h4 class="cmp-font--regular">{{ subtitle }}</h4>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "hero",
  props: {
    title: String,
    subtitle: String,
    background: String,
    video: String,
    isSmall: Boolean
  },

  computed: {
    heroClass() {
      return {
        'cmp-hero--noimage cmp-hero--small': !this.background,
        'cmp-hero--small': this.isSmall,
      }
    },
    
  },
  // watch: {
  //   currentMeta: {
  //     handler(newMeta) {
  //       this.updateProps(newMeta);
  //     },
  //     immediate: true,
  //   },
  // },
  // methods: {
  //   updateProps(meta) {
  //     this.title = meta.title;
  //     this.subtitle = meta.subtitle;
  //     this.background = meta.background;
  //     this.video = meta.video;
  //     this.isSmall = meta.isSmall;
  //   },
  // },

}
</script>

<style lang="scss">
.hero {
  margin-top: 75px;

  @include up($md) {
    margin-top: 0;
  }

  @include up($lg) {
    margin-top: -210px;
  }

  & img,
  & video {
    object-fit: cover;
  }

  &--small {
    height: 600px;
  }

  & h1,
  & h4 {
    font-family: $secondary-font-family !important;
  }

  @include up($md) {
    //margin-top: -30px;
  }
}
</style>