export default {
	domElement: {
		button: {
			apply: '应 用',
			refresh: '刷 新',
			calculate: '计算',
			add: '添 加',
			batch_add: '批量添加',
			query: '查 询',
			remove: '删 除',
			cancel: '取 消',
			preStep: '上一步',
			nextStep: '下一步',
			reset: '重 置',
			filter: '筛 选',
			close: '关 闭',
			ok: '确认',
			export: '导出',
			active: '激活',
			deactive: '去激活',
			save: '保存',
			autoComplete: '自动生成',
			update: '修改',
			discovery: "发现",
			sync: "同步",
			batchUpdate:"批量修改",
			enable: "使能",
			disable: "去使能",
			switch: "倒换",
			setUp:"创建",
			execute:"执行",
			copy: "拷贝",
		},
		table: {
			search: '搜索'
		},
		treeTable: {
			columns: {
				property: '属性',
				value: '值'
			}
		},
		validate: {
			required: '必须选择或填写'
		},
		action: {
			addSuccess: '添加成功',
			editSuccess: '更新成功',
			deleteConfirm: '确认删除吗？',
			deleteSuccess: '删除成功',
			activeSuccess: '激活成功',
			deactiveSuccess: '去激活成功'
		},
		placeHolder: {
			nodeSelect: '选择网元'
		}
	},
	navbar: {
		title: 'IMCA',
		topology: {
			title: '拓扑视图',
			physical: '物理拓扑视图',
			igp: 'IGP拓扑视图',
			clock: '时钟拓扑视图'
		},
		service: {
			title: '业务管理',
			tunnel: '隧道管理',
			eline: '以太网专线业务',
			elan: "ELAN业务",
			l3vpn: 'L3VPN业务',
			flexeGroup: 'FlexE Group管理',
			flexeClient: 'FlexE Client管理',
			channel: 'FlexE Channel管理',
			pw: "PW管理",
			etree: "ETree业务"
		},
		fault: {
			title: '告警管理',
			current: '当前告警',
			history: '历史告警',
			config: '告警配置',
			pmc: 'PMC告警'
		},
		sid: {
			title: 'SID管理',
			srgb: 'SRGB管理',
			srlb: 'SRLB管理',
			prefix: 'Prefix管理',
			adjsid: 'Adjsid管理'
		},
		performance: {
			title: '性能管理',
			current: '当前性能',
			history: '历史性能'
		},
		dvm: {
			title: '设备管理'
		},
		system: {
			title: '系统管理',
			user: '用户管理',
			log: '日志管理',
			version: '版本管理',
			bgpls: 'BGP-LS配置',
			cmd: 'Ping工具',
			profile:"Profile管理",
			systemInfo:"系统信息",
			run:"系统运行信息"
		},
		fund:{
			title: "资产管理",
			node: "网元资产",
			port: "端口资产"
		},
		defend:{
			title: "网络维护",
			upgrade: "版本升级",
		},
		vNet:{
			title: "切片管理",
			vNode: "vNode管理",
			vNet: "vNet管理"
		},
		logOut: '退出登录'
	},
	topology: {
        editNodeForm: {
            title: '编辑网元',
            'user-label': '友好名'
        },
		inToDC: '下层拓扑',
		backToDC: '返回DC'
	},
	dvm: {
		title: '设备管理',
		neList: {
			title: '设备列表',
			table: {
				'user-label': '设备名',
				'admin-ip': 'IP地址',
				'type': '设备类型',
				'admin-status': '管理状态',
				'operate-status': '运行状态',
				'latency': '时延',
				'vendor-name': '制造商',
				'location': '位置',
				'action': '編輯',
			},
			editForm: {
				title: '編輯网元',
				name: '名称'
			}
		},
		shellView: {
			title: '机架图',
			front: '前面板',
			end: '后面板'
		},
		general: {
			title: '通用信息',
			type: '类型',
			name: '名称',
			description: '设备说明',
			vendor: '制造商',
			operateStatus: '运行状态',
			mac: '物理地址',
			runTime: '运行时间',
			systemTime: '系统时间',
			softwareRevision: '软件版本',
			hardwareRevision: '硬件版本',
			firmwareRevision: '固件版本',
			bootVersion: '启动版本',
			serialNumber: '序列号',
			cpuUtilization: 'CPU 利用率',
			memoryUtilization: '内存利用率',
			OFCONFIGID: 'OF-CONFIG 标识',
			OFCONFIGVersion: 'OF-CONFIG 版本'
		},
		dcn: {
			title: 'DCN信息',
			controllerIp: '控制器Ip地址',
			manageIpAddress: '管理IP地址',
			manageIpMask: '管理IP掩码',
			defaultRoute: '网关',
			vid: '管理VLAN',
			table: {
				title: '端口列表',
				name: '名称',
				status: '状态'
			}
		},
		resource: {
			title: '资源管理',
			card: {
				title: '板卡信息',
				'card-name': '名称',
				'card-desc': '描述',
				'oper-status': '操作状态',
				'manufacture-info': '制造信息',
				'serial-num': '序列号',
				'card-temperature': '温度',
				'cpu-utilization': 'CPU利用率（%）',
				'memory-utilization': '内存利用率（%）',
				'master-mode': '主备模式',
				'software-version': '软件版本',
				'hardware-version': '硬件版本',
				'firmware-version': '固件版本',
				'boot-version': '启动版本'
			},
			fan: {
				title: '风扇信息',
				spdlevel: '转速等级（%）',
				'serial-number': '序列号',
				'work-state': '工作状态',
				'work-state_Normal': '正常',
				'work-state_abnormal': '异常'
			},
			power: {
				title: '电源信息',
				isexist: '在位信息',
				'isexist_Exist': '在位',
				'isexist_Notexist': '不在位',
				'input-type': '输入类型',
				'input-type_unknow': '未知',
				'input-type_Ac': '交流',
				'input-type_dc48': '48伏直流',
				'nput-type_dc24': '24伏直流'
			},
			port: {
				title: '端口信息',
				'name': '名称',
				'alarm-inverse-mode': '告警反转模式',
				'alarm-inverse-mode_un-inverse': '不反转',
				'alarm-inverse-mode_Automatic': '自动反转',
				'alarm-inverse-mode_Manual': '手动反转',
				'number': '端口号',
				'requested-number': 'Openflow端口号',
				'opt-connector-type': '光纤接头类型',
				'port-type': '端口类型',
				'admin-state': '管理状态',
				'oper-state': '运行状态',
				'current-rate': '端口当前速率',
				'max-rate': '端口最大速率',
				'opt-rx-wave-length': '光模块收光波长',
				'opt-bit-rate': '光模块比特率',
				'opt-rx-power': '光模块收光功率',
				'opt-temperature': '光模块温度',
				'opt-voltage': '光模块供电电压',
				'opt-module-type': '光模块类型',
				'opt-laser-status': '光模块激光器状态',
				'opt-vendor-name': '光模块厂商名字',
				'opt-vendor-sn': '光模块厂商编号',
				'opt-tx-wave-length': '光模块发光波长',
				'opt-distanc': '光模块传输距离',
				'opt-tx-power': '光模块发光功率',
				'opt-bias-current': '光模块偏置电流',
				'opt-sfp-present': '可插拔光模块在位',
				'opt-media-type': '光纤传输模式',
				'opt-ddm-support': '支持数字诊断',
				'opt-vendor-pn': '光模块零件号',
				'opt-vendor-reversion': '光模块版本号'
			},
			queue: {
				title: '队列设置'
			},
			qos: {
				title: 'QoS配置',
				'scheduling-mode': '调度模式',
				'scheduling-mode_SP': 'SP',
				'scheduling-mode_RR': 'RR',
				'scheduling-mode_WRR': 'WRR',
				'scheduling-mode_WDRR': 'WDRR',
				'scheduling-mode_SP-WRR': 'SP-WRR',
				'scheduling-mode_SP-WDRR': 'SP-WDRR',
				table: {
					id: '索引',
					'resource-id': '资源标识',
					'congestion-mode': '拥塞模式'
				}
			},
			oam: {
				title: 'OAM配置',
				addOam: '添加OAM',
				editOamForm: {
					title: '编辑OAM',
					local: '本端',
					ccm: 'CCM',
					lb: 'LB',
					tst: 'TST',
					ais: 'AIS',
					lck: 'LCK',
					csf: 'CSF',
					proactiveLM: '主动LM',
					onDemandLM: '按需LM',
					proactiveDM: '主动DM',
					onDemandDM: '按需DM',
					psCommand: '保护倒换命令',
					psCommand_Indeterminate: 'Indeterminate',
					psCommand_clear: 'clear',
					psCommand_lockoutOfProtection: 'lockoutOfProtection',
					psCommand_forcedSwitchWorkToProtect: 'forcedSwitchWorkToProtect',
					psCommand_manualSwitchWorkToProtect: 'manualSwitchWorkToProtect',
				},
				columns: {
					name: '名称',
					prop: '属性'
				}
			},
			pw: {
				title: '保护配置',
				columns: {
					name: 'OAM 选项',
					prop: '属性'
				}
			},
			service: {
				title: '业务信息',
				flowTable: {
					title: '流表',
					table: {
						'table-id': '流表索引',
						type: '类型',
						match: '匹配字段',
						Table: 'Table',
						instructions: '指令',
						priority: '优先级',
						'idle-timeout': '空闲超时',
						'hard-timeout': '硬超时',
						//	'container-name': '容器名',
						//	cookie: 'cookie',
						//	'cookie_mask': 'cookie_mask',
						//	'buffer_id': 'buffer_id',
						'out_port': '输出端口',
						'out_group': '输出组',
						flags: '标志',
						'flow-name': '流表名称',
						//	installHw: 'installHw',
						//	barrier: 'barrier',
						//	strict: 'strict'
					}
				},
				groupTable: {
					title: '组表',
					table: {
						'group-id': '组表索引',
						'group-name': '组表名称',
						'group-type': '组表类型',
						Action: '行动',
						'container-name': 'container-name',
						barrier: 'barrier',
						buckets: 'buckets'
					}
				},
				meterTable: {
					title: 'Meter表',
					table: {
						'meter-id': 'meter-id',
						'meter-name': 'meter-name',
						'container-name': 'container-name',
						flags: 'flags',
						'band-id': 'band-id',
						'band-rate': 'band-rate',
						'band-size': 'band-size',
						'band-type': 'band-type'
					}
				}
			}
		},
		performance: {
			title: '性能管理'
		},
		maintenance: {
			title: '设备维护'
		},
		banner: {
			title: '提示信息'
		}
	},
	service: {
		tunnel: {
			title: '隧道管理',
			channel_title: 'FlexE Channel管理',
			tunnelTable: {
				id: '索引',
				name: '名称',
				userLabel: '友好名',
				direction: '方向',
				bandwidth: '带宽',
				type: '类型',
				type_96: 'MPLSTP Tunnel',
				type_2: '环形',
				type_97: 'SRTP Tunnel',
				type_98: 'SRBE Tunnel',
				type_99: 'SR Binding Tunnel',
				sourceNeId: '源网元名',
                destinationNeId: '宿网元名',
                'a2z-cir': '正向CIR',
                'z2a-cir': '反向CIR',
                'a2z-pir': '正向PIR',
                'z2a-pir': '反向PIR',
				sncSwitch: '保护路径',
				noSncSwitch: '无保护',
				sncLsps: '路径列表',
				qos: 'QoS信息',
				adminStatus: '管理状态',
				'adminStatus_admin-up': 'Up',
				'adminStatus_admin-down': 'Down',
				'adminStatus_admin-partial': 'Partial',
				operateStatus: '操作状态',
				'operateStatus_operate-up': 'Up',
				'operateStatus_operate-down': 'Down',
				'operateStatus_operate-partial': 'Partial',
				syncStatus: '同步状态',
				'syncStatus_synced': '同步',
				'syncStatus_unsynced': '未同步',
				tenant: '租户名',
				creator: '创建者',
				parentNcdId: '父NCD名称',
				sourceIp: '源IP',
				destinationIp: '宿IP'
			},
			xcTable: {
				title: '路由信息',
				'backward-in-label': '反向入标签',
				'backward-out-label': '反向出标签',
				'backward-peer-id': '反向对端标识',
				'forward-peer-id': '正向对端标识',
				'egress-ltp-id': "出端口标识",
				'ingress-ltp-id': '入端口标识',
				'egress-vlan': '出端口Vlan',
				'forward-in-label': '正向入标签',
				'forward-out-label': '正向出标签',
				'ingress-vlan': '入端口Vlan',
				'ne-id': "网元标识"
			},
			lsp: {
				'explicit-exclude-link': '不经过的链路列表',
				'explicit-exclude-ne': '不经过的网元列表',
				'explicit-include-link': '经过的链路列表',
				'explicit-include-ne': '经过的网元列表',
			},
			addTunnelDialog: {
				title: '添加隧道',
				topology: {
					title: '路径展示'
				},
				general: {
					title: '基本配置',
					name: '名称',
					type: '隧道类型',
					service_type: 'L2/L3VPN',
					topoType: '拓扑类型',
					userLabel: '友好名',
					tenantId: '租户名',
					creater: '创建者',
					direction: '方向',
					ingressId: '源网元名',
					egressId: '宿网元名',
					'source-ip': '源IP',
					'destination-ip': '宿IP',
					'ingress-ingressVlan': '源网元入Vlan',
					'ingress-egressVlan': '源网元出Vlan',
					'egress-ingressVlan': '宿网元入Vlan',
					'egress-egressVlan': '宿网元出Vlan',
				},
				qos: {
					title: 'QoS配置',
					'belonged-id': '所属对象名称',
					'tunnel-mode': '模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR(kbps)',
					'z2a-cir': '反向CIR(kbps)',
					'a2z-pir': '正向PIR(kbps)',
					'z2a-pir': '反向PIR(kbps)',
					'a2z-cbs': '正向CBS(kbps)',
					'z2a-cbs': '反向CBS(kbps)',
					'a2z-pbs': '正向PBS(kbps)',
					'z2a-pbs': '反向PBS(kbps)',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
				lspoam: {
					title: '保护和OAM配置',
					"name": "保护组名称",  //保护组的名字  GUI填业务名+“-PW保护组”
					"layer-rate": "PW保护",//C层做 PW保护
					"linear-protection-type": "保护类型",//
					"linear-protection-type_1": "无保护",
					"linear-protection-type_2": "1:1路径保护",
					"linear-protection-type_3": "1+1路径保护",
					"linear-protection-type_4": "无保护带恢复",
					"linear-protection-type_5": "1:1路径保护带恢复",
					"linear-protection-type_6": "1+1路径保护带恢复",
					"linear-protection-protocol": "保护协议",//保护类型 C层填。默认填APS
					"switch-mode": "倒换模式",//倒换模式  枚举  GUI填				[single-ended-switch,double-ended-switch]
					"switch-mode_1": "单端倒换",
					"switch-mode_2": "双端倒换",
					"revertive-mode": "恢复模式",//倒换恢复模式 枚举 GUI填					[no-revertive,revertive]
					"revertive-mode_1": "非恢复",
					"revertive-mode_2": "恢复",
					"wtr": "WTR时间",//WTR 时间 GUI填
					"hold-off-time": "倒换延迟",//hold-off-time GUI填
					"reroute-revertive-mode": "重路由恢复模式",//暂时不做 以后GUI提供
					"reroute-wtr": "重路由等待恢复", //暂时不做 以后GUI提供
					"role": "角色",
					"role_1": "主用",
					"role_2": "备用",
					"role_3": "恢复",
					"role_4": "主用恢复",
					"role_5": "备用恢复",
					direction: '方向',
					"type": '类型',
					"cc-allow": "CC连接确认",//GUI 填
					"cc-exp": "CC发送优先级",//GUI 填 枚举				[BE,AF1,AF2,AF3,AF4,EF,CS6,CS7]
					"cc-interval": "CC发送间隔(毫秒)",//GUI填 枚举			[3.3,10,100,1000]	单位 ms
					"lm-mode": "丢包检测模式",//GUI填
					"dm-mode": "时延检测模式", //GUI填
					'role-settings': '各角色LSP OAM配置',
					'role45Switch': '指定恢复主备'
				},
				route: {
					title: '路由约束',
					neList: '网元列表',
					includeNeList: '经过的网元列表',
					excludeNeList: '排除的网元列表',
					linkList: '链接列表',
					includeLinkList: '经过的链接列表',
					excludeLinkList: '排除的链接列表',
					neListFilterPlaceholder: '网元名称过滤',
					linkListFilterPlaceholder: '链接名称过滤',
					neId: '网元Id',
					ingressVlan: '源网元Vlan',
					egressVlan: '宿网元Vlan',
					table: {
						selectNe: '选择网元',
						ingressVlan: '源网元Vlan',
						egressVlan: '宿网元Vlan'
					}
				},
				sncSwitch: {
					name: '名称',
					linearProtectionType: '保护类型',
					switchMode: '倒换模式',
					revertiveMode: '倒换恢复模式',
					wtr: '等待恢复时间',
					holdOffTime: '倒换延迟时间'
				},
				sncLsp: {
					name: '名称',
					userLabel: '友好名',
					direction: '方向',
					role: '角色',
					type: '类型',
					ingress: '源网元',
					egress: '宿网元',
					adminStatus: '管理状态',
					operateOtatus: '操作状态',
					oam: {
						name: '名称'
					},
					ccAllow: 'CC连接确认',
					ccExp: 'CC发送优先级',
					ccInterval: 'CC发送间隔',
					lmMode: '丢包检测模式',
					dmMode: '时延检测模式',
				}
			},
			addChannelDialog: {
				title: '添加FlexE Channel',
				general: {
					title: '基本配置',
					name: '名称',
					userLabel: '友好名',
					tenantId: '租户名',
					creater: '创建者',
					direction: '方向',
					bidirection: '双向',
					unidirection: '单向',
					bandwidth: '带宽',
					ingressId: '源网元名',
					egressId: '宿网元名',
					'source-ip': '源IP/长度',
					'destination-ip': '宿IP/长度',
					'source-next-hop-mac': '源NextHopMac',
					'destination-next-hop-mac': '宿NextHopMac',
					'ingress-ingressVlan': '源网元入Vlan',
					'ingress-egressVlan': '源网元出Vlan',
					'egress-ingressVlan': '宿网元入Vlan',
					'egress-egressVlan': '宿网元出Vlan',
				},
				qos: {
					title: 'QoS配置',
					'belonged-id': '所属对象名称',
					'tunnel-mode': '模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR(kbps)',
					'z2a-cir': '反向CIR(kbps)',
					'a2z-pir': '正向PIR(kbps)',
					'z2a-pir': '反向PIR(kbps)',
					'a2z-cbs': '正向CBS(kbps)',
					'z2a-cbs': '反向CBS(kbps)',
					'a2z-pbs': '正向PBS(kbps)',
					'z2a-pbs': '反向PBS(kbps)',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
				lspoam: {
					title: '保护和OAM配置',
					"name": "保护组名称",  //保护组的名字  GUI填业务名+“-PW保护组”
					"layer-rate": "PW保护",//C层做 PW保护
					"linear-protection-type": "保护类型",//
					"linear-protection-type_1": "无保护",
					"linear-protection-type_2": "1:1路径保护",
					"linear-protection-type_3": "1+1路径保护",
					"linear-protection-type_4": "无保护带恢复",
					"linear-protection-type_5": "1:1路径保护带恢复",
					"linear-protection-type_6": "1+1路径保护带恢复",
					"linear-protection-protocol": "保护协议",//保护类型 C层填。默认填APS
					"switch-mode": "倒换模式",//倒换模式  枚举  GUI填				[single-ended-switch,double-ended-switch]
					"switch-mode_1": "单端倒换",
					"switch-mode_2": "双端倒换",
					"revertive-mode": "恢复模式",//倒换恢复模式 枚举 GUI填					[no-revertive,revertive]
					"revertive-mode_1": "非恢复",
					"revertive-mode_2": "恢复",
					"wtr": "WTR时间",//WTR 时间 GUI填
					"hold-off-time": "倒换延迟",//hold-off-time GUI填
					"reroute-revertive-mode": "重路由恢复模式",//暂时不做 以后GUI提供
					"reroute-wtr": "重路由等待恢复", //暂时不做 以后GUI提供
					"role": "角色",
					"role_1": "主用",
					"role_2": "备用",
					"role_3": "恢复",
					"role_4": "主用恢复",
					"role_5": "备用恢复",
					direction: '方向',
					"type": '类型',
					"cc-allow": "CC连接确认",//GUI 填
					"cc-exp": "CC发送优先级",//GUI 填 枚举				[BE,AF1,AF2,AF3,AF4,EF,CS6,CS7]
					"cc-interval": "CC发送间隔(毫秒)",//GUI填 枚举			[3.3,10,100,1000]	单位 ms
					"lm-mode": "丢包检测模式",//GUI填
					"dm-mode": "时延检测模式", //GUI填
					'role-settings': '各角色LSP OAM配置',
					'role45Switch': '指定恢复主备'
				},
				bas: {
					"title": "BAS配置",
					"basenable": "BAS使能",
					"bascycle": "BAS周期",
					"basseqmode": "BAS SEQ模式",
					"basseq": "BAS SEQ",
					"dexcset": "dEXC设置门限",
					"dexcclear": "dEXC清除门限",
					"ddegset": "dDEG设置门限",
					"ddegclear": "dDEG清除门限",
					"rdi": "RDI使能",
					"rei": "REI使能",
					"csf": "CSF使能",
				},
				cv: {
					"title": "CV配置",
					"cvenable": "CV使能",
					"cvcicle": "CV周期",
					"sapicc": "SApiCC",
					"dapicc": "DApiCC",
					"sapiicc": "SApiICC",
					"dapiicc": "DApiICC",
					"sapiuapc": "SApiUAPC",
					"dapiuapc": "DApiUAPC"
				},
				cs: {
					"title": "CS配置",
					"csenable": "CS使能",
					"cscicle": "CS周期",
				},
				route: {
					title: '路由约束',
					neList: '网元列表',
					includeNeList: '经过的网元列表',
					excludeNeList: '排除的网元列表',
					linkList: '链接列表',
					includeLinkList: '经过的链接列表',
					excludeLinkList: '排除的链接列表',
					neListFilterPlaceholder: '网元名称过滤',
					linkListFilterPlaceholder: '链接名称过滤',
					neId: '网元Id',
					ingressVlan: '源网元Vlan',
					egressVlan: '宿网元Vlan',
					table: {
						selectNe: '选择网元',
						ingressVlan: '源网元Vlan',
						egressVlan: '宿网元Vlan'
					}
				},
				sncSwitch: {
					name: '名称',
					linearProtectionType: '保护类型',
					switchMode: '倒换模式',
					revertiveMode: '倒换恢复模式',
					wtr: '等待恢复时间',
					holdOffTime: '倒换延迟时间'
				},
				sncLsp: {
					name: '名称',
					userLabel: '友好名',
					direction: '方向',
					role: '角色',
					type: '类型',
					ingress: '源网元',
					egress: '宿网元',
					adminStatus: '管理状态',
					operateOtatus: '操作状态',
					oam: {
						name: '名称'
					},
					ccAllow: 'CC连接确认',
					ccExp: 'CC发送优先级',
					ccInterval: 'CC发送间隔',
					lmMode: '丢包检测模式',
					dmMode: '时延检测模式',
				},
				topology: {
					title: '路径展示'
				}
			},
			switchDialog: {
				title: 'LSP保护信息'
			},
			lspDialog: {
				title: 'LSP信息列表'
			},
			qosDialog: {
				title: 'QoS信息'
			},
		},
		eline: {
			title: '以太网专线业务',
			elineTable: {
				id: '索引',
				name: '名称',
				userLabel: '友好名',
				egress: 'Z节点',
				egress_port: 'Z节点端口',
				ingress: 'A节点',
				ingress_port: 'A节点端口',
				'a2z-cir': '正向CIR',
                'z2a-cir': '反向CIR',
                'a2z-pir': '正向PIR',
                'z2a-pir': '反向PIR',
				sncSwitch: 'PW保护类型',
				noSncSwitch: '无保护',
				"unprotected": "无保护",
				"path-protection-1-to-1": "1:1路径保护",
				"path-protection-1-plus-1": "1+1路径保护",
				"unprotected-with-recovery": "无保护带恢复",
				"with-recovery-1-to-1": "1:1路径保护带恢复",
				"with-recovery-1-plus-1": "1+1路径保护带恢复",
				adminStatus: '管理状态',
				'adminStatus_admin-up': 'Up',
				'adminStatus_admin-down': 'Down',
				'adminStatus_admin-partial': 'Partial',
				operateStatus: '操作状态',
				'operateStatus_operate-up': 'Up',
				'operateStatus_operate-down': 'Down',
				'operateStatus_operate-partial': 'Partial',
				syncStatus: '同步状态',
				'syncStatus_synced': '同步',
				'syncStatus_unsynced': '未同步',
				pws: 'PW信息',
				sncType: '业务类型',
                parentNcdId: 'NCD索引',
                'tunnels': '相关隧道',
                'pws': '相关伪线',
				'links': '相关物理链路',
				createTime: '创建时间',
				creator: '创建者',
				updateTime: '修改时间'
			},
			addElineDialog: {
				title: '添加以太网专线业务',
				general: {
					title: '基本配置',
					name: '名称',
					userLabel: '友好名',
					egress: '出接口',
					egress_action: '宿端入PW VLAN配置',
					ingress: '入接口',
					ingress_action: '源端入PW VLAN配置',
					sncSwitch: 'PW保护类型',
					encaplate_type: 'PW封装模式',
					'access-type': '接入类型',
					'access-action': '出VLAN操作',
					vlan_action: 'VLAN操作',
					vlan_value: 'VLAN值',
					'qinq-svlan-bitmap': 'QinQ SVLAN',
					'qinq-cvlan-bitmap': 'QinQ CVLAN',
					'dot1q-vlan-bitmap': 'Dot1q SVLAN',
					'is-root': "根节点"
				},
				qos: {
					title: 'QoS配置',
					'belonged-id': '所属对象名称',
					'tunnel-mode': '隧道模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR(kbps)',
					'z2a-cir': '反向CIR(kbps)',
					'a2z-pir': '正向PIR(kbps)',
					'z2a-pir': '反向PIR(kbps)',
					'a2z-cbs': '正向CBS(kbps)',
					'z2a-cbs': '反向CBS(kbps)',
					'a2z-pbs': '正向PBS(kbps)',
					'z2a-pbs': '反向PBS(kbps)',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
				pwoam: {
					title: 'PW保护和OAM配置',
					"name": "保护组名称",  //保护组的名字  GUI填业务名+“-PW保护组”
					"layer-rate": "PW保护",//C层做 PW保护
					"linear-protection-type": "保护类型",//
					"unprotected": "无保护",
					"path-protection-1-to-1": "1:1路径保护",
					"path-protection-1-plus-1": "1+1路径保护",
					"unprotected-with-recovery": "无保护带恢复",
					"with-recovery-1-to-1": "1:1路径保护带恢复",
					"with-recovery-1-plus-1": "1+1路径保护带恢复",
					"linear-protection-protocol": "保护协议",//保护类型 C层填。默认填APS
					"switch-mode": "倒换模式",//倒换模式  枚举  GUI填				[single-ended-switch,double-ended-switch]
					"switch-mode_1": "单端倒换",
					"switch-mode_2": "双端倒换",
					"revertive-mode": "倒换恢复模式",//倒换恢复模式 枚举 GUI填					[no-revertive,revertive]
					"revertive-mode_1": "非恢复",
					"revertive-mode_2": "恢复",
					"wtr": "WTR时间(毫秒)",//WTR 时间 GUI填
					"hold-off-time": "倒换延迟时间(毫秒)",//hold-off-time GUI填
					"reroute-revertive-mode": "重路由恢复模式",//暂时不做 以后GUI提供
					"reroute-wtr": "重路由等待恢复时间", //暂时不做 以后GUI提供
					"cc-allow": "CC连接确认",//GUI 填
					"cc-exp": "CC发送优先级",//GUI 填 枚举				[BE,AF1,AF2,AF3,AF4,EF,CS6,CS7]
					"cc-interval": "CC发送间隔(毫秒)",//GUI填 枚举			[3.3,10,100,1000]	单位 ms
					"lm-mode": "丢包检测模式",//GUI填
					"dm-mode": "时延检测模式", //GUI填
					'role-master': '主用PW OAM配置',
					'role-slave': '备用PW OAM配置',
					'role-master-route': '主用',
					'role-slave-route': '备用',
				},
				route: {
					title: '指定路由',
					type_1: '使用用户选择的隧道',
					type_2: '使用自动创建的隧道'
				}
			},
			batchElineDialog: {
				title: '批量添加以太网专线业务',
				general: {
					create_count: '创建数量',
					step:'步长'
				},
				elineListTable:{
					id: '编号',
					selectedTunnel:'使用的路由名',
					result:'结果',
					name:'业务名称'
				},
				route: {
					celist: 'E-line列表',
				}
			},
			copyElineDialog: {
				title: '拷贝以太网专线业务',
				general: {
					title: '基本配置',
					name: '名称',
					userLabel: '友好名',
					egress: '出接口',
					egress_action: '宿端入PW VLAN配置',
					ingress: '入接口',
					ingress_action: '源端入PW VLAN配置',
					sncSwitch: 'PW保护类型',
					encaplate_type: 'PW封装模式',
					'access-type': '接入类型',
					'access-action': '出VLAN操作',
					vlan_action: 'VLAN操作',
					vlan_value: 'VLAN值',
					'qinq-svlan-bitmap': 'QinQ SVLAN',
					'qinq-cvlan-bitmap': 'QinQ CVLAN',
					'dot1q-vlan-bitmap': 'Dot1q SVLAN',
					'is-root': "根节点"
				},
				qos: {
					title: 'QoS配置',
					'belonged-id': '所属对象名称',
					'tunnel-mode': '隧道模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR(kbps)',
					'z2a-cir': '反向CIR(kbps)',
					'a2z-pir': '正向PIR(kbps)',
					'z2a-pir': '反向PIR(kbps)',
					'a2z-cbs': '正向CBS(kbps)',
					'z2a-cbs': '反向CBS(kbps)',
					'a2z-pbs': '正向PBS(kbps)',
					'z2a-pbs': '反向PBS(kbps)',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
				pwoam: {
					title: 'PW保护和OAM配置',
					"name": "保护组名称",  //保护组的名字  GUI填业务名+“-PW保护组”
					"layer-rate": "PW保护",//C层做 PW保护
					"linear-protection-type": "保护类型",//
					"unprotected": "无保护",
					"path-protection-1-to-1": "1:1路径保护",
					"path-protection-1-plus-1": "1+1路径保护",
					"unprotected-with-recovery": "无保护带恢复",
					"with-recovery-1-to-1": "1:1路径保护带恢复",
					"with-recovery-1-plus-1": "1+1路径保护带恢复",
					"linear-protection-protocol": "保护协议",//保护类型 C层填。默认填APS
					"switch-mode": "倒换模式",//倒换模式  枚举  GUI填				[single-ended-switch,double-ended-switch]
					"switch-mode_1": "单端倒换",
					"switch-mode_2": "双端倒换",
					"revertive-mode": "倒换恢复模式",//倒换恢复模式 枚举 GUI填					[no-revertive,revertive]
					"revertive-mode_1": "非恢复",
					"revertive-mode_2": "恢复",
					"wtr": "WTR时间(毫秒)",//WTR 时间 GUI填
					"hold-off-time": "倒换延迟时间(毫秒)",//hold-off-time GUI填
					"reroute-revertive-mode": "重路由恢复模式",//暂时不做 以后GUI提供
					"reroute-wtr": "重路由等待恢复时间", //暂时不做 以后GUI提供
					"cc-allow": "CC连接确认",//GUI 填
					"cc-exp": "CC发送优先级",//GUI 填 枚举				[BE,AF1,AF2,AF3,AF4,EF,CS6,CS7]
					"cc-interval": "CC发送间隔(毫秒)",//GUI填 枚举			[3.3,10,100,1000]	单位 ms
					"lm-mode": "丢包检测模式",//GUI填
					"dm-mode": "时延检测模式", //GUI填
					'role-master': '主用PW OAM配置',
					'role-slave': '备用PW OAM配置',
					'role-master-route': '主用',
					'role-slave-route': '备用',
				},
				route: {
					title: '指定路由',
					type_1: '使用用户选择的隧道',
					type_2: '使用自动创建的隧道'
				}
			},
			egressDialog: {
				title: '出接口标签',
				id: '索引',
				'ne-id': '网元标识',
				'ne-name': '网元名称',
				'ltp-id': 'Ltp标识',
				'access-type': '接入类型',
				'access-type-Port': '端口模式',
				'svlan': 'SVLAN',
				'cvlan': 'CVLAN',
				'access-action': '接口操作',
				'action-vlan-id': '操作Vlan号',
				'qinq-svlan-bitmap': 'QinQ SVLAN',
				'qinq-cvlan-bitmap': 'QinQ CVLAN',
				'dot1q-vlan-bitmap': 'Dot1q SVLAN',
				'role': '角色',
				'role-master': '主',
				'role-slave': '备',
				oam: {
					'oam-title': 'OAM信息',
					'belonged-id': '所属对象名称',
					'name': '维护实体组名称',
					'meg-id': '维护实体组索引',
					'cc-allow': 'CC连接确认',
					'cc-exp': 'CC发送优先级',
					'cc-interval': 'CC发送间隔',
					'lm-mode': '丢包检测模式',
					'lm-mode-disable': '禁止',
					'lm-mode-preactive': '预激活',
					'lm-mode-on-demand': '按需',
					'dm-mode': '时延检测模式',
					'dm-mode-disable': '禁止',
					'dm-mode-preactive': '预激活',
					'dm-mode-on-demand': '按需',
					'meps': {
						'meps-title': '维护实体对象',
						'name': '名称',
						'id': '索引'
					}
				},
				qos: {
					'qos-title': 'QoS信息',
					'belonged-id': '所属对象名称',
					'tunnel-mode': '模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR',
					'z2a-cir': '反向CIR',
					'a2z-pir': '正向PIR',
					'z2a-pir': '反向PIR',
					'a2z-cbs': '正向CBS',
					'z2a-cbs': '反向CBS',
					'a2z-pbs': '正向PBS',
					'z2a-pbs': '反向PBS',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
			},
			ingressDialog: {
				title: '入接口标签'
			},
			switchDialog: {
				title: 'PW保护'
			},
			pwDialog: {
				title: 'PW信息'
			},
			slide: {
				title: '隧道业务详细信息',
				topology: {
					tabTitle: '拓扑'
				},
				ac: {
					tabTitle: 'Ac列表'
				},
				nd: {
					tabTitle: 'ND列表'
				},
				arp: {
					tabTitle: 'ARP列表'
				},
				'static-router': {
					tabTitle: '静态路由列表'
				},
				'aggregation-router': {
					tabTitle: '聚合路由列表'
				},
				frr: {
					tabTitle: 'FRR列表'
				},
				Master: {
					tabTitle: '主用路由'
				},
				Slave: {
					tabTitle: '备用路由'
				},
				Restore: {
					tabTitle: '恢复路由'
				},
				switch: {
					'tabTitle': '倒换和保护信息',
                    'snc-id': '所属ID',
                    name: '名称',
                    'layer-rate': '保护组速率',
                    'linear-protection-type': '保护类型',
                    "linear-protection-type_unprotected": "无保护",
					"linear-protection-type_path-protection-1-to-1": "1:1路径保护",
					"linear-protection-type_path-protection-1-plus-1": "1+1路径保护",
					"linear-protection-type_unprotected-with-recovery": "无保护带恢复",
					"linear-protection-type_with-recovery-1-to-1": "1:1路径保护带恢复",
					"linear-protection-type_with-recovery-1-plus-1": "1+1路径保护带恢复",
                    'linear-protection-protocol': 'APS协议',
                    'switch-mode': '倒换模式',
                    "switch-mode_SingleEndedSwitch": "单端倒换",
					"switch-mode_DoubleEndedSwitch": "双端倒换",
					"revertive-mode": "恢复模式",//倒换恢复模式 枚举 GUI填					[no-revertive,revertive]
					"revertive-mode_Revertive": "恢复",
					"revertive-mode_no-revertive": "非恢复",
                    wtr: '回切等待时间',
                    'hold-off-time': '倒换延迟时间',
                    'reroute-revertive-mode': '回切模式',
                    'reroute-revertive-mode_Revertive': '恢复',
                    'reroute-revertive-mode_no-revertive': '非恢复',
                    'reroute-wtr': '重路由回切等待'

                },
				qos: {
					'tabTitle': 'QoS信息',
                    'belonged-id': '所属对象名称',
                    'tunnel-mode': '隧道模式',
                    'tunnel-mode_Pipeline': '管道',
                    'tunnel-mode_short-Pipeline': '短管道',
                    'tunnel-mode_unified-pattern': '统一模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR(kbps)',
					'z2a-cir': '反向CIR(kbps)',
					'a2z-pir': '正向PIR(kbps)',
					'z2a-pir': '反向PIR(kbps)',
					'a2z-cbs': '正向CBS(kbps)',
					'z2a-cbs': '反向CBS(kbps)',
					'a2z-pbs': '正向PBS(kbps)',
					'z2a-pbs': '反向PBS(kbps)',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
				az: {
					tabTitle: '接入点信息',
					azType: '出入网元',
					neId: '标识',
					neName: '网元名',
					ltpMode: '端口模式',
					ltpId: '端口名',
					spVlan: 'SpVlan',
					ceVlan: 'CeVlan',
					acaction: '接口操作',
					actype: '接入类型'
				},
				oam: {
					tabTitle: 'OAM',
					name: '名称',
					'meg-id': 'Meg标识',
             		'cc-allow': 'CC确认允许', 
					'cc-exp': 'CC报文发送 优先级',
					'cc-interval': 'CC报文发送间隔',
					'lm-mode': '丢包检测模式',
					'lm-mode-disable': '禁止',
					'lm-mode-preactive': '预激活',
					'lm-mode-on-demand': '按需',
					'dm-mode': '时延检测模式',
					'dm-mode-disable': '禁止',
					'dm-mode-preactive': '预激活',
					'dm-mode-on-demand': '按需',
				},
            },
		},
		elan: {
			title: "ELAN业务",
			addElanDialog: {
				title: "添加ELAN业务",
				general: {
					aclist: '用户端口列表',
					acConfig: '用户端口配置'
				}
			}
		},
		etree: {
			title: 'ETree业务',
			addEtreeDialog: {
				title: "添加ETree业务",
				general: {
					aclist: '用户端口列表',
					acConfig: '用户端口配置'
				}
			}
		},
		l3vpn: {
			title: 'L3VPN业务',
			elineTable: {
				id: '索引',
				name: '名称',
				userLabel: '友好名',
				egress: 'Z节点',
				egress_port: 'Z节点端口',
				ingress: 'A节点',
				ingress_port: 'A节点端口',
				'a2z-cir': '正向CIR',
                'z2a-cir': '反向CIR',
                'a2z-pir': '正向PIR',
                'z2a-pir': '反向PIR',
				sncSwitch: 'PW保护类型',
				noSncSwitch: '无保护',
				"unprotected": "无保护",
				"path-protection-1-to-1": "1:1路径保护",
				"path-protection-1-plus-1": "1+1路径保护",
				"unprotected-with-recovery": "无保护带恢复",
				"with-recovery-1-to-1": "1:1路径保护带恢复",
				"with-recovery-1-plus-1": "1+1路径保护带恢复",
				adminStatus: '管理状态',
				'adminStatus_admin-up': 'Up',
				'adminStatus_admin-down': 'Down',
				'adminStatus_admin-partial': 'Partial',
				operateStatus: '操作状态',
				'operateStatus_operate-up': 'Up',
				'operateStatus_operate-down': 'Down',
				'operateStatus_operate-partial': 'Partial',
				pws: 'PW信息',
				sncType: '业务类型',
                parentNcdId: 'NCD索引',
                'tunnels': '相关隧道',
                'pws': '相关伪线',
				'links': '相关物理链路',
				createTime: '创建时间',
				creator: '创建者',
				updateTime: '修改时间'
			},
			addL3VPNDialog: {
				title: '添加L3VPN业务',
				general: {
					title: '基本配置',
					acConfig: '用户端三层口配置',
					aclist: '用户端三层口列表',
					name: '名称',
					userLabel: '友好名',
					node: '网元',
					port: '端口',
					acmode: '封装模式',
					svlan: 'S-Vlan',
					cvlan: 'C-Vlan',
				},
				aclist: {
					nodeName: '节点名称',
					portName: '端口名称',
					acMode: '封装模式',
					svlan: 'S-Vlan',
					cvlan: 'C-Vlan',
					'is-root': '根节点',
					action: '操作',
				},
				ipconfig: {
					title: '端口IP设置',
					ipType: 'IP类型',
					ipaddress: 'IP地址',
					maskLength: '掩码长度',
					acSelect: '选择AC'
				},
				staticRouter: {
					title: 'PE-CE静态路由配置',
					routerSelect: 'PE-CE路由协议选择',
					routerList: 'PE-CE静态路由表设置',
					iplength: 'ip/length',
					nextIp: '下一跳IP',
					iptype: 'IP类型',
					nextId: '下一跳ID',
					'out-inf': '出接口',
					'route-type': '路由类型',
					'route-status': '路由状态',
					distance: 'Distance'
				},
				frr: {
					frr_enable: 'FRR使能',
					frr_type: 'FRR类型',
					iplength: 'ip/length',
					master_next_hop_id: '主用对端节点',
					backup_next_hop_id: '备用对端节点',
					master_next_hop_ip: '主用下一跳ip',
					backup_next_hop_ip: '备用下一跳ip',
					revert_mode: '倒换模式',
					hold_off_time: '倒换延迟(ms)',
					wtr_time: 'WTR时间(min)'
				},
				arp: {
					title: 'ARP配置',
					ipaddress: "IP",
					mac: "MAC",
					arplist: "ARP列表"
				},
				nd: {
					title: 'ND配置',
					ipaddress: "IP",
					mac: "MAC",
					ndlist: "ND列表"
				},
				topology:{
					title: '连接模型设置',
					linkmode: '连接模型设置',
					fullmesh: '全连接模型',
					'hub-and-spoke': 'Hub-and-Spoke',
					'hovpn': 'HoVPN',
				},
				tunnel: {
					title: '可选隧道',
					name: '名称',
					type: '类型',
					nodeA: '源节点',
					nodeZ: '宿节点',
					status: '状态'
				},
				qos: {
					title: 'QoS配置',
					'belonged-id': '所属对象名称',
					'tunnel-mode': '隧道模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR(kbps)',
					'z2a-cir': '反向CIR(kbps)',
					'a2z-pir': '正向PIR(kbps)',
					'z2a-pir': '反向PIR(kbps)',
					'a2z-cbs': '正向CBS(kbps)',
					'z2a-cbs': '反向CBS(kbps)',
					'a2z-pbs': '正向PBS(kbps)',
					'z2a-pbs': '反向PBS(kbps)',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
				pwoam: {
					title: 'PW保护和OAM配置',
					"name": "保护组名称",  //保护组的名字  GUI填业务名+“-PW保护组”
					"layer-rate": "PW保护",//C层做 PW保护
					"linear-protection-type": "保护类型",//
					"unprotected": "无保护",
					"path-protection-1-to-1": "1:1路径保护",
					"path-protection-1-plus-1": "1+1路径保护",
					"unprotected-with-recovery": "无保护带恢复",
					"with-recovery-1-to-1": "1:1路径保护带恢复",
					"with-recovery-1-plus-1": "1+1路径保护带恢复",
					"linear-protection-protocol": "保护协议",//保护类型 C层填。默认填APS
					"switch-mode": "倒换模式",//倒换模式  枚举  GUI填				[single-ended-switch,double-ended-switch]
					"switch-mode_1": "单端倒换",
					"switch-mode_2": "双端倒换",
					"revertive-mode": "倒换恢复模式",//倒换恢复模式 枚举 GUI填					[no-revertive,revertive]
					"revertive-mode_1": "非恢复",
					"revertive-mode_2": "恢复",
					"wtr": "WTR时间(毫秒)",//WTR 时间 GUI填
					"hold-off-time": "倒换延迟时间(毫秒)",//hold-off-time GUI填
					"reroute-revertive-mode": "重路由恢复模式",//暂时不做 以后GUI提供
					"reroute-wtr": "重路由等待恢复时间", //暂时不做 以后GUI提供
					"cc-allow": "CC连接确认",//GUI 填
					"cc-exp": "CC发送优先级",//GUI 填 枚举				[BE,AF1,AF2,AF3,AF4,EF,CS6,CS7]
					"cc-interval": "CC发送间隔(毫秒)",//GUI填 枚举			[3.3,10,100,1000]	单位 ms
					"lm-mode": "丢包检测模式",//GUI填
					"dm-mode": "时延检测模式", //GUI填
					'role-master': '主用PW OAM配置',
					'role-slave': '备用PW OAM配置',
					'role-master-route': '主用',
					'role-slave-route': '备用',
				},
				route: {
					title: '指定路由',
					type_1: '使用用户选择的隧道',
					type_2: '使用自动创建的隧道'
				}
			},
			egressDialog: {
				title: '出接口标签',
				id: '索引',
				'ne-id': '网元标识',
				'ne-name': '网元名称',
				'ltp-id': 'Ltp标识',
				'access-type': '接入类型',
				'access-type-Port': '端口模式',
				'svlan': 'SVLAN',
				'cvlan': 'CVLAN',
				'access-action': '接口操作',
				'action-vlan-id': '操作Vlan号',
				'qinq-svlan-bitmap': 'QinQ SVLAN',
				'qinq-cvlan-bitmap': 'QinQ CVLAN',
				'dot1q-vlan-bitmap': 'Dot1q SVLAN',
				'role': '角色',
				'role-master': '主',
				'role-slave': '备',
				oam: {
					'oam-title': 'OAM信息',
					'belonged-id': '所属对象名称',
					'name': '维护实体组名称',
					'meg-id': '维护实体组索引',
					'cc-allow': 'CC连接确认',
					'cc-exp': 'CC发送优先级',
					'cc-interval': 'CC发送间隔',
					'lm-mode': '丢包检测模式',
					'lm-mode-disable': '禁止',
					'lm-mode-preactive': '预激活',
					'lm-mode-on-demand': '按需',
					'dm-mode': '时延检测模式',
					'dm-mode-disable': '禁止',
					'dm-mode-preactive': '预激活',
					'dm-mode-on-demand': '按需',
					'meps': {
						'meps-title': '维护实体对象',
						'name': '名称',
						'id': '索引'
					}
				},
				qos: {
					'qos-title': 'QoS信息',
					'belonged-id': '所属对象名称',
					'tunnel-mode': '模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR',
					'z2a-cir': '反向CIR',
					'a2z-pir': '正向PIR',
					'z2a-pir': '反向PIR',
					'a2z-cbs': '正向CBS',
					'z2a-cbs': '反向CBS',
					'a2z-pbs': '正向PBS',
					'z2a-pbs': '反向PBS',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
			},
			ingressDialog: {
				title: '入接口标签'
			},
			switchDialog: {
				title: 'PW保护'
			},
			pwDialog: {
				title: 'PW信息'
			},
			slide: {
				title: '隧道业务详细信息',
				topology: {
					tabTitle: '拓扑'
				},
				Master: {
					tabTitle: '主用路由'
				},
				Slave: {
					tabTitle: '备用路由'
				},
				Restore: {
					tabTitle: '恢复路由'
				},
				switch: {
					'tabTitle': '倒换和保护信息',
                    'snc-id': '所属ID',
                    name: '名称',
                    'layer-rate': '保护组速率',
                    'linear-protection-type': '保护类型',
                    "linear-protection-type_unprotected": "无保护",
					"linear-protection-type_path-protection-1-to-1": "1:1路径保护",
					"linear-protection-type_path-protection-1-plus-1": "1+1路径保护",
					"linear-protection-type_unprotected-with-recovery": "无保护带恢复",
					"linear-protection-type_with-recovery-1-to-1": "1:1路径保护带恢复",
					"linear-protection-type_with-recovery-1-plus-1": "1+1路径保护带恢复",
                    'linear-protection-protocol': 'APS协议',
                    'switch-mode': '倒换模式',
                    "switch-mode_SingleEndedSwitch": "单端倒换",
					"switch-mode_DoubleEndedSwitch": "双端倒换",
					"revertive-mode": "恢复模式",//倒换恢复模式 枚举 GUI填					[no-revertive,revertive]
					"revertive-mode_Revertive": "恢复",
					"revertive-mode_no-revertive": "非恢复",
                    wtr: '回切等待时间',
                    'hold-off-time': '倒换延迟时间',
                    'reroute-revertive-mode': '回切模式',
                    'reroute-revertive-mode_Revertive': '恢复',
                    'reroute-revertive-mode_no-revertive': '非恢复',
                    'reroute-wtr': '重路由回切等待'

                },
				qos: {
					'tabTitle': 'QoS信息',
                    'belonged-id': '所属对象名称',
                    'tunnel-mode': '隧道模式',
                    'tunnel-mode_Pipeline': '管道',
                    'tunnel-mode_short-Pipeline': '短管道',
                    'tunnel-mode_unified-pattern': '统一模式',
					'a2z-policing': '正向流量控制',
					'z2a-policing': '反向流量控制',
					'traffic-class': '优先级',
					'cac-mode': '连接允许控制',
					'convg-mode': '收敛模式',
					'traffic-adj-mode': '带宽调整模式',
					'a2z-cir': '正向CIR(kbps)',
					'z2a-cir': '反向CIR(kbps)',
					'a2z-pir': '正向PIR(kbps)',
					'z2a-pir': '反向PIR(kbps)',
					'a2z-cbs': '正向CBS(kbps)',
					'z2a-cbs': '反向CBS(kbps)',
					'a2z-pbs': '正向PBS(kbps)',
					'z2a-pbs': '反向PBS(kbps)',
					'a2z-color-mode': '正向色敏感模式',
					'z2a-color-mode': '反向色敏感模式'
				},
				az: {
					tabTitle: '接入点信息',
					azType: '出入网元',
					neId: '标识',
					neName: '网元名',
					ltpMode: '端口模式',
					ltpId: '端口名',
					spVlan: 'SpVlan',
					ceVlan: 'CeVlan',
					acaction: '接口操作',
					actype: '接入类型'
				},
				oam: {
					tabTitle: 'OAM',
					name: '名称',
					'meg-id': 'Meg标识',
             		'cc-allow': 'CC确认允许', 
					'cc-exp': 'CC报文发送 优先级',
					'cc-interval': 'CC报文发送间隔',
					'lm-mode': '丢包检测模式',
					'lm-mode-disable': '禁止',
					'lm-mode-preactive': '预激活',
					'lm-mode-on-demand': '按需',
					'dm-mode': '时延检测模式',
					'dm-mode-disable': '禁止',
					'dm-mode-preactive': '预激活',
					'dm-mode-on-demand': '按需',
				},
            },
		},
		flexeClient: {
			title: 'FlexE Client列表',
			label: '名称',
			addFlexeClient: '添加FlexE Client',
			carried_group: '承载Group',
			client_id: 'Client ID',
			nodeA_client_index: '源client Index',
			nodeZ_client_index: '宿client Index',
			nodeA_id: '源节点',
			nodeZ_id: '宿节点',
			used_slots_a: '源端时隙',
			used_slots_z: '宿端时隙',
			bandwidth: '带宽',
			operatorstatus: '操作状态',
			syncstatus: "同步状态",
			adminstatus: '管理状态',
			nodeA_ip: '源ip/length',
			nodeZ_ip: '宿ip/length',
			nodeA_ip_list: '源ip/length表',
			nodeZ_ip_list: '宿ip/length表',
			action: '操作'
		},
		flexeGroup: {
			title: 'FlexE Group列表',
			label: '名称',
			group_id: 'Group ID',
			group_index: 'Group Index',
			calender_type: 'Calendar模式',
			actived_calendar: '激活A/B',
			expiry_time: "倒换超时",
			bandwidth: '带宽',
			nodeA_id: '源节点',
			nodeA_member: '源节点关联端口',
			nodeZ_id: '宿节点',
			nodeZ_member: '宿节点关联端口',
			operatorstatus: '操作状态',
			syncstatus: "同步状态",
			adminstatus: '管理状态',
			addFlexeGroup: '添加FlexE Group',
			member: '关联端口',
			source: '起点',
			dest: '终点',
			used_slots_a: '源端时隙使用情况',
			used_slots_z: '宿端时隙使用情况',
		},
		pw: {
			title: '伪线管理',
			name: 'PW名称',
			"ingress-ne-id": '源节点',
			"egress-ne-id": '宿节点',
			"tunnel-name": '承载Tunnel名',
			"service-type": "上层业务类型",
			"service-type_1": "eline",
			"service-type_2": "elan",
			"service-type_3": "L3vpn",
			"service-type_4": "etree",
			"service-name": '上层业务名',
			"admin-status": '管理状态',
			'admin-status_admin-up': 'Up',
			'admin-status_admin-down': 'Down',
			'admin-status_admin-partial': 'Partial',
			"operate-status": '操作状态',
			'operate-status_operate-up': 'Up',
			'operate-status_operate-down': 'Down',
			'operate-status_admin-partial': 'Partial',
			"sync-status": '同步状态',
			'sync-status_synced': '同步',
			'sync-status_unsynced': '未同步',
		},
	},
	alarm: {
		ackBtn: '确认',
		unackBtn: '取消确认',
		ackSuccess: '告警确认设置成功',
		editSuccess: '告警编辑成功',
		filterForm: {
			show: '显示过滤',
			hide: '隐藏过滤',
			source: '告警源',
			entity: '告警对象',
			createTime: '发生时间',
			category: '类别',
			severity: '严重程度',
			pc: '问题原因'
		},
		severity: {
			Critical: '严重告警',
			Major: '主要告警',
			Minor: '次要告警',
			Warning: '警告告警',
			Indeterminate: '未知告警'
		},
		category: {
			Equipment: '设备告警',
			communication: "通信告警",
			Transmission: "传输告警",
			Environment: "环境告警",
			QoS: "服务质量告警",
			processError: "处理失败告警"
		},
		current: {
			title: '当前告警',
			tableColumns: {
				sequence: '告警顺序',
				alarmId: '告警码',
				pc: '告警原因',
				severity: '严重程度',
				category: '类别',
				entity: '告警对象',
				createTime: '发生时间',
				clearTime: '清除时间',
				action: '编辑'
			},
			editAlarmForm: {
				title: '编辑告警',
				memo: '备注'
			}
		},
		history: {
			title: '历史告警'
		}
	},
	system: {
		user: {
			userManagement: {
				title: '用户管理',
				addUser: '添加用户',
				username: '用户名',
				password: '密码',
				fullname: '全名',
				description: '描述',
				email: 'Email',
				roleList: '配置角色',
				status: '状态',
			},
			roleManagement: {
				title: '角色管理',
				name: '角色名',
				level: '等级',
				desc: '描述',
				domain: '管理域',
				privileges: '权限',
				addDialog: {
					title: '添加角色'
				},
				updateDialog: {
					title: '更新角色'
				}
			},
			domainManagement: {
				title: '域管理',
				name: '域名',
				desc: '描述',
				ne_list: '设备列表',
				addDialog: {
					title: '添加域'
				},
				updateDialog: {
					title: '更新域'
				}
			}
		},
		logManage: {
			title: '日志管理',
			filter_enable: '查询',
			category: '日志类别',
			oper_type: '操作类型',
			level: '日志级别',
			user_name: '用户名',
			user_ip: '用户IP',
			result: '操作结果',
			start_time: '起始时间',
			end_time: '结束时间',
			create_time: '时间',
			oper_object: '操作对象',
			desc: '描述'
		}
	},
	sid: {
		srgbManagement: {
			title: "SRGB列表",
			nodeId: "节点",
			srgbId: "编号",
			upperBound: "上限",
			lowerBound: "下限",
			status: "状态",
			syncStatus: "同步状态"
		},
		srlbManagement: {
			title: "SRLB列表",
			nodeId: "节点",
			srlbId: "编号",
			upperBound: "上限",
			lowerBound: "下限",
			status: "状态",
			syncStatus: "同步状态"
		},
		prefixManagement: {
			addPrefix: '添加Prefix',
			title: 'Prefix列表',
			label: '名称',
			prefix: 'Prefix/长度',
			sid_type: 'SID类型',
			sid_value: 'SID值',
			is_node_SID: 'Node SID',
			status: '状态',
			ip_version: 'IP类型',
			range: '范围',
			node_id: '网元'
		},
		adjsidManagement: {
			addAdjsid: '添加Adj-sid',
			title: 'Adjsid列表',
			label: '名称',
			local_node: '本地网元',
			local_prefix: '本地Prefix',
			local_port: '本地接口',
			remote_node: '远端网元',
			remote_prefix: '远端Prefix',
			remote_port: '远端接口',
			adjsid: 'Adj-SID',
			is_local: '是否本地',
			local_node_id: '本地网元',
			local_prefix: '本地Prefix',
			remote_node_id: '远端网元',
			remote_prefix: '远端Prefix',
			work_mode: '工作模式',
			ip_version: 'IP类型',
			sid_type: 'SID类型',
			ajdsid: 'Adj-SID'
		}
	},
	loginForm: {
		title: '域控制器登录',
		userName: '用户名',
		password: '密码',
		loginButton: '登 录',
		userNameValidate: '用户名必须填写',
		passwordValidate: '密码必须填写',
	},
	fund:{
		node: {
			title:"网元列表",
			neId:"网元ID",
			userLabel: '网元名称',
			type: '网元类型',
			connectionType: '网元与网管的连接方式',
			connectionType_0:"网关",
			connectionType_1:"非网关",
			adminIp: '网元管理IP',
			softwareVersion: '软件版本',
			hardwareVersion: "硬件版本",
			belongGateway: "所属网关网元",
			domain: "区域信息",
			location: "网元位置",
			longtitudeLatitude: '网元经纬度',
			equipmentType: '设备分类',
			equipmentType_0: 'SPN',
			networkLevel: '网元所属的网络层级',
			networkLevel_0: '接入层',
			networkLevel_1: '汇聚层',
			networkLevel_2: '骨干层',
			user: '使用客户',
			createTime: '网元开通时间',
			reserved: '预留字段'
		},
		port: {
			title:"网元列表",
			name: '网元名称',
			portId: '端口号',
			cardType:'板卡类型',
			portUseState: '使用状态',
			portType: '端口类型',
			portType_0: '光接口',
			portType_1: '电接口',
			portrate: '速率（G）',
			workmode: '工作模式',
			workmode_0: '全双工',
			workmode_1: '自协商',
			mac: "MAC地址",
			flow: "端口限速",
			port: "端口属性",
			port_0: "NMI端口",
			port_1: "UNI端口",
			FlexE: 'FlexE模式',
			sd: 'SD使能',
			remark: '备注'
		},
		filterForm: {
			show: '显示筛选',
			hide: '隐藏筛选',
			name: '网元名称',
			nodeId: '网元ID',
			manageIp: '管理IP的网段',
			nodeType: '网元类型',
			createTime: '网元开通时间'
		},
	},
	defend:{
		upgrade: {
			title:"批量版本升级",
			log:"升级日志列",
			happenTime:"发生时间",
			message:"消息类型",
			target:"对象",
			content:"消息内容"
		},
		
	},
	slice:{
		vNode: {
			title:"vNode管理",
			name:"vNode名称",
			node:"物理节点",
			vNet:"所属vNet",
			status:"管理连接状态",
			"status_0":"正常",
			"status_1":"不正常",
			"status_2":"部分正常",
			createTime:"创建时间",
			creator:"使用客户",
			addDialog: {
				title: '添加vNode',
				name:"虚节点名称",
				user:"使用客户",
				remark:"备注",
				topology:"物理拓扑树",
				resource:"节点资源池"
			},
			editDialog:{
				title: '修改vNode',
				name:"虚节点名称",
				user:"使用客户"
			}
		},
		port:{
			title:"端口资源",
			port:"端口",
			tape:"带宽"
		},
		vNet:{
			title:"vNet管理",
			name:"vNet名称",
			user:"使用客户",
			status:"使用状态",
			status_null:"IDLE",
			status_0:"IDLE",
			status_1:"BUSY",
			status_2:"DEPLOYED",
			tape:"带宽要求",
			time:"时延要求",
			createTime:"创建时间",
			creator:"创建人",
			addDialog: {
				title: '添加vNet',
				name:"网络切片名称",
				user:"使用客户",
				tape:"带宽(M)",
				time:"时延",
				description:"备注",
				creator:"创建人"
			},	
			editDialog: {
				title: '修改vNet',
				name:"网络切片名称",
				user:"使用客户",
				tape:"带宽(M)",
				time:"时延",
				description:"备注",
			},	
			vlink:{
				"link":"链路名称",
				"rport":"源端口",
				"sport":"宿端口",
				"time":"时延",
				"tape":"带宽(M)"
			},
			sliceLink:{
				"title":"以太网切片链路",
				"link":"链路名称",
				"aNode":"A节点",
				"port1":"端口",
				"zNode":"Z节点",
				"port2":"端口",
				"tape":"带宽(M)",
				"time":"时延"
			}
		}
		
	}
};