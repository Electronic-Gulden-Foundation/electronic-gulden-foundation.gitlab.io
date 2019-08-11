<template>
	<footer>
		<b-container>
			<b-row>
				<b-col
					v-for="footerItem in footerItems"
					:key="footerItem.title"
				>
					<h4 class="footer-title">{{ $t(footerItem.title) }}</h4>

					<ul>
						<li v-for="item in footerItem.items" :key="item.name">
							<a :href="item.href" target="_blank">
								{{ $t(item.name) }}
							</a>
						</li>
					</ul>
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
		  title: 'socialMedia.footerTitle',
			items: require('~/data/social-media').default
		},
		{
		  title: 'exchanges.footerTitle',
			items: require('~/data/exchanges').default
		}
	]
}

export default Footer
</script>

<style lang="scss" scoped>
footer {
	background-color: #0b2e13;
	width: 100%;
	padding: 25px;
	color: #fff;
}
</style>
