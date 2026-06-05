import LoginBg from '@pages/login/components/LoginBg';
import {
  Form, Input, Select, Checkbox, Button, Modal,
} from '@arco-design/web-react';
import { useLoginForm } from '@pages/login/hooks/useLoginForm';
import styles from './styles/login.module.scss';
import logoImg from '../../assets/login/logo-icon.png';

const { Option } = Select;

export function LoginPage() {
  const {
    accList,
    ruleForm,
    getAccList,
    updateField,
    dialogVisible206,
    setDialogVisible206,
    msg206,
    login,
    btnLoading,
  } = useLoginForm();

  return (
    <div className={styles.loginBox}>
      <div className={styles.bg}>
        <LoginBg
          themeColor="#646CFF"
          darkTheme={false}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.darkDiv} />
        <div className={styles.tt}>
          <img
            className={styles.logo}
            src={logoImg}
            alt="KGK WMS"
          />
          <p className={styles.p}>纪州喷码WMS</p>
        </div>
        <div className={styles.sn}>密码登录</div>
        <Form autoComplete="off">
          <div className={styles.ct}>
            <Input
              className={styles.it}
              value={ruleForm.account}
              placeholder="请输入账号"
              onChange={(value) => updateField('account', value)}
            />
            <Input.Password
              className={styles.it}
              value={ruleForm.password}
              placeholder="请输入密码"
              onChange={(value) => updateField('password', value)}
            />
            <div className={`${styles.mySelects} ${styles.m2}`}>
              <Select
                className={styles.noBr}
                placeholder="请选择账套"
                value={ruleForm.sAccId}
                onClick={getAccList}
                onChange={(value) => updateField('sAccId', value)}
              >
                { accList.map((option) => (
                  <Option key={option.value} value={option.value}>
                    { option.label }
                  </Option>
                )) }
              </Select>
            </div>
            <Checkbox
              className={styles.cbx}
              checked={ruleForm.remember}
              onChange={(value) => updateField('remember', value)}
            >
              记住密码
            </Checkbox>
            <Button
              className={styles.btn}
              shape="round"
              type="primary"
              loading={btnLoading}
              onClick={login}
            >
              登录
            </Button>
          </div>
        </Form>
      </div>
      <Modal
        title="温馨提示"
        visible={dialogVisible206}
        onOk={() => setDialogVisible206(false)}
        onCancel={() => setDialogVisible206(false)}
        autoFocus={false}
        focusLock
      >
        <p>{ msg206 }</p>
      </Modal>
    </div>
  );
}
