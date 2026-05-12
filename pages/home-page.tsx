import { PageShell } from '@shared/components/page-shell';

export function HomePage() {
  return (
    <PageShell
      badge="Home Route"
      title="首页路由已经接入"
      description="当前访问 /home 会进入这个页面。后面你可以把工作台、仪表盘或者业务首页模块继续挂到这里。"
    />
  );
}
