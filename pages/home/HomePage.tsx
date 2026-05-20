import {
  Button,
  Input,
  Space,
  Table,
  Tag,
  Typography,
} from '@arco-design/web-react';
import {
  IconApps,
  IconFile,
  IconHome,
  IconMenuFold,
  IconNotification,
  IconPlus,
  IconSearch,
  IconSettings,
  IconStorage,
  IconSwap,
  IconUser,
} from '@arco-design/web-react/icon';

import styles from './styles/home.module.scss';

const workItems = [
  { label: '待收货单', value: '12', tone: 'blue' },
  { label: '待上架任务', value: '8', tone: 'green' },
  { label: '待拣货单', value: '23', tone: 'orange' },
  { label: '待复核出库', value: '5', tone: 'red' },
];

const quickActions = [
  { icon: <IconPlus />, title: '新建入库单', description: '采购到货、其他入库' },
  { icon: <IconSwap />, title: '库存调拨', description: '库区、货位间转移' },
  { icon: <IconStorage />, title: '库存查询', description: '按物料、批次、货位检索' },
  { icon: <IconFile />, title: '单据审核', description: '处理待审批业务单据' },
];

const documents = [
  {
    key: '1', code: 'RK-20260518-0012', type: '采购入库', owner: '张伟', status: '待上架', time: '10:42',
  },
  {
    key: '2', code: 'CK-20260518-0048', type: '销售出库', owner: '李娜', status: '待复核', time: '10:16',
  },
  {
    key: '3', code: 'DB-20260518-0007', type: '库存调拨', owner: '王强', status: '执行中', time: '09:58',
  },
  {
    key: '4', code: 'PD-20260518-0003', type: '盘点任务', owner: '赵敏', status: '未开始', time: '09:21',
  },
];

const columns = [
  {
    title: '单据编号',
    dataIndex: 'code',
  },
  {
    title: '业务类型',
    dataIndex: 'type',
  },
  {
    title: '负责人',
    dataIndex: 'owner',
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (status: string) => <Tag color="arcoblue">{status}</Tag>,
  },
  {
    title: '更新时间',
    dataIndex: 'time',
  },
];

export function HomePage() {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>W</div>
          <div>
            <div className={styles.brandName}>KGK WMS</div>
            <div className={styles.brandSub}>仓储管理系统</div>
          </div>
        </div>

        <nav className={styles.nav}>
          <button type="button" className={styles.navItemActive}>
            <IconHome />
            工作台
          </button>
          <button type="button" className={styles.navItem}>
            <IconStorage />
            库存管理
          </button>
          <button type="button" className={styles.navItem}>
            <IconSwap />
            出入库业务
          </button>
          <button type="button" className={styles.navItem}>
            <IconFile />
            单据中心
          </button>
          <button type="button" className={styles.navItem}>
            <IconSettings />
            系统设置
          </button>
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <Space size={12}>
            <Button icon={<IconMenuFold />} />
            <Input
              className={styles.search}
              prefix={<IconSearch />}
              placeholder="搜索单据、物料、供应商"
              allowClear
            />
          </Space>
          <Space size={12}>
            <Button icon={<IconNotification />} />
            <Button icon={<IconUser />}>管理员</Button>
          </Space>
        </header>

        <section className={styles.hero}>
          <div>
            <Typography.Title heading={3} className={styles.title}>
              今日工作台
            </Typography.Title>
            <Typography.Text className={styles.subtitle}>
              聚合当前待处理业务、常用入口和最近单据，方便仓库人员快速进入操作。
            </Typography.Text>
          </div>
          <Button type="primary" icon={<IconPlus />}>
            新建业务单据
          </Button>
        </section>

        <section className={styles.workGrid}>
          {workItems.map((item) => (
            <button type="button" className={styles.workItem} key={item.label}>
              <span className={styles.workLabel}>{item.label}</span>
              <span className={styles.workValue}>{item.value}</span>
              <span className={styles.workHint}>点击进入处理队列</span>
            </button>
          ))}
        </section>

        <section className={styles.contentGrid}>
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <Typography.Title heading={5}>快捷操作</Typography.Title>
              <Button type="text" icon={<IconApps />}>全部应用</Button>
            </div>
            <div className={styles.actionGrid}>
              {quickActions.map((action) => (
                <button type="button" className={styles.actionItem} key={action.title}>
                  <span className={styles.actionIcon}>{action.icon}</span>
                  <span>
                    <span className={styles.actionTitle}>{action.title}</span>
                    <span className={styles.actionDesc}>{action.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <Typography.Title heading={5}>业务提醒</Typography.Title>
              <Button type="text">查看全部</Button>
            </div>
            <ul className={styles.noticeList}>
              <li>3 张采购入库单超过 2 小时未上架</li>
              <li>线边仓 A03 货位存在低库存物料</li>
              <li>今日盘点任务需要在 18:00 前完成</li>
              <li>2 张销售出库单等待主管复核</li>
            </ul>
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <Typography.Title heading={5}>近期业务单据</Typography.Title>
            <Button type="text">进入单据中心</Button>
          </div>
          <Table
            border={false}
            columns={columns}
            data={documents}
            pagination={false}
          />
        </section>
      </main>
    </div>
  );
}
