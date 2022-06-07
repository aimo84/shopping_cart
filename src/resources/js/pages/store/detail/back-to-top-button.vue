<template>
  <div id="back-to-top" @click="backToTop" tabindex="-1">
    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.799805 8.59999L8.1998 0.799988L15.7998 8.59999" stroke="#E62627" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <br>
    TOP
  </div>
</template>

<script>
  export default {
    mounted () {
      // Code that will run only after the entire view has been rendered
      this.$nextTick(function () {
        const backToTopBtn = document.getElementById('back-to-top')

        // When the user scrolls down 100px from the top of the document, show the button
        window.onscroll = function () {
          if (
            // For Chrome, Firefox, IE and Opera
            document.documentElement.scrollTop > 100 ||
            // For Safari
            document.body.scrollTop > 100
          ) {
            backToTopBtn.style.display = 'block'
          } else {
            backToTopBtn.style.display = 'none'
          }
        }
      })
    },
    methods: {
      backToTop () {
        // For Chrome, Firefox, IE and Opera
        document.documentElement.scrollTop = 0
        // For Safari
        document.body.scrollTop = 0
        document.activeElement.blur()
      }
    }
  }
</script>

<style lang="scss">
  @mixin back-to-top-hover {
    padding-top: 5px;
    color: #FFFFFF;
    border: none;
    background: linear-gradient(286.62deg, #DF1584 10.96%, #DF1E5F 36.51%, #E02542 61.07%, #E02932 82.54%, #E02B2C 98.54%);
    path {
      stroke: #FFFFFF;
    }
  }
  #back-to-top {
    display: none;
    // under sticky bar (z-index: 999)
    z-index: 999;
    position: fixed;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    padding-top: 3px;
    color: #E62627;
    font-family: "TrueMedium", sans-serif;
    font-size: 20px;
    line-height: 1;
    text-align: center;
    border-radius: 4px;
    border: 2px solid #E62627;
    background-color: #F7F7F7;
    cursor: pointer;
    user-select: none;
    right: 0;
    @media (min-width: 576px) {
      right: 10px;
    }
    /*
      w_BackToTop = 50px : width of 'back-to-top'
      w_ChatShop = 126.875px : width of 'fixed-chatshop'
      right_ChatShop = 10px : when @media (min-width: 576px)

      calculate breakpoint b to 'back-to-top' is left alignment of 'fixed-chatshop':
        b = 1200px + 2 * (w_ChatShop + right_ChatShop) = 1473.75px ~= 1474px
      right_BackToTop = w_ChatShop + right_ChatShop - w_BackToTop = 86.875px;
    */
    @media (min-width: 1474px) {
      right: 86.875px;
    }
    &:focus {
      @include back-to-top-hover;
    }
    @media(hover: hover) {
      &:hover {
        @include back-to-top-hover;
      }
    }
  }
</style>
