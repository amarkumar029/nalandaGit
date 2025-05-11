import { useEffect, useRef } from "react";

const CuratorFeed = ({ username }) => {
  const initialized = useRef(false);
  const feedId = "14466f0d-201b-4b35-90ed-9be5ae6c9e25";
//   const feedId = "8589f1d8-fbba-41fa-a8b8-80305699feb4";

  useEffect(() => {
    if (initialized.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src = `https://cdn.curator.io/published/${feedId}.js`;

    // When script loads completely, call window.CRT.init()
    script.onload = () => {
        if (window.CRT && typeof window.CRT.init === "function") {
          window.CRT.init();
        }
    };

    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      initialized.current = true;
    }

    return () => {
      // Clean up script if component unmounts
      const curatorScript = document.querySelector(`script[src*="${feedId}"]`);
      if (curatorScript) {
        curatorScript.remove();
      }
      initialized.current = false;
    };
  }, []);

  return (
    <div className="feed-container">
      {/* <h2 className="text-xl font-semibold mb-4">{username}'s Feed</h2> */}
      
      <div id="curator-feed-default-feed-layout" className="custom-scroll">
        {/* Curator.io will inject the feed here */}
        <a
          href="https://curator.io"
          target="_blank"
          rel="noopener noreferrer"
          className="crt-logo crt-tag"
        >Loading...</a>
      </div>

      {/* Hide Powered by Curator.io */}
      <style>{`
        #curator-feed-default-feed-layout .crt-logo {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default CuratorFeed;