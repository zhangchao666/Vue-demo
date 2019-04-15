export default function(vue) {
	 return [
		 {
			 $type: 'input',
			 $id: 'card-name',
			 label: vue.$t('dvm.resource.card.card-name'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' }, // 可选, 写法与 Vue 的 Render 函数一致
		 },
		 {
			 $type: 'input',
			 $id: 'card-desc',
			 label: vue.$t('dvm.resource.card.card-desc'),
			 $attrs: { class: 'el-form-item form-item-edit' },
		 },
		 {
			 $type: 'select',
			 $id: 'oper-status',
			 label: vue.$t('dvm.resource.card.oper-status'),
			 $el: {
				 disabled: true,
			 },
			 $options: [
				 {
					 label: 'Null',
					 value: 'null'
				 },
				 {
					 label: 'Initing',
					 value: 'initing'
				 },
				 {
					 label: 'Upgrating',
					 value: 'upgrating'
				 }
			 ],
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'manufacture-info',
			 label: vue.$t('dvm.resource.card.manufacture-info'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'serial-num',
			 label: vue.$t('dvm.resource.card.serial-num'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'card-temperature',
			 label: vue.$t('dvm.resource.card.card-temperature'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'cpu-utilization',
			 label: vue.$t('dvm.resource.card.cpu-utilization'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'memory-utilization',
			 label: vue.$t('dvm.resource.card.memory-utilization'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'select',
			 $id: 'master-mode',
			 label: vue.$t('dvm.resource.card.master-mode'),
			 $el: {
				 disabled: true,
			 },
			 $options: [
				 {
					 label: 'Master',
					 value: 'master'
				 },
				 {
					 label: 'Slave',
					 value: 'slave'
				 },
				 {
					 label: 'None',
					 value: 'none'
				 }
			 ],
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'software-version',
			 label: vue.$t('dvm.resource.card.software-version'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'hardware-version',
			 label: vue.$t('dvm.resource.card.hardware-version'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'firmware-version',
			 label: vue.$t('dvm.resource.card.firmware-version'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 },
		 {
			 $type: 'input',
			 $id: 'boot-version',
			 label: vue.$t('dvm.resource.card.boot-version'),
			 $el: {
				 disabled: true,
			 },
			 $attrs: { class: 'el-form-item form-item-plain' },
		 }
	 ];
}
