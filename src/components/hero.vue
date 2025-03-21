<template>
  <div class="cmp-font--klavika hero">
    <div class="cmp-hero cmp-hero--darkbg cmp-hero--parallax" :class="heroClass">
      <div v-if="background && !video" class="cmp-hero__background">
        <picture v-if="background">
          <img :src="background">
        </picture>
      </div>
      <div v-else class="cmp-video">
        <video playsinline="" autoplay="autoplay" muted="muted" loop="loop">
          <source :src="video" type="video/mp4">
        </video>
      </div>

      <v-container class="cmp-hero__content cmp-hero__content--video">
        <div class="cmp-hero__content--wrapper">
          <div class="cmp-hero__content--wrapper--dark">
            <h1 class="cmp-display">{{ title }}</h1>
            <h4 v-if="subtitle" class="cmp-font--regular">{{ subtitle }}</h4>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
  props: ["title", "subtitle", "background", "video", "isSmall"],

  computed: {
    heroClass() {
      return {
        'cmp-hero--noimage cmp-hero--small': !this.background,
        'cmp-hero--small': this.isSmall,
      }
    },
  }
}
</script>

<style lang="scss">
.hero {

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