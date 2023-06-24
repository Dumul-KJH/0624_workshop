import {useState} from 'react';
import {useRouter} from 'next/router'

//nextjs.

export default function Login() {
    //hook
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const check = () => {
        console.log(email)
        console.log(password)
        console.log('----')
        if(email != "wogh4528@gmail.com"){
            alert('email is not allowed')
            return false
        }
        if(email != "wogh4528@gmail.com"){
            alert('password not ...')
            return false
        }

        router.push('./createMemo')

    }

    return (
      <main>
        login!! page
        <br/><br/>
        <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button onClick={check}>Login</button>
      </main>
    )
  }
  