<template>
  <div class="topbar">
   <div
      class="topbar-icon tracking"
      @click="$parent.openMultiMenu()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14.193 14.473"
        fill="currentColor"
      >
        <path d="M11.541-88.843a1.209 1.209 0 01.946-.458 1.171 1.171 0 01.321.046l1.953.534a5.805 5.805 0 00.656-2.716A5.972 5.972 0 009.466-97.4 5.943 5.943 0 003.5-91.452a5.975 5.975 0 005.966 5.966 5.939 5.939 0 002.381-.5l-.5-1.815a1.255 1.255 0 01.2-1.038zm2.335-3.6a4.3 4.3 0 01.107.992 5.358 5.358 0 01-.107.992 29.88 29.88 0 00-1.755-.137c.015-.275.03-.564.03-.855s-.015-.564-.03-.855c.61-.03 1.19-.076 1.755-.137zm-.564-1.389c-.427.046-.885.076-1.343.107a9.331 9.331 0 00-.473-1.77 4.537 4.537 0 011.816 1.663zm-3.846-2.152c.229 0 .763.793 1.038 2.3-.687.015-1.4.015-2.09 0 .29-1.51.824-2.3 1.053-2.3zm-4.425 5.523a4.3 4.3 0 01-.107-.992 5.358 5.358 0 01.107-.992 29.88 29.88 0 001.755.137c-.015.29-.015.564-.015.855 0 .275.015.564.03.855-.625.03-1.205.076-1.77.137zm.564 1.373c.427-.03.885-.076 1.343-.092a9.331 9.331 0 00.473 1.77 4.675 4.675 0 01-1.816-1.678zm1.358-4.639a33 33 0 01-1.343-.107 4.519 4.519 0 011.831-1.678 8.462 8.462 0 00-.488 1.785zm2.5 6.79c-.229 0-.763-.793-1.053-2.3.687-.016 1.4-.016 2.09 0-.29 1.526-.824 2.3-1.038 2.3zm1.221-3.723a62.074 62.074 0 00-2.441 0c-.015-.259-.03-.519-.03-.793s.015-.534.03-.793c.412.015.809.03 1.221.03s.824-.015 1.221-.03c.015.259.03.519.03.793s-.015.535-.029.794z" fill="#484848" transform="translate(-3.5 97.404)"/>
        <path d="M66.125-34.076L64.2-36l.976-.687a.25.25 0 00-.076-.442l-4.043-1.114a.252.252 0 00-.305.305l1.114 4.043a.25.25 0 00.442.076l.692-.974 1.923 1.922a.258.258 0 00.351 0l.855-.855a.232.232 0 000-.35z" fill="#484848" transform="translate(-52.011 47.275)"/>
      </svg>
    </div>
    <router-link to="/tracking" class="topbar-icon tracking">
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z">
        </path>
      </svg>
    </router-link>
    <router-link to="/cart" class="topbar-icon cart">
      <div class="cart-badge">{{cart}}</div>
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        style="margin-bottom: -1px;"
      >
        <path
          fill="currentColor"
          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
        </path>
      </svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cart: 0
    }),
    mounted () {
      window.addEventListener('cart-updated', (event) => {
        this.cart = event.detail.cart
        window.localStorage.setItem('cart-length', this.cart)
      })
      const data = window.localStorage.getItem('cart-length')
      if (data) this.cart = data
    }
  }
</script>

<style scoped lang="scss">
.topbar {
  height: 90px;
  display: none;
  align-items: center;
  justify-content: flex-end;
  padding: 50px 16px 0 16px;

  .topbar-icon {
    display: none;
    position: relative;
    margin-left: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #484848;
    cursor: pointer;

    &.cart {
      display: none;
      .cart-badge {
        position: absolute;
        background: #eb232a;
        height: 15px;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        top: 5px;
        right: 3px;
      }
    }

    svg {
      display: none;
      width: 20px;
      height: 20px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .topbar {
    display: flex;
    height: 0;
  }
}
</style>
