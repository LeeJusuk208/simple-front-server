import React from 'react';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const params = JSON.parse(urlParams.get('userResponse'));
  console.log(params);

  let LoginElement;
  if(params !== null && params.status === "Login Success"){
    window.localStorage.setItem('userResponse', params)
    LoginElement = () => {
      return (
        <p>{params.email}</p>
      );
    };
  } else {
    LoginElement = () => {
      let google_redirect_path = "http://musinsa-price-tracker.com/api/oauth/login/google?redirect_url=" + window.location.origin;
      let kakao_redirect_path = "http://musinsa-price-tracker.com/api/oauth/login/kakao?redirect_url=" + window.location.origin;
      let naver_redirect_path = "http://musinsa-price-tracker.com/api/oauth/login/naver?redirect_url=" + window.location.origin;
      
      return (
        <div>
          <a href={google_redirect_path}>
            <button>Google Login</button>
          </a> <br/>
          
          <a href={kakao_redirect_path}>
            <button>Kakao Login</button>
          </a> <br/>
          
          <a href={naver_redirect_path}>
            <button>Naver Login</button>
          </a> <br/>
        </div>
      );
    };
  }
  return (
    <div className="App">
      <LoginElement/>
    </div>
  );
}

export default App;
