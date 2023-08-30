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
      return (
        <div>
          <a href="http://musinsa-price-tracker.com/api/oauth/login/google?redirect_url=http://musinsa-price-tracker.com">
            <button>Google Login</button>
          </a> <br/>
          
          <a href="http://musinsa-price-tracker.com/api/oauth/login/kakao?redirect_url=http://musinsa-price-tracker.com">
            <button>Kakao Login</button>
          </a> <br/>
          
          <a href="http://musinsa-price-tracker.com/api/oauth/login/naver?redirect_url=http://musinsa-price-tracker.com">
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
