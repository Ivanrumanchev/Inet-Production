<template>
	<v-card
		max-width="450"
		class="mx-auto"
	>
		<v-skeleton-loader
			v-if="loading"
			class="mx-auto pt-10"
			min-height="556"
			type="list-item-avatar-three-line@5"
		/>

		<v-list v-else three-line>
			<v-subheader
				v-text="'List'"
			/>

			<v-fade-transition group>
				<p v-if="!users.length" class="ml-4" key="noData">
					Пользователей не найдено
				</p>

				<div
					v-else
					v-for="(item, index) in users"
					:key="item.title"
				>
					<v-divider
						v-if="index !== 0"
						inset
					/>

					<v-list-item class="user-list__item">
						<v-list-item-avatar>
							<v-img :src="item.avatar" @click="onAvatarClick(item)"/>
						</v-list-item-avatar>

						<v-list-item-content :key="keyUserInfoUpdate">
							<v-list-item-title v-html="item.title" />

							<v-list-item-subtitle v-html="item.subtitle" />

							<span
								v-if="item.showedAddress"
								class="body-2"
							>
								{{ item.address }}
							</span>
						</v-list-item-content>
					</v-list-item>
				</div>
			</v-fade-transition>
		</v-list>
	</v-card>
</template>

<script>
	import {mapActions, mapGetters, mapState} from 'vuex';

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
			...mapState('users', {
				loading: 'usersLoading',
			})
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

<style scoped>
	.user-list__item {
		min-height: 100px;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

</style>
