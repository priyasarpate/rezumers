// import { FormProvider } from ".././components/context/index";
import  FormProvider  from "../components/context/index";

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;

