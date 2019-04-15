export default function(vue) {
	return [
		{
			$type: 'input',
			$id: 'spdlevel',
			label: vue.$t('dvm.resource.fan.spdlevel'),
			$attrs: { class: 'el-form-item form-item-plain' }
		},
		{
			$type: 'input',
			$id: 'serial-number',
			label: vue.$t('dvm.resource.fan.serial-number'),
			$attrs: { class: 'el-form-item form-item-plain' }
		},
		{
			$type: 'select',
			$id: 'work-state',
			label: vue.$t('dvm.resource.fan.work-state'),
			$options: [
				{
					label: vue.$t('dvm.resource.fan.work-state_Normal'),
					value: 'Normal'
				},
				{
					label: vue.$t('dvm.resource.fan.work-state_abnormal'),
					value: 'abnormal'
				}
			],
			$attrs: { class: 'el-form-item form-item-plain' }
		}
	];
}
