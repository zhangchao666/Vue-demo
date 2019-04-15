export default function(vue) {
	return [
		{
			$type: 'input',
			$id: 'name',
			label: vue.$t('dvm.resource.port.name'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' }
		},
		{
			$type: 'select',
			$id: 'alarm-inverse-mode',
			label: vue.$t('dvm.resource.port.alarm-inverse-mode'),
			$el: {
				disabled: false,
			},
			$options: [
				{
					label: vue.$t('dvm.resource.port.alarm-inverse-mode_un-inverse'),
					value: 'un-inverse'
				},
				{
					label: vue.$t('dvm.resource.port.alarm-inverse-mode_Automatic'),
					value: 'Automatic'
				},
				{
					label: vue.$t('dvm.resource.port.alarm-inverse-mode_Manual'),
					value: 'Manual'
				}
			],
			$attrs: { class: 'el-form-item form-item-edit' },
		},
		{
			$type: 'input',
			$id: 'number',
			label: vue.$t('dvm.resource.port.number'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'requested-number',
			label: vue.$t('dvm.resource.port.requested-number'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-connector-type',
			label: vue.$t('dvm.resource.port.opt-connector-type'),
			$el: {
				disabled: true,
			},
			$options: [
				{
					label: 'Optical',
					value: 'optical'
				},
				{
					label: 'Electrical',
					value: 'electrical'
				}
			],
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'current-rate',
			label: vue.$t('dvm.resource.port.current-rate') + '(kbit/s)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'max-rate',
			label: vue.$t('dvm.resource.port.max-rate') + '(kbit/s)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-rx-wave-length',
			label: vue.$t('dvm.resource.port.opt-rx-wave-length') + '(nm)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-bit-rate',
			label: vue.$t('dvm.resource.port.opt-bit-rate') + '(kbit/s)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-rx-power',
			label: vue.$t('dvm.resource.port.opt-rx-power') + '(dBm)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-temperature',
			label: vue.$t('dvm.resource.port.opt-rx-power') + '(℃)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-voltage',
			label: vue.$t('dvm.resource.port.opt-voltage') + '(V)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-module-type',
			label: vue.$t('dvm.resource.port.opt-module-type'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-laser-status',
			label: vue.$t('dvm.resource.port.opt-laser-status'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-vendor-name',
			label: vue.$t('dvm.resource.port.opt-vendor-name'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-vendor-sn',
			label: vue.$t('dvm.resource.port.opt-vendor-sn'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-tx-wave-length',
			label: vue.$t('dvm.resource.port.opt-tx-wave-length') + '(nm)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-distance',
			label: vue.$t('dvm.resource.port.opt-distanc') + '(m)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-tx-power',
			label: vue.$t('dvm.resource.port.opt-tx-power') + '(dBm)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-bias-current',
			label: vue.$t('dvm.resource.port.opt-bias-current') + '(mA)',
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-sfp-present',
			label: vue.$t('dvm.resource.port.opt-sfp-present'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-media-type',
			label: vue.$t('dvm.resource.port.opt-media-type'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-ddm-support',
			label: vue.$t('dvm.resource.port.opt-ddm-support'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'opt-vendor-pn',
			label: vue.$t('dvm.resource.port.opt-vendor-pn'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},

		{
			$type: 'input',
			$id: 'opt-vendor-reversion',
			label: vue.$t('dvm.resource.port.opt-vendor-reversion'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'port-type',
			label: vue.$t('dvm.resource.port.port-type'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'admin-state',
			label: vue.$t('dvm.resource.port.admin-state'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
		{
			$type: 'input',
			$id: 'oper-state',
			label: vue.$t('dvm.resource.port.oper-state'),
			$el: {
				disabled: true,
			},
			$attrs: { class: 'el-form-item form-item-plain' },
		},
	];
}
