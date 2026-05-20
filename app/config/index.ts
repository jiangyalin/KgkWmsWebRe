import isInner from '@shared/utils/isInner';
import privateCookies from '@shared/utils/privateCookies';

export enum EnvType {
  /** 外部配置 */
  EXTERNAL = 'external',
  /** 正式 */
  PROD = 'prod',
  /** 售前 */
  PRE = 'pre',
  /** 测试 */
  TEST = 'test',
  /** 测试-125 模拟客户环境 */
  TEST_EXTERNAL = 'test_external',
  /** 开发 */
  DEV = 'dev',
}

interface Config {
  /** 环境 */
  env: EnvType,
  /** 接口地址 */
  serverApi: string,
  /** 接口地址(内) */
  _serverApi: string,
  /** 审批流接口地址 */
  serverWorkFlow: string,
  /** 审批流接口地址(内) */
  _serverWorkFlow: string,
  /** 审批流访问地址 */
  workFlowWeb: string,
  /** 审批流访问地址(内) */
  _workFlowWeb: string,
  /** 默认皮肤配置（只有当用户为设置皮肤时生效） */
  defaultSkinConfig: {
    /** 是否为深色主题 */
    darkTheme: boolean,
    /** 是否跟随系统 */
    followSystem: boolean,
    /** 大小 */
    size: string,
    /** 滚动条宽度 */
    scrollBarWidth: number,
    /** 主题色 */
    primaryColor: string,
    /** 成功色 */
    successColor: string,
    /** 警告色 */
    warningColor: string,
    /** 危险色 */
    dangerColor: string,
    /** 信息色 */
    infoColor: string,
  }
}

const config: Config = {
  env: EnvType.DEV,
  serverApi: 'https://shcrm.kgk.com.cn:7004',
  _serverApi: 'https://shcrm.kgk.com.cn:7004',
  /** 审批流接口地址 */
  serverWorkFlow: 'http://183.195.216.114:13303',
  /** 审批流接口地址(内) */
  _serverWorkFlow: 'http://192.168.3.133:13303',
  /** 审批流访问地址 */
  workFlowWeb: 'http://183.195.216.114:13304',
  /** 审批流访问地址(内) */
  _workFlowWeb: 'http://183.195.216.114:13304',

  defaultSkinConfig: {
    darkTheme: false,
    followSystem: false,
    size: 'small',
    scrollBarWidth: 5,
    primaryColor: '#646CFF',
    successColor: '#67c23a',
    warningColor: '#e6a23c',
    dangerColor: '#f56c6c',
    infoColor: '#909399',
  },
};

switch (import.meta.env.VITE_APP_LOGOTYPE) {
  case 'external':
    config.env = EnvType.EXTERNAL;
    config.serverApi = (window as any)?.config?.serverApi;
    config._serverApi = (window as any)?.config?._serverApi;
    config.serverWorkFlow = (window as any)?.config?.serverWorkFlow;
    config._serverWorkFlow = (window as any)?.config?._serverWorkFlow;
    config.workFlowWeb = (window as any)?.config?.workFlowWeb;
    config._workFlowWeb = (window as any)?.config?._workFlowWeb;
    break;
  case 'prod':
    config.env = EnvType.PROD;
    config.serverApi = 'http://172.19.0.33:7004';
    config._serverApi = 'http://172.19.0.33:7004';
    break;
  case 'test':
    config.env = EnvType.TEST;
    config.serverApi = 'http://183.195.216.114:13311';
    config._serverApi = 'http://183.195.216.114:13311';
    config.workFlowWeb = 'http://183.195.216.114:13304';
    config._workFlowWeb = 'http://183.195.216.114:13304';
    break;
  case 'test_external':
    config.env = EnvType.TEST_EXTERNAL;
    config.serverApi = 'https://shcrm.kgk.com.cn:7004';
    config._serverApi = 'https://shcrm.kgk.com.cn:7004';
    config.workFlowWeb = 'https://shcrm.kgk.com.cn:7005/KGKWMSFlowWeb';
    config._workFlowWeb = 'https://172.19.0.33:7005/KGKWMSFlowWeb';
    break;
  case 'dev':
    config.env = EnvType.DEV;
    config.serverApi = 'http://183.195.216.114:13311';
    config._serverApi = 'http://183.195.216.114:13311';
    config.workFlowWeb = 'http://183.195.216.114:13304';
    config._workFlowWeb = 'http://183.195.216.114:13304';
    break;
  default:
    config.env = EnvType.DEV;
    config.serverApi = 'http://183.195.216.114:13311';
    config._serverApi = 'http://192.168.3.133:13311';
}

const getConfig = () => {
  if (isInner(window.location.hostname)) {
    config.serverApi = config._serverApi;
    config.serverWorkFlow = config._serverWorkFlow;
    config.workFlowWeb = config._workFlowWeb;
  }
  return config;
};

privateCookies.set('apsurl', config.serverApi);
export default getConfig();
