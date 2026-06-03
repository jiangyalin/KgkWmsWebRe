import { useState } from 'react';
import { nanoid } from 'nanoid';
import api from '@/services/generated/api';
import { Message } from '@arco-design/web-react';
import { GetSysuserUserauthdataResType } from '@/services/generated/api/sysuser';
import privateCookies from '@shared/utils/privateCookies';
import crypto from '@shared/utils/crypto';
import traverseTree from '@shared/utils/traverseTree';
import privateLocalStorage from '@shared/utils/privateLocalStorage';
import { useNavigate } from 'react-router-dom';
import decode from '@shared/utils/decode';

export const useLoginForm = () => {
  const [accList, setAccList] = useState<Option[]>([]);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [dialogVisible206, setDialogVisible206] = useState<boolean>(false);
  const [msg206, setMsg206] = useState<string>('');

  const navigate = useNavigate();

  interface Login {
    account: string // 账号
    password: string // 密码
    sAccId?: string // 账套
    remember: boolean // 记住密码
    SystemType: number // 登录身份
    uuid: string
    ForceLogin: boolean // 强制登录
  }
  const [ruleForm, setRuleForm] = useState<Login>(() => {
    const remember = privateCookies.get('remember') === 'true';
    return {
      account: remember ? (privateCookies.get('account') || '') : '',
      password: remember ? (decode(privateCookies.get('password') || '') || '') : '',
      sAccId: undefined,
      remember,
      SystemType: 1,
      uuid: nanoid(),
      ForceLogin: false,
    };
  });

  const updateField = <K extends keyof Login>(key: K, value: Login[K]) => {
    setRuleForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getAccList = async () => {
    if (!ruleForm.account || !ruleForm.password) {
      Message.warning('请先输入账号/密码');
      return;
    }

    const res = await api.login.postLoginAcclist({
      cUserId: ruleForm.account,
      cPassWord: ruleForm.password,
      SystemType: 1,
    });
    setAccList(res.data.map((item) => ({
      label: item.sAccName as string,
      value: item.sAccId as string,
    })));
  };

  type MenusItemType = NonNullable<GetSysuserUserauthdataResType['data']['Menus']>[number];

  const login = async () => {
    setBtnLoading(true);
    try {
      const res = await api.login.postLoginDologin({
        cUserId: ruleForm.account,
        cPassWord: ruleForm.password,
        sAccId: ruleForm.sAccId ?? '',
        SystemType: ruleForm.SystemType,
        uuid: nanoid(),
        ForceLogin: ruleForm.ForceLogin,
      });

      if (res.code === 206) {
        setDialogVisible206(true);
        setMsg206(res.msg ?? '');
        return;
      }
      privateCookies.set('token', res.data.accessToken);

      privateCookies.set('nickName', res.data.cUserName);
      privateCookies.set('cDepCode', res.data.cDepCode);
      privateCookies.set('cDepName', res.data.cDepName);
      privateCookies.set('userId', res.data.cUserId);
      privateCookies.set('cPsnNum', res.data.cPsn_Num);
      privateCookies.set('LoginSys', res.data.LoginSys);

      privateCookies.set('account', ruleForm.account);
      privateCookies.set('password', crypto(ruleForm.password));
      privateCookies.set('remember', ruleForm.remember ? 'true' : 'false');
      privateCookies.set('systemType', ruleForm.SystemType);
      privateCookies.set('sAccId', ruleForm.sAccId);
      const userauthdata = await api.sysuser.getSysuserUserauthdata({ appId: '' });
      const treeMap = (tree: MenusItemType[]): MenuDataType => tree.filter((item) => !item.isBtn).filter((item) => item.code !== 'DataDashboard').map((item) => ({
        id: item.id ?? '',
        pid: item.parentId ?? '',
        name: item.code ?? '',
        code: item.code ?? '',
        path: item.path ?? '',
        title: item.title ?? '',
        children: treeMap(item.children || []),
        icon: item.icon ?? '',
        isBtn: item.isBtn ?? false,
        isHid: item.isHid ?? false,
        appId: item.appId ?? '',
      }));
      userauthdata.data.Menus = userauthdata.data.Menus || [];
      if (!userauthdata.data.Menus.length) {
        Message.warning('您没有系统的菜单及权限，请联系管理员');
      }
      const menuData = treeMap((userauthdata.data.Menus || []));

      const AppsData: AppDataType = (userauthdata.data.Apps || []).map((item) => ({
        id: item.Id ?? '',
        code: item.Code ?? '',
        name: item.Name ?? '',
      }));

      // 保存按钮权限
      const menuBtnsPermission = await api.sysuser.getSysuserUserauthbtns();
      const buttonPermissions: string[] = [];
      traverseTree<any>(menuBtnsPermission.data, (item) => {
        buttonPermissions.push(item.Code ?? '');
      });
      try {
        privateLocalStorage.clear();
        // if (res.data.userImg) {
        //   privateLocalStorage.setItem('avatar', config.serverApi + '/' + res.data.userImg)
        // }
        privateLocalStorage.setItem('menuData', JSON.stringify(menuData));
        privateLocalStorage.setItem('AppsData', JSON.stringify(AppsData));
        privateLocalStorage.setItem('buttonPermissions', JSON.stringify(buttonPermissions));
        await api.platconfig.postPlatconfigList().then((platconfigRes) => {
          (platconfigRes.data ?? []).forEach((item) => {
            privateLocalStorage.setItem(item.cKey ?? '', item.cData ?? '');
          });
        });
      } finally {
        navigate('/home');
      }
    } finally {
      setBtnLoading(false);
    }
  };

  const clickYes = () => {
    setDialogVisible206(false);
    setRuleForm({
      ...ruleForm,
      ForceLogin: true,
    });
    login();
  };

  return {
    accList,
    ruleForm,
    getAccList,
    setRuleForm,
    updateField,
    btnLoading,
    dialogVisible206,
    setDialogVisible206,
    msg206,
    login,
    clickYes,
  };
};
