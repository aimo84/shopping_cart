<template>
  <div class="zodiac">
    <canvas ref="canvas" />
    <canvas ref="jpegCanvas" hidden />
  </div>
</template>

<script>
  export default {
    props: {
      funtong: Object,
      showAscendant: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ascendant () {
        return this.funtong.ascendant.position
      },
      type () {
        return this.ascendant.findIndex((e) => e.rueanphop === 'ตนุ')
      },
      stars () {
        return this.ascendant.map((e, i) => {
          const stars = e.stars || []
          if (this.type === i && stars.length > 0) stars.splice(-1, 1)
          return stars
        })
      },
      resizeRatio () {
        return 17 / 30
      },
      fontSize () {
        return [36, 36, 36, 32, 32, 32, 28]
      },
      positions () {
        return [
          [
            [[285, 180]],
            [[220, 195]],
            [[170, 245]],
            [[155, 310]],
            [[170, 380]],
            [[220, 425]],
            [[285, 445]],
            [[355, 425]],
            [[405, 380]],
            [[420, 310]],
            [[405, 245]],
            [[355, 195]]
          ],
          [
            [[285, 180], [285, 225]],
            [[210, 185], [225, 220]],
            [[150, 250], [185, 250]],
            [[150, 310], [190, 310]],
            [[150, 375], [190, 375]],
            [[230, 405], [215, 440]],
            [[285, 405], [285, 445]],
            [[345, 405], [360, 445]],
            [[380, 375], [420, 375]],
            [[380, 310], [420, 310]],
            [[380, 250], [420, 250]],
            [[360, 190], [345, 220]]
          ],
          [
            [[290, 165], [290, 200], [290, 230]],
            [[230, 165], [230, 200], [230, 230]],
            [[140, 255], [175, 255], [210, 255]],
            [[150, 310], [185, 310], [225, 310]],
            [[140, 365], [175, 365], [210, 365]],
            [[230, 385], [230, 420], [230, 445]],
            [[290, 385], [290, 420], [290, 445]],
            [[345, 385], [345, 415], [345, 445]],
            [[365, 365], [395, 365], [430, 365]],
            [[350, 310], [390, 310], [425, 310]],
            [[365, 255], [395, 255], [430, 255]],
            [[345, 165], [345, 200], [345, 230]]
          ],
          [
            [[290, 165], [290, 195], [290, 220], [290, 250]],
            [[235, 165], [235, 195], [235, 225], [205, 195]],
            [[145, 255], [180, 255], [215, 255], [180, 225]],
            [[150, 310], [175, 310], [205, 310], [235, 310]],
            [[145, 365], [180, 365], [215, 365], [180, 390]],
            [[235, 385], [235, 420], [235, 445], [205, 420]],
            [[290, 365], [290, 395], [290, 425], [290, 455]],
            [[345, 385], [345, 415], [345, 445], [375, 415]],
            [[365, 365], [400, 365], [435, 365], [400, 390]],
            [[345, 310], [375, 310], [405, 310], [435, 310]],
            [[365, 255], [400, 255], [435, 255], [400, 225]],
            [[345, 165], [345, 195], [345, 230], [375, 195]]
          ],
          [
            [[290, 175], [265, 205], [290, 205], [315, 205], [290, 240]],
            [[240, 155], [240, 180], [240, 210], [240, 235], [215, 195]],
            [[145, 255], [165, 255], [190, 255], [215, 255], [180, 230]],
            [[230, 310], [175, 310], [205, 290], [205, 325], [150, 310]],
            [[145, 360], [165, 360], [190, 360], [215, 360], [180, 385]],
            [[240, 380], [240, 405], [240, 430], [240, 455], [215, 420]],
            [[290, 370], [265, 400], [290, 400], [315, 400], [290, 430]],
            [[345, 380], [345, 405], [345, 430], [345, 455], [365, 420]],
            [[365, 360], [385, 360], [410, 360], [435, 360], [400, 385]],
            [[350, 310], [400, 310], [375, 290], [375, 320], [430, 310]],
            [[365, 255], [385, 255], [410, 255], [435, 255], [400, 230]],
            [[345, 155], [345, 185], [345, 210], [345, 235], [365, 195]]
          ],
          [
            [[290, 160], [290, 190], [290, 220], [290, 250], [270, 205], [315, 205]],
            [[240, 155], [240, 180], [240, 210], [240, 235], [215, 185], [215, 210]],
            [[140, 255], [165, 255], [190, 255], [215, 255], [165, 230], [190, 230]],
            [[150, 310], [175, 310], [205, 310], [235, 310], [210, 285], [210, 330]],
            [[145, 360], [165, 360], [190, 360], [215, 360], [165, 385], [190, 385]],
            [[240, 380], [240, 405], [240, 430], [240, 455], [215, 410], [215, 430]],
            [[290, 365], [290, 400], [290, 430], [290, 460], [270, 410], [315, 410]],
            [[345, 380], [345, 405], [345, 430], [345, 455], [365, 405], [365, 430]],
            [[365, 360], [385, 360], [410, 360], [435, 360], [390, 385], [415, 385]],
            [[345, 310], [375, 310], [400, 310], [430, 310], [375, 285], [375, 330]],
            [[365, 255], [385, 255], [410, 255], [435, 255], [390, 230], [415, 230]],
            [[345, 155], [345, 185], [345, 210], [345, 235], [365, 185], [365, 210]]
          ],
          [
            [[290, 160], [290, 185], [290, 210], [290, 230], [290, 260], [268, 208], [310, 208]],
            [[243, 155], [243, 183], [243, 208], [243, 235], [220, 185], [225, 205], [195, 185]],
            [[145, 255], [165, 255], [190, 255], [215, 255], [165, 230], [190, 230], [165, 205]],
            [[145, 305], [170, 305], [195, 305], [220, 305], [243, 305], [220, 285], [215, 330]],
            [[145, 360], [165, 360], [190, 360], [215, 360], [168, 380], [190, 380], [165, 400]],
            [[243, 380], [243, 405], [243, 430], [243, 455], [223, 405], [223, 430], [195, 430]],
            [[290, 355], [290, 380], [290, 405], [290, 430], [290, 458], [270, 405], [310, 405]],
            [[345, 380], [345, 405], [345, 430], [345, 455], [365, 405], [365, 430], [383, 430]],
            [[365, 360], [388, 360], [410, 360], [435, 360], [390, 380], [415, 380], [410, 400]],
            [[345, 308], [365, 308], [390, 308], [415, 308], [440, 308], [368, 283], [365, 330]],
            [[360, 255], [385, 255], [410, 255], [435, 255], [385, 230], [410, 230], [408, 205]],
            [[343, 158], [343, 183], [343, 208], [343, 235], [365, 183], [365, 208], [385, 183]]
          ]
        ]
      }
    },
    async mounted () {
      const fontPath = 'url(/fonts/ChulabhornLikitDisplay/chulabhornlikitdisplay-medium.woff2)'
      const font = new FontFace('ChulabhornLikitDisplay', fontPath)
      await font.load()

      this.img = new Image()
      this.img.src = `/images/drlucky/zodiac-${this.type}.png`
      await this.img.decode()

      this.draw(this.$refs.canvas)

      if (this.showAscendant) {
        this.$emit('resend-email')
      }
    },
    methods: {
      draw (canvas, jpg) {
        canvas.width = 600 * this.resizeRatio
        canvas.height = 600 * this.resizeRatio
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = jpg ? '#fff' : '#ffffff00'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#4F4F4F'
        this.stars.forEach((star, textIndex) => {
          const len = star.length - 1
          ctx.font = `${this.fontSize[len] * this.resizeRatio}px ChulabhornLikitDisplay`
          star.forEach((letter, letterIndex) => {
            const e = this.positions[len][textIndex][letterIndex]
            ctx.fillText(letter, e[0] * this.resizeRatio, e[1] * this.resizeRatio)
          })
        })
      },
      getBase64 () {
        this.draw(this.$refs.jpegCanvas, true)
        return this.$refs.jpegCanvas.toDataURL('image/jpeg', 0.95)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .zodiac {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    font-family: 'ChulabhornLikitDisplay';

    canvas {
      width: 100%;
    }
  }
</style>
