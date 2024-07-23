import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="login_bg">
      <div className="login_container">
        <div className="login_content">
          <h1>Login</h1>
          <form>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <button className="button">
              SEND LOGIN CODE (SEND SMS AND EMAIL)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
