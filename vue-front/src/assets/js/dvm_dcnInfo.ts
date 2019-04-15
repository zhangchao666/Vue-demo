export default function (vue) {
    return [
        {
            "$type": "input",
            "$id": "controller-ip",
            "label": vue.$t('dvm.dcn.controllerIp'),
            "$el": {
                "disabled": true
            },
            $attrs: { class: 'el-form-item form-item-plain' },
        },
        {
            "$type": "input",
            "$id": "manage-ip-address",
            "label": vue.$t('dvm.dcn.manageIpAddress'),
            "$el": {
                "disabled": true
            },
            $attrs: { class: 'el-form-item form-item-plain' },
        },
        {
            "$type": "input",
            "$id": "manage-ip-mask",
            "label": vue.$t('dvm.dcn.manageIpMask'),
            "$el": {
                "disabled": true,
                "min": 0,
                "max": 32
            },
            "rules": [
                {
                    "message": "value between 0-32",
                    "trigger": "blur"
                }
            ],
            $attrs: { class: 'el-form-item form-item-plain' },
        },
        {
            "$type": "input",
            "$id": "default-route",
            "label": vue.$t('dvm.dcn.defaultRoute'),
            $attrs: { class: 'el-form-item form-item-edit' }
        },
        {
            "$type": "input",
            "$id": "vid",
            "label": vue.$t('dvm.dcn.vid'),
            "$el": {
                "disabled": true,
                "min": 1,
                "max": 4049
            },
            "rules": [
                {
                    "message": "value between 1-4049",
                    "trigger": "blur"
                }
            ],
            $attrs: { class: 'el-form-item form-item-plain' }
        }
    ]
}
