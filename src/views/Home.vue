<template>
  <div id="home">
    <div class="row d-flex">
      <div class="col">
        <h1>{{ currentText }}</h1>
        <!-- <h2>{{ timetext }}</h2> -->
        <radial-progress-bar class="m-auto" :diameter="300" :completed-steps="timeleft" :total-steps="totalSteps" :startColor="startColor" :stopColor="stopColor">
          <h2>{{ timetext }}</h2>
        </radial-progress-bar>
        <div class="col mr-5">
          <b-btn variant="transparent" v-if="status != 1" @click="start">
            <img src="../assets/play.svg">
          </b-btn>
          <b-btn variant="transparent" v-if="status == 1" @click="pause">
            <img src="../assets/pause.svg">
          </b-btn>
          <b-btn variant="transparent" v-if="current.length > 0 || todos.length > 0" @click="finish(true)">
            <img src="../assets/next.svg">
          </b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 播放
      // 2 = 暫停
      status: 0,
      timer: 0,
      totalSteps: 5,
      startColor: '#42adff',
      stopColor: '#4ce6b8'
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '點擊開始' : '沒有事項'
    },
    timetext () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeleft () {
      return this.$store.getters.timeleft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    start () {
      // this.completedSteps = this.timetext
      // this.totalSteps = parseInt(process.env.VUE_APP_TIMELEFT)
      if (this.status === 2) {
        // 暫停後繼續
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft < 0) {
            this.finish(false)
          }
        }, 1000)
      } else {
        // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          this.timer = setInterval(() => {
            this.$store.commit('countdown')
            if (this.timeleft < 0) {
              this.finish(false)
            }
          }, 1000)
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
      }

      if (this.todos.length > 0) {
        this.start()
      } else {
        alert('結束')
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    }
  }
}
</script>
