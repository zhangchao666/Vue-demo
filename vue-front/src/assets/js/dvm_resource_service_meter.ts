export default function(_m){
	return [
		{
			label: _m.$t('dvm.resource.service.meterTable.table.meter-id'),
			prop: 'meter-id',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.meterTable.table.meter-name'),
			prop: 'meter-name',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.meterTable.table.container-name'),
			prop: 'container-name',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.meterTable.table.flags'),
			prop: 'flags',
			'min-width': 140,
		},
		{
			label: _m.$t('dvm.resource.service.meterTable.table.band-id'),
			prop: 'band-id',
			'min-width': 140,
			formatter(row, col, cell) {
				return row['meter-band-headers']['meter-band-header'].reduce(
					(sum, item) => {
						return sum.concat(' ', item['band-id']);
					},
					'',
				);
			},
		},
		{
			label: _m.$t('dvm.resource.service.meterTable.table.band-rate'),
			prop: 'band-rate',
			'min-width': 140,
			formatter(row, col, cell) {
				return row['meter-band-headers']['meter-band-header'].reduce(
					(sum, item) => {
						return sum.concat(' ', item['band-rate']);
					},
					'',
				);
			},
		},
		{
			label: _m.$t('dvm.resource.service.meterTable.table.band-size'),
			prop: 'band-size',
			'min-width': 140,
			formatter(row, col, cell) {
				return row['meter-band-headers']['meter-band-header'].reduce(
					(sum, item) => {
						return sum.concat(' ', item['band-burst-size']);
					},
					'',
				);
			},
		},
		{
			label: _m.$t('dvm.resource.service.meterTable.table.band-type'),
			prop: 'band-type',
			'min-width': 140,
			formatter(row, col, cell) {
				return row['meter-band-headers']['meter-band-header'].reduce(
					(sum, item) => {
						return sum.concat(' ', item['meter-band-types'].flags);
					},
					'',
				);
			},
		},
	];
} 
