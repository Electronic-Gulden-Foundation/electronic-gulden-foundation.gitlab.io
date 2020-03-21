<template>
  <b-container class="wrapper">
    <b-row>
      <b-col>
        <h1>{{ $t('pages.team.head.title') }}</h1>

        <div v-html="TeamText" />
      </b-col>
    </b-row>

    <b-row
      v-for="member in team"
      :key="member.name"
      class="team-member"
    >
      <b-col class="spacer my-4" md="12" />

      <b-col class="left d-flex align-items-center justify-content-center" md="4" sm="12" xl="3">
        <div
          v-if="member.photo"
          :style="{'background-image': `url('${member.photo}')`}"
          class="background-image"
        />
        <div
          v-else
          class="member-icon"
        >
          <fa :icon="noImageIcon" />
        </div>
      </b-col>

      <b-col class="right">
        <h4>{{ member.name }}</h4>

        <div
          class="member-text"
          v-html="$md.render(member.description)"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

  @Component({
    layout: 'thin',
    head (this: TeamPage) {
      return {
        title: this.$t('pages.team.head.title').toString()
      }
    }
  })
  export default class TeamPage extends Vue {
    TeamText = require('~/locales/text/team.md').default
    noImageIcon = faUser

    team = require('~/data/team').default.map((member) => {
      return {
        ...member,

        descriptionExpanded: false
      }
    })
  }
</script>

<style lang="scss" scoped>
  $image-size: 150px;

  .wrapper {
    background-color: #fff;
    border-radius: 2px;
    font-size: 1.1rem;
  }

  .team-member {
    .spacer {
      $spacer-color: $border-color;

      background: linear-gradient(to right, #fff 20%, $spacer-color 40%, $spacer-color 60%, #fff 80%);
      height: 2px;
    }

    .left {
      > div {
        border-radius: $image-size;
        border: 1px solid $gray-200;
        color: $gray-200;
        height: $image-size;
        width: $image-size;
      }

      .background-image {
        background-size: cover;
      }

      .member-icon {
        font-size: $image-size * 0.4;
        line-height: $image-size;
        text-align: center;
      }
    }
  }
</style>
