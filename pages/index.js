import Head from "next/head";
import CodeFragment from "../components/CodeFragment";

const scriptLoader = `
  <script>
    !(function() {
      var id = "script-loader";

      if (!document.getElementById(id)) {
        var firstScriptEl = document.getElementsByTagName("script")[0];

        var scriptToLoad = document.createElement("script");
        scriptToLoad.async = 1;
        scriptToLoad.id = id;
        scriptToLoad.src = "/script-being-loaded.js";

        firstScriptEl.parentNode.insertBefore(scriptToLoad, firstScriptEl);
      }
    })();
  </script>
`;

const Index = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>embed bug</title>
        <script id="some-external-script-i-need-to-load" />
        {/* comment out above script el to see a working version */}
      </Head>

      <div>See console for error</div>

      <CodeFragment html={scriptLoader} />
    </>
  );
};

export default Index;
