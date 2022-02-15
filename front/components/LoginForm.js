import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd'
import Link from 'next/link';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onChangeId = useCallback(() => {
        setId(e.target.value);
    }, []);

    const onChangePwd = useCallback(() => {
        setPwd(e.target.value);
    }, []);

    return (
        <Form>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br/>
                <Input name='user-id' value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor='user-password' >비밀번호</label>
                <Input name='user-password' type='password' value={pwd} onChange={onChangePwd} required />
            </div>
            <div>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    );
}

export default LoginForm;