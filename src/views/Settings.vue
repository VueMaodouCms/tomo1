<template>
  <div id="settings" class="">
    <b-table :items="items" :fields="fields" @row-clicked="selectAlarm">
      <template v-slot:cell(preview)="data">
        <av-line :line-width="2" :line-color="['#42adff', '#4ce6b8']" :audio-src="'./alarms/'+data.item.file"
    ></av-line>
        <!-- <audio controls :src="'./alarms/'+data.item.file"></audio> -->
      </template>
      <template v-slot:cell(select)="data">
        <font-awesome-icon v-if="data.item.file == alarm" :icon="['fas', 'check']"></font-awesome-icon>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: '鬧鈴',
          file: 'alarm1.mp3'
        },
        {
          name: 'yay',
          file: 'yay.mp3'
        },
        {
          name: 'ama',
          file: 'ama.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    }
  }
}
</script>
