export default function(vue) {
	return [
		{
			$type: 'select',
			$id: 'type',
			label: vue.$t('dvm.general.type'),
			$options: [
				{
					label: 'CPE',
					value: 'CPE'
				},
				{
					label: 'HUB',
					value: 'HUB'
				},
				{
					label: 'Unknown',
					value: 'Unknown'
				}
			],
			$attrs: { class: 'el-form-item form-item-edit' },
		},
		{
			$type: 'input',
			$id: 'name',
			label: vue.$t('dvm.general.name'),
			$el: {
				minLength: 1,
				maxLength: 16,
				disabled: true
			},
			rules: [
				{
					message: 'Length between 1-16',
					trigger: 'blur'
				}
			],
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'description',
			'label': vue.$t('dvm.general.description'),
			$attrs: { class: 'el-form-item form-item-edit' },
		},
		{
			'$type': 'input',
			'$id': 'vendor',
			'label': vue.$t('dvm.general.vendor'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'select',
			'$id': 'oper-status',
			'label': vue.$t('dvm.general.operateStatus'),
			'$options': [
				{
					'label': 'Up',
					'value': 'Up'
				},
				{
					'label': 'Down',
					'value': 'Down'
				}
			],
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'mac-addr',
			'label': vue.$t('dvm.general.mac'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'run-time',
			'label': vue.$t('dvm.general.runTime'),
			'$el': {
				'disabled': false
			},
			$attrs: { class: 'el-form-item form-item-plain' }
		},
		{
			'$type': 'date-picker',
			'$id': 'sys-time',
			'label': vue.$t('dvm.general.systemTime'),
			'$el': {
				'type': 'datetime'
			},
			$attrs: { class: 'el-form-item form-item-edit' },
		},
		{
			'$type': 'input',
			'$id': 'software-rev',
			'label': vue.$t('dvm.general.softwareRevision'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'hardware-rev',
			'label': vue.$t('dvm.general.hardwareRevision'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'firmware-rev',
			'label': vue.$t('dvm.general.firmwareRevision'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'boot-version',
			'label': vue.$t('dvm.general.bootVersion'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'serial-num',
			'label': vue.$t('dvm.general.serialNumber'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'cpu-utilization',
			'label': vue.$t('dvm.general.cpuUtilization'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' }
		},
		{
			'$type': 'input',
			'$id': 'memory-utilization',
			'label': vue.$t('dvm.general.memoryUtilization'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'of-config-id',
			'label': vue.$t('dvm.general.OFCONFIGID'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			'$type': 'input',
			'$id': 'config-version',
			'label': vue.$t('dvm.general.OFCONFIGVersion'),
			'$el': {
				'disabled': true
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		}
	]
}
