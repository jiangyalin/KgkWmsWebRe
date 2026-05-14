import LoginBg from '@pages/login/components/LoginBg'
import styles from './styles/login.module.scss';
import logoImg from './../../assets/login/logo-icon.png';
import { Form, Input, Select, Checkbox, Button } from '@arco-design/web-react';
import { useLoginForm } from '@pages/login/hooks/useLoginForm';

const Option = Select.Option;

export const LoginPage = () => {
  const { accList } = useLoginForm();

  return (
    <div className={styles.loginBox}>
      <div className={styles.bg}>
        <LoginBg
          themeColor={'#646CFF'}
          darkTheme={false}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.darkDiv}></div>
        <div className={styles.tt}>
          <img className={styles.logo} src={logoImg} />
          <p className={styles.p}>纪州喷码WMS</p>
        </div>
        <div className={styles.sn}>密码登录</div>
        <Form autoComplete='off'>
          <div className={styles.ct}>
            <Input className={styles.it} placeholder='请输入账号' />
            <Input className={styles.it} placeholder='请输入密码' />
            <div className={`${styles.mySelects} ${styles.m2}`}>
              <Select
                className={styles.noBr}
                placeholder='请选择账套'
              >
                {accList.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
            <Checkbox className={styles.cbx}>记住密码</Checkbox>
            <Button className={styles.btn} shape='round' type='primary'>登录</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
