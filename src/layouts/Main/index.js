import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Header from "../../components/Header";
import Home from "../../pages/Home";
import "./main.less";

const { Content } = Layout;

function Main() {

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  const resizeFunction = () => {
    if (window.innerWidth <= 425) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <Layout className="main-layout">
      <Layout>
        <Header isMobile={isMobile} />
        <Content>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home isMobile={isMobile} />}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
