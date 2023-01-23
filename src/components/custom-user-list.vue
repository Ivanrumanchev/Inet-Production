<template>
	<v-card
		max-width="450"
		class="mx-auto"
	>
		<v-list three-line>
			<v-subheader
				v-text="'List'"
			/>

			<div
				v-for="(item, index) in users"
				:key="item.title"
			>
				<v-divider
					v-if="index !== 0"
					inset
				/>

				<v-list-item>
					<v-list-item-avatar>
						<v-img :src="item.avatar" @click="onAvatarClick(item)"/>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title v-html="item.title" />

						<v-list-item-subtitle v-html="item.subtitle" />

						<span
							:key="keyUserInfoUpdate"
							class="body-2"
							:style="{opacity: +Boolean(item.showedAddress)}"
						>
							{{ item.address }}
						</span>
					</v-list-item-content>
				</v-list-item>
			</div>
		</v-list>
	</v-card>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'custom-user-list',

		created() {
			this.fetchUsers();
		},

		data: function() {
			return ({
				keyUserInfoUpdate: 0,
			})
		},

		computed: {
			...mapGetters('users', {
				users: 'getUsers'
			}),
		},

		methods: {
			...mapActions('users', ['fetchUsers']),

			onAvatarClick(item) {
				item.showedAddress = !item.showedAddress;

				this.keyUserInfoUpdate++;
			},
		},
  }
</script>
