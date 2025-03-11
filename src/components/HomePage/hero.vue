<template>
  <div class="cmp-font--klavika hero">
    <div class="cmp-hero cmp-hero--darkbg cmp-hero--parallax cmp-hero--video">
      <!--<div class="cmp-hero__background">
      <picture>
        <img src="../../assets/hero-skyline-2.jpg">
      </picture>
    </div>-->
      <div class="cmp-video">
        <video playsinline="" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://sika.scene7.com/is/content/sika/glo-skyline-loop" type="video/mp4">
        </video>
      </div>

      <div class="cmp-hero__content cmp-hero__content--video">
        <div class="cmp-hero__content--wrapper">
          <div class="cmp-hero__content--wrapper--dark">
            <h1 class="cmp-display">Sika Россия</h1>
            <h4 class="cmp-font--regular">Строим доверие</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  & h1,
  & h4 {
    font-family: $secondary-font-family !important;
  }
}
</style>