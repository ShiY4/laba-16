import {FC, useState} from 'react';
import { TextFiel } from '../../components';
import { Button } from '../../components';
import { WidgetLayout } from '../../components/layouts';
import './loginPageStyle.scss';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../constants/commonConstants';
import { AuthApi } from '../../api';

export const LoginPage: FC = () =>{
    const [login, setlogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()
    const {signIn} = AuthApi;
    const loginChangedHandler = (value: string) =>{
        setlogin(value);
};

const passwordChangedHandler = (value: string) =>{
    setPassword(value);
};

const loginHandler = () => {
    signIn({login, password})
        .then((respData) => {
            if(respData.role === 'user'){
                navigate(`${RoutesPath.NoPermissions}`);
            } else{
                navigate(`${RoutesPath.Departments}`);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

const toRegistrationHandler = () => {
    navigate(RoutesPath.Registration)
};

return (
        <WidgetLayout>
            <div className='login-page_form'>
                <h3 className='login-page_title'>Вход</h3>

                <div className='login-page_fields'>
                        <TextFiel labelText="логин" value= {login} type = "text" onChange = {loginChangedHandler}/>
                        <TextFiel labelText="пароль" value= {password} type = "password" onChange = {passwordChangedHandler}/>
                </div>
                <div className='login-page_actions'>
                    <Button text='Войти' onClick={loginHandler} type="primary" />
                    <Button text='Зарегистрироваться' onClick={toRegistrationHandler} type="secondary"/>
                </div>
            </div>        
        </WidgetLayout>
    );
};