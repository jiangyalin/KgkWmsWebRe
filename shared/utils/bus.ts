import mitt from 'mitt'

type Events = {
  /** 跳转并关闭 */
  jumpAndClose: string | { path: string, query: Record<string, any> };
  /** 跳转并更新 */
  jumpAndUpdate: string;
  /** 页面更新 */
  pageUpdate: any;
  returnMoreoverCloseTabPage: string;
  /** 关闭指定路径页面 */
  closePath: string;
  /** 刷新页面 */
  refreshPage: any;
  /** 关闭标签页 */
  close: string[];
  /** 切换菜单模式 */
  switchMenuMode: string;
  /** 全局加载状态 */
  loading: boolean;
  /** 全局进度条(开始) */
  progressBarStart: any;
  /** 全局进度条(完成) */
  progressBarEnd: any;
}
const bus = mitt<Events>()

export default bus
