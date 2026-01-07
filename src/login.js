import React, { useState } from 'react'; // react라는 기본 개발 도구와 useState 기억력 도구를 가져옴
function Login() { // Login 함수 설정
    const [id, setId] = useState("");
    const [password, setPassword] = useState(""); // const [값(이름), 값을 바꾸는 함수]

    const handleLogin = (e) => {
        e.preventDefault(); //새로고침을 막음 (리액트의 특징을 죽임)
        console.log('ID 입력:','id', 'PASSWORD 입력:','password');
        alert('로그인 시도: ${id}');
    }
    return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ margin: '10px', padding: '10px' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: '10px', padding: '10px' }}
          />
        </div>
        <button 
            type="submit" 
            style={{ padding: '10px 20px', backgroundColor: 'skyblue', border: 'none', cursor: 'pointer' }}
        >
          로그인 하기
        </button>
      </form>
    </div>
  );
}

export default Login;