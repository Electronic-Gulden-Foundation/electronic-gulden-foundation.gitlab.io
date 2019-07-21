<template>
  <div
    class="mission-statement"
    v-html="MissionStatementText"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MissionStatementText from '~/locales/text/missie.md'

@Component
class MissionStatement extends Vue {
  MissionStatementText = MissionStatementText
}

export default MissionStatement
</script>

<style lang="scss" scoped>
.mission-statement {
  @include efl-orange-gradient-background;

  padding: 25px;
}
</style>
