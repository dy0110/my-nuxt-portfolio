<template>
  <v-card flat max-width="600" class="mx-auto">
    <v-card-title class="headline">
      <v-avatar left color="secondary">
        <span class="headline">
          <v-icon color="white" size="36">timeline</v-icon>
        </span>
      </v-avatar>
      &nbsp;Timeline
    </v-card-title>
    <v-card-text class="ml-4">
      <v-timeline dense>
        <v-timeline-item
          v-for="(item, index) in lifeEvent"
          :key="index"
          color="teal lighten-2"
        >
          <timelineItem
            :title="item.title"
            :subtitle="item.subtitle"
            :event-array="item.event"
          />
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <scrollTopButton />
    </v-card-actions>
  </v-card>
</template>

<script>
import timelineItem from '../components/timelineItem'
import scrollTopButton from '../components/scrollTopButton'

export default {
  components: {
    timelineItem,
    scrollTopButton
  },
  data() {
    return {
      lifeEvent: [
        { title: '1995', subtitle: '', event: ['宮城県に生れる'] },
        {
          title: '2001 ~ 2006',
          subtitle: '子供時代',
          event: [
            '日韓W杯の影響でサッカーを始める(11年続ける)',
            'PS2を購入してもらいゲームに熱中する',
            '当時放送していたガンダムにハマり、プラモデルを製作するようになる',
            '川や近所の公園でみる生き物の姿から生物に興味を持つようになる'
          ]
        },
        {
          title: '2010 ~ 2013',
          subtitle: '高校時代',
          event: ['サッカーに打ち込む']
        },
        {
          title: '2013 ~ 2017',
          subtitle: '大学時代',
          event: [
            '関東圏の大学の農学部水産学科へ進学する',
            'プラモデルの制作を再開する',
            '就活で苦戦し、志望業界をITへ変更する',
            'DNAを用いた巻貝の種判別について研究する'
          ]
        },
        {
          title: '2017 ~ 2019.8',
          subtitle: '社会人時代 (1)',
          event: [
            '都内のSES企業に入社する',
            '未経験での入社だったが業務やプログラミングの勉強を通じて社会人としても多くのことを学ぶ',
            '業務に取り組んでいく中で、働き方や将来に不安を感じ転職を決意する'
          ]
        },
        {
          title: '2019.9 ~',
          subtitle: '社会人時代 (2)',
          event: [
            '都内のスタートアップ企業にてフロントエンジニアとして勤務する'
          ]
        }
      ]
    }
  }
}
</script>
