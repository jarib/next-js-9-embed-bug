import Head from "next/head";
import CodeFragment from "../components/CodeFragment";

const infogramCode = `
  <div class="infogram-embed" data-id="cd6e1aca-dfd9-4ce4-9231-91d9be0f72d9" data-type="interactive" data-title="Fig. 1 - Trade openness"></div>
  <script>!function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");</script>
`;

export default () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>embed bug</title>

        <script id="some-external-script-i-need-to-load" />
        {/* comment out above script el to see a working version */}
      </Head>

      <div>See console for error</div>

      <CodeFragment html={infogramCode} />
    </>
  );
};
