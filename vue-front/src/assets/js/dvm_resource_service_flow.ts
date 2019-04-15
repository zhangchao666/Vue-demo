import {
	Vue,
} from '@/config/base.imports';

export default function(_m) {
	return [
		{
			label: _m.$t('dvm.resource.service.flowTable.table.table-id'),
			prop: 'table-id',
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.type'),
			prop: 'type',
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.match'),
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
								return this.row[this.col.prop];
							})(),
						},
					});
				},
			}),
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.Table'),
			prop: 'Table',
			'min-width': 120,
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.instructions'),
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
								return this.row[this.col.prop];
							})(),
						},
					});
				},
			}),
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.priority'),
			prop: 'priority',
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.idle-timeout'),
			prop: 'idle-timeout',
			'min-width': 120,
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.hard-timeout'),
			prop: 'hard-timeout',
			'min-width': 120,
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.out_port'),
			prop: 'out_port',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.out_group'),
			prop: 'out_group',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.flags'),
			prop: 'flags',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.flowTable.table.flow-name'),
			prop: 'flow-name',
			'min-width': 140,
		}
	];
}
