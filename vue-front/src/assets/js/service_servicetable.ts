import {
	Vue,
} from '@/config/base.imports';

export default [
	{
		label: 'Table ID',
		prop: 'table-id',
	},
	{
		label: 'Type',
		prop: 'type',
	},
	{
		label: 'Match',
		prop: 'match',
		component: Vue.extend({
			props: ['row', 'column', 'col'],
			render(h) {
				return h('a', {
					attrs: {
						href: 'javascript:void(0)',
					},
					domProps: {
						innerHTML: (() => {
							return `2 match_sets`;
							// return this.row[this.col.prop];
						})(),
					},
				});
			},
		}),
	},
	{
		label: 'GoTo Table',
		prop: 'Table',
		'min-width': 120,
	},
	{
		label: 'Action',
		prop: 'instructions',
		component: Vue.extend({
			props: ['row', 'column', 'col'],
			render(h) {
				return h('a', {
					attrs: {
						href: 'javascript:void(0)',
					},
					domProps: {
						innerHTML: (() => {
							return `5 actions`;
							// return this.row[this.col.prop];
						})(),
					},
				});
			},
		}),
	},
	{
		label: 'Priority',
		prop: 'priority',
	},
	{
		label: 'Idle Timeout',
		prop: 'idle-timeout',
		'min-width': 120,
	},
	{
		label: 'Hard Timeout',
		prop: 'hard-timeout',
		'min-width': 120,
	},
	{
		label: 'Container Name',
		prop: 'container-name',
		'min-width': 140,
	},
	{
		label: 'Cookie',
		prop: 'cookie',
	},
	{
		label: 'Cookie Name',
		prop: 'cookie_mask',
		'min-width': 140,
	},
	{
		label: 'Buffer ID',
		prop: 'buffer_id',
		'min-width': 140,
	},
	{
		label: 'Out Port',
		prop: 'out_port',
		'min-width': 140,
	},
	{
		label: 'Out Group',
		prop: 'out_group',
		'min-width': 140,
	},
	{
		label: 'Flags',
		prop: 'flags',
		'min-width': 140,
	},
	{
		label: 'Flow Name',
		prop: 'flow-name',
		'min-width': 140,
	},
	{
		label: 'Install HW',
		prop: 'installHw',
		'min-width': 140,
	},

	{
		label: 'Barrier',
		prop: 'barrier',
	},
	{
		label: 'Strict',
		prop: 'strict',
	},
];
