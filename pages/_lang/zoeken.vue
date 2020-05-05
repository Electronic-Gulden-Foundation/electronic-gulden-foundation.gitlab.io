<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col md="6">
        <div class="search-wrapper my-5 py-3 px-4 border border-gray bg-white">
          <h1>{{ $t('pages.search.head.title') }}</h1>

          <b-form @submit.prevent="doSearch()">
            <b-form-group :label="$t('pages.search.input.label')">
              <b-input-group>
                <b-input
                  :placeholder="$t('pages.search.input.placeholder')"
                  v-model="searchInput"
                />

                <b-input-group-append>
                  <b-btn
                    type="submit"
                    variant="primary"
                  >
                    <fa :icon="searchIcon"/>
                  </b-btn>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-form>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-table :fields="tableFields" :items="searchResults" class="bg-white" responsive>
          <template v-slot:cell(titel)="{ item }">
            <router-link :to="item.url" v-if="item.isInternalLink">
              {{ item.titel }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.titel }}
            </a>
          </template>

          <template v-slot:cell(fragment)="{ item }">
            <span v-html="item.fragment"/>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import axios from 'axios'
  import { Component, Vue } from 'vue-property-decorator'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'

  interface SearchResult {
    [key: string]: SearchResultItem;
  }

  interface SearchResultItem {
    url: string;
    titel: string;
    datum: string;
    time: number;
    categorie: string;
    fragment: string;
    isInternalLink?: boolean;
  }

  @Component({
    head (this: SearchPage) {
      return {
        title: this.$t('pages.search.head.title').toString()
      }
    }
  })
  export default class SearchPage extends Vue {
    searchInput: string = ''
    searchIcon = faSearch
    searchResults: SearchResultItem[] = []

    get tableFields () {
      return [
        {
          key: 'titel',
          label: this.$t('pages.search.table.title').toString()
        },
        {
          key: 'datum',
          label: this.$t('pages.search.table.date').toString()
        },
        {
          key: 'categorie',
          label: this.$t('pages.search.table.category').toString()
        },
        {
          key: 'fragment',
          label: this.$t('pages.search.table.fragment').toString()
        }
      ]
    }

    mounted () {
      this.setSearchResultItems(require('./zoekresultaten.json'))
    }

    async doSearch (): Promise<any> {
      const response: SearchResult = await axios.get(`https://e-gulden.org/zoek2.php?${this.searchInput}`)

      console.log(response)
    }

    setSearchResultItems (input: SearchResult) {
      this.searchResults = Object.values(input)
        .map((original) => {
          const item = {
            ...original,

            isInternalLink: original.categorie === 'egulden.org'
          }

          if (item.isInternalLink) {
            item.url = new URL(item.url).pathname
          }

          return item
        })
        .sort((a, b) => b.time - a.time)
    }
  }
</script>
