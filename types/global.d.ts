declare module 'js-cookie'
declare module 'js-base64'
// declare module 'dayjs'
// declare module 'vue-router'
// declare module 'element-plus'
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'crypto-js'
declare module 'crypto-js/enc-base64'
declare module 'crypto-js/hmac-sha512'
declare module 'vue-img-cutter'
declare module 'axios'
declare module 'vite-plugin-eslint'
declare module 'decimal'
declare module 'mathjs'
declare module 'nanoid'
// declare module 'br-dionysus'
declare module 'colord'
declare module 'colord/plugins/names'
declare module 'colord/plugins/mix'
declare module 'qrcode'
declare module 'archiver'
declare module '@aacassandra/vue3-progressbar'

/**
 * 下拉选项
 * @template TValue 标签类型，默认为 string | number | boolean
 * @template TLabel 值类型，默认为 string | number
 */
declare interface Option<
  TValue = string | number | boolean | any,
  TLabel = string | number | any
> {
  /** 选项的标签，若不设置则默认与value相同 */
  label?: TLabel;
  /** 选项的值 */
  value: TValue;
  /** 是否禁用该选项 */
  disabled?: boolean;
  /** 子级 */
  children?: Option<TValue, TLabel>[] | null;
  [propName: string]: any;
}

declare type OptionKeySuffix = 'Options' | 'Map';
declare type OptionsKeys = `${string}${OptionKeySuffix}`;

/** 下拉选项及枚举映射集合 */
declare type Filter<T extends OptionsKeys[] = any> = {
  [K in T[number]]: {
    value: Option[]
  }
} & {
  [key: OptionsKeys]: {
    value: Option[]
  }
}

/** 表头 */
declare interface TableTitle<T extends Record<string, any> = any> {
  /** 显示的标题 */
  label: string;
  /** 字段名称 对应列内容的字段名， 也可以使用 property属性 */
  prop: T extends Record<string, any> ? keyof T : string;
  /** 对齐方式 */
  align?: 'right' | 'left' | 'center';
  /** 对应列的宽度 */
  width?: number | string;
  /** 对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 */
  minWidth?: number | string;
  /** 列的 className */
  className?: string;
  /** 当前列标题的自定义类名 */
  labelClassName?: string;
  /** 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 */
  sortable?: boolean;
  /** 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 */
  sortBy?: (row: any, index: number) => string | string[];
  /** 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 */
  sortOrders?: ('ascending' | 'descending' | null)[];
  /** 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。 */
  filters?: {
    text: string | number;
    value: string | number;
  }[];
  /** 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 */
  filterMethod?: Function;
  /** 表头对齐方式， 若不设置该项，则使用表格的对齐方式 */
  headerAlign?: 'left' | 'center' | 'right';
  /** 列是否固定在左侧或者右侧。 true 表示固定在左侧 */
  fixed?: true | 'left' | 'right';
  /** 是否允许批改 */
  isBatchEdit?: boolean;
  /** 是否合计(默认true) */
  isSummary?: boolean;
}

declare type PathString = `/${string}`;
declare type CapitalizedString = `${Capitalize<string>}`;
declare type BoxClassName = `j-${string}`;
/**
 * 模块配置
 * @template TTableConfigKey 额外的列表表格配置key(要求要有唯一性)
 */
declare type ConstantsType<TTableConfigKey extends string[] = []> = {
  /** 命名空间 */
  namespace?: string;
  /** 列表页面 */
  pathList: PathString;
  /** 新增页面 */
  pathAdd: PathString;
  /** 编辑页面 */
  pathEdit: PathString;
  /** 详情页面 */
  pathInfo: PathString;
  /** 列表表格配置key(要求要有唯一性) */
  listPageTableConfigKey: CapitalizedString;
  /** 列表表格配置名(文字描述) */
  listPageTableConfigKeyName: string;
  /** 列表表格子表配置key(要求要有唯一性) */
  listPageTableInfoConfigKey?: CapitalizedString;
  /** 列表box的class名(要求要有唯一性) */
  listPageBoxClassName: BoxClassName;
  /** 列表筛选配置key(要求要有唯一性) */
  listPageFormInlineKey: CapitalizedString;
  /** 表单box的class名(要求要有唯一性) */
  formPageBoxClassName: BoxClassName | '';
  /** 表格列配置 */
  listPageTableTitle: TableTitle[];
} & {
  /** 额外的列表表格配置key(要求要有唯一性) */
  [K in TTableConfigKey[number]]?: CapitalizedString;
}
/** 模块配置(选单模块) */
declare interface SelectConstantsType {
  /** 表格配置key(要求要有唯一性) */
  tableConfigKey: CapitalizedString;
  /** 表格配置名(文字描述) */
  tableConfigKeyName: string;
  /** box的class名(要求要有唯一性) */
  boxClassName: BoxClassName;
  /** 表格的class名(要求要有唯一性) */
  tableClassName: BoxClassName;
  /** 筛选配置key(要求要有唯一性) */
  inlineKey: CapitalizedString;
  /** 表格列配置 */
  selectTableTitle: TableTitle[];
}
/** 模块配置(选单模块双表模式) */
declare interface SelectDoubleTableConstantsType {
  /** 标题 */
  title: string;
  top: {
    /** 列表表格配置key(要求要有唯一性) */
    listPageTableConfigKey: CapitalizedString;
    /** 列表表格配置名(文字描述) */
    listPageTableConfigKeyName: string;
    /** 列表box的class名(要求要有唯一性) */
    listPageBoxClassName: BoxClassName;
    /** 表格列配置 */
    listPageTableTitle: TableTitle[];
  },
  bottom: {
    /** 列表表格配置key(要求要有唯一性) */
    listPageTableConfigKey: CapitalizedString;
    /** 列表表格配置名(文字描述) */
    listPageTableConfigKeyName: string;
    /** 列表box的class名(要求要有唯一性) */
    listPageBoxClassName: BoxClassName;
    /** 表格列配置 */
    listPageTableTitle: TableTitle[];
  }
}

/** 表格粘贴 */
declare interface PasteAction<T extends Record<string, any> = any, AttItem = string> {
  /** 粘贴数据 */
  arr: AttItem[];
  /** 粘贴列prop */
  editColumn: string;
  /** 粘贴行的数据 */
  editRow: { value: T };
  /** 粘贴行的索引 */
  rowIndex: number;
}

declare interface MenuDataItemType {
  id: number | string;
  pid: number | string;
  name: string;
  code: string;
  path: string;
  title: string;
  children: MenuDataItemType[];
  icon: string;
  isBtn: boolean;
  isHid: boolean;
  appId: number | null | string;
}
/** 本地菜单数据 */
declare type MenuDataType = MenuDataItemType[]

declare interface AppDataItemType {
  id: string;
  name: string;
  code: string;
}
/** 本地应用数据 */
declare type AppDataType = AppDataItemType[]

/** 数组元素 */
declare type ArrayElement<T> = T extends (infer U)[] ? U : T;

/** 粘贴事件 */
declare type PasteData<T = string> = (data: {
    /** 粘贴行的行数据 */
    editRow: Record<string, any>,
    /** 粘贴列的列名 */
    editColumn: T,
    /** 粘贴的数据 */
    arr: Array<string | number>,
    /** 起始行 */
    rowIndex: number,
  },
  tableData?: Array<Record<string, any>>) => void;

/** 合并多个类型，后面的类型会覆盖前面类型的同名属性 */
type MergeAll<Types extends any[]> = Types extends [infer First, ...infer Rest]
  ? Rest extends []
    ? First
    : Override<First, MergeAll<Rest>>
  : {};
