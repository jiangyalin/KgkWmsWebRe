import { PageShell } from '@shared/components/page-shell';

export function HomePage() {
  return (
    <PageShell
      badge="React + TypeScript"
      title="项目已经按你的目录结构初始化好了"
      description="当前是一个干净的 Vite + React + TypeScript 基础骨架，保留了 app、pages、layouts、modules、shared 等分层，后面可以直接往业务模块里扩展。"
    />
  );
}
