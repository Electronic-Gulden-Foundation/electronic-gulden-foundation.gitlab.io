<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="12" md="4">
          <h4 class="footer-title">
            {{ $t('footer.foundation.title') }}
          </h4>

          <p>{{ $t('footer.foundation.kvk') }}</p>
          <p>{{ $t('footer.foundation.contact') }}</p>
        </b-col>

        <b-col>
          <div class="link-wrapper">
            <div
              v-for="footerItem in footerItems"
              :key="footerItem.title"
              class="link-group"
            >
              <h4 class="footer-title">
                {{ $t(footerItem.title) }}
              </h4>

              <ul>
                <li
                  v-for="item in footerItem.items"
                  :key="item.name"
                >
                  <a
                    :href="item.href"
                    target="_blank"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center small">
          &copy; {{ $t('footer.copyRightText') }}
          -
          <a
            href="https://gitlab.com/electronic-gulden-foundation/electronic-gulden-foundation.gitlab.io/"
            target="_blank"
          >
            {{ $t('footer.helpImproveWebsite') }}
          </a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
class Footer extends Vue {
  footerItems = [
		{
		  title: 'footer.socialMedia',
			items: require('~/data/social-media').default
		},
		{
		  title: 'footer.exchanges',
			items: require('~/data/exchanges').default
		},
		{
		  title: 'footer.pools',
			items: require('~/data/pools').default
		},
		{
		  title: 'footer.blockexplorers',
      items: require('~/data/blockexplorers').default
		},
		{
		  title: 'footer.onlineWallets',
			items: require('~/data/online-wallets').default
		}
	]
}

export default Footer
</script>

<style lang="scss" scoped>
footer {
	background-color: #353535;
	width: 100%;
	padding: 25px;
	color: #fff;
	font-size: 0.9rem;

	ul {
		list-style-type: none;
		padding-left: 0;

		li {
			padding-left: 0;
		}
	}

	.link-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: space-evenly;

		.link-group {
			min-width: 200px;
		}
	}
}
</style>
