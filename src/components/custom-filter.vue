<template>
  <div>
		<v-select
				v-model="countryVariant"
				:items="countyFilterList"
				clearable
				label="Filter by country"
		/>

		<v-select
				v-model="scoreVariant"
				:items="scoreFilterList"
				clearable
				label="Filter by score"
		/>

		<v-select
				v-model="sexVariant"
				:items="sexFilterList"
				clearable
				label="Filter by sex"
		/>
  </div>
</template>

<script>
  export default {
    name: 'custom-filter',

    data: () => ({
			countyFilterList : [
				'russia',
        'usa',
			],
			scoreFilterList : [
				'> 20',
        '< 10',
			],
			sexFilterList : [
				'men',
        'women',
			],
    }),

		computed: {
			countryVariant: {
				get () {
					return this.$store.state.filters.country
				},
				set (value) {
					this.$store.commit('filters/setCountryFilter', value)
				}
			},

			scoreVariant: {
				get () {
					return this.$store.state.filters.score
				},
				set (value) {
					this.$store.commit('filters/setScoreFilter', value)
				}
			},

			sexVariant: {
				get () {
					return this.$store.state.filters.sex
				},
				set (value) {
					this.$store.commit('filters/setSexFilter', value)
				}
			}
		},
  }
</script>
