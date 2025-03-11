import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const RedirectComponent = () => {
  const history = useHistory();
  const shouldRedirect = true; // 你的逻辑

  useEffect(() => {
    if (shouldRedirect) {
      window.location.href = "https://www.uopensail.com";
    }
  }, [shouldRedirect, history]);

  return <div></div>;
};

export default RedirectComponent;
