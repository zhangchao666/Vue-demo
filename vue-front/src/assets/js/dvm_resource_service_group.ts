import {
	Vue,
} from '@/config/base.imports';

export default function(_m){
	return [
		{
			label: _m.$t('dvm.resource.service.groupTable.table.group-id'),
			prop: 'group-id',
		},
		{
			label: _m.$t('dvm.resource.service.groupTable.table.group-name'),
			prop: 'group-name',
		},
		{
			label: _m.$t('dvm.resource.service.groupTable.table.group-type'),
			prop: 'group-type',
		},
		{
			label: _m.$t('dvm.resource.service.groupTable.table.Action'),
			prop: 'Action',
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
			label: _m.$t('dvm.resource.service.groupTable.table.container-name'),
			prop: 'container-name',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.groupTable.table.barrier'),
			prop: 'barrier',
		},
		{
			label: _m.$t('dvm.resource.service.groupTable.table.buckets'),
			prop: 'buckets',
			formatter(row, col, cell) {
				return cell.bucket.reduce((sum, item) => {
					return sum.concat(' ', item['bucket-id']);
				}, '');
			},
		},
	];
} 
