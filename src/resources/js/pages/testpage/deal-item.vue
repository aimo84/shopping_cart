<template>
  <div class="deal" :class="className">
    <div class="deal-logo" :style="themeStyle"><img width="120" height="50" :src="imageUrl" :alt="description"></div>
    <div class="deal-content">
      <div class="content" v-html="content">
      </div>
      <router-link :to="pageLink">
        <button :style="buttonStyle">SEE DETAILS</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default ({
    props: {
      base_url: String,
      logo: String,
      description: String,
      content: String,
      themeColor: String,
      buttonColor: String,
      className: String,
      pageLink: String,
      type: String
    },
    data: () => ({}),
    computed: {
      imageUrl () {
        if (this.base_url) {
          return `${this.base_url}${this.logo}`
        } else {
          return `${this.logo}`
        }        
      },
      themeStyle () {
        return {
          background: this.themeColor
        }
      },
      buttonStyle () {
        return {
          color: this.buttonColor,
          borderColor: this.themeColor
        }
      }
    }
  })
</script>

<style scoped lang="scss">
  .deal {
    min-width: 284px;
    min-height: 300px;
    background: #F7F7F7;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .deal-logo {
      height: 100px;
      width: 100%;
      border-radius: 10px 10px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 240px;
        max-height: 90px;
      }

    }

    .deal-content {
      text-align: center;

      .content {
        font-family: 'TrueLight';
        color: #000;
        margin: 10px 0 15px;
        min-height: 110px;
        overflow: hidden;
      }

      button {
        cursor: pointer;
        width: 180px;
        height: 38px;
        border-radius: 20px;
        background: #f7f7f7;
        font-family: 'TrueBold';
        font-size: 22px;
        border: 2px  solid #999;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .deal:not(:last-child) {
      margin-right: 10px;
    }

    .deal {
      min-width: 175px;
      min-height: 220px;
      height: 220px;

      .deal-logo {
        height: 60px;

        img {
          max-width: 160px;
          max-height: 60px;
        }

      }

      .deal-content {
        .content {
          min-height: 100px;
          margin: 10px 0 5px;
        }

        button {
          width: 150px;
          height: 35px;
          font-size: 20px;
        }
      }
    }
  }
</style>
