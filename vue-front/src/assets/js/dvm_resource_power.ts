export default function(vue) {
	return [
		{
			$type: 'select',
			$id: 'isexist',
			label: vue.$t('dvm.resource.power.isexist'),
			$el: {
				disabled: true,
			},
			$options: [
				{
					label: vue.$t('dvm.resource.power.isexist_Exist'),
					value: 'Exist'
				},
				{
					label: vue.$t('dvm.resource.power.isexist_Notexist'),
					value: 'Notexist'
				}
			],
			$attrs: { class: 'el-form-item form-item-plain' }, // 可选, 写法与 Vue 的 Render 函数一致
		},
		{
			$type: 'select',
			$id: 'input-type',
			label: vue.$t('dvm.resource.power.input-type'),
			$el: {
				disabled: true,
			},
			$options: [
				{
					label: vue.$t('dvm.resource.power.input-type_unknow'),
					value: 'unknow'
				},
				{
					label: vue.$t('dvm.resource.power.input-type_Ac'),
					value: 'Ac'
				},
				{
					label: vue.$t('dvm.resource.power.input-type_dc48'),
					value: 'dc48'
				},
				{
					label: vue.$t('dvm.resource.power.input-type_dc24'),
					value: 'dc24'
				}
			],
			$attrs: { class: 'el-form-item form-item-plain' },
		}
	];
}
