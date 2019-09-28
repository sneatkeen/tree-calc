import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../store/withStore';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
        <style global={global ? 1 : 0}>
          {`
            :root {
              --mono-font: SFMono-Regular,
                Consolas,
                Liberation Mono,
                Menlo,
                Courier,
                monospace;
              --sys-font: -apple-system,
                BlinkMacSystemFont,
                Segoe UI,
                Roboto,
                Helvetica,
                Arial,
                sans-serif,
                Apple Color Emoji,
                Segoe UI Emoji,
                Segoe UI Symbol;
              
              /* Font variables */
              --font-base-size: 19px;
              --text-scale-ratio: 1.25;
              --text-xxs: .512em;
              --text-xs: .64em;
              --text-sm: .8em;
              --text-md: 1em;
              --text-lg: 1.25em;
              --text-xl: 1.5625em;
              --text-xxl: 1.95em;
              --text-xxxl: 2.55em;

              /* Colors */
              --black: #322931;
              --orange: #fdcc59;
              --kiwi-green: #00A991;
              --bg-grey: #F5F7F9;
              --accent-color: #6a68f6;
              --accent-color-dark: #5553e7;
            }

            html {
              line-height: 1.15;
              -webkit-text-size-adjust: 100%;
            }
            
            * {
              box-sizing: border-box;
            }
            
            body {
              margin: 0;
              padding: 0;
              min-width: 100vw;
              min-height: 100vh;
              font-family: var(--sys-font);
              color: var(--black);
              line-height: 1.55;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              counter-reset: topic;
              background: var(--bg-grey);
            }

            main {
              display: block;
            }

            h1 {
              font-size: 2em;
              font-weight: 900;
              margin: 0 0 .67em 0;
            }
            .text-xxs {
              font-size: var(--text-xxs);
              line-height: 1.65;
              margin-bottom: var(--text-xs);
            }
            
            h6,
            .text-xs {
              font-size: var(--text-xs);
              line-height: 1.65;
              margin-bottom: var(--text-sm);
            }
            
            h5,
            .heading-sm,
            .text-sm {
              font-size: var(--text-sm);
              margin-bottom: var(--text-md);
            }
            
            .text-md {
              font-size: var(--text-md);
              margin-bottom: var(--text-lg);
            }
            
            h4,
            .text-lg,
            .minitopic {
              font-size: var(--text-lg);
              line-height: 1.4;
              margin-bottom: var(--text-xl);
            }
            
            h4,
            h4.minitopic {
              margin-bottom: calc(var(--text-xl) / 1.4);
            }
            
            h2,
            h3,
            .text-xl,
            .subtopic {
              font-size: var(--text-xl);
              line-height: 1.33;
              margin-bottom: var(--text-xxl);
            }
            h2,
            h3,
            h2.subtopic,
            h3.subtopic {
              margin-bottom: calc(var(--text-xxl) / 1.33);
            }
            
            h1,
            .text-xxl,
            .topic {
              font-size: var(--text-xxl);
              line-height: 1.25;
              margin-bottom: var(--text-xxxl);
            }
            h1,
            h1.topic {
              margin-bottom: calc(var(--text-xxl) / 1.25);
            }
            
            .text-xxxl {
              font-size: var(--text-xxxl);
              line-height: 1.15;
              margin-bottom: calc(var(--text-xxxl) / 1.15);
            }
            
            .text-indent {
              text-indent: var(--text-md);
            }
            .topic.oh.text-indent {
              text-indent: 0;
            }
            .minitopic.oh.text-indent {
              text-indent: var(--text-xxl);
            }
            
            
            hr.fullwidth {
              display: block;
              position: relative;
              width: 100vw;
              height: 0;
              margin: 0 0 var(--text-xl) -50vw;
              left: 50%;
              border: none;
              border-bottom: 2px dotted rgba(0, 0, 0, .1);
            }
            
            
            .text-all-caps {
              text-transform: uppercase;
              font-weight: 400;
              letter-spacing: .25em;
            }
            
            .flex {
              display: flex;
            }

            .flex-row {
              flex-direction: row;
            }

            .flex-col {
              flex-direction: column;
            }

            .flex-cc {
              justify-content: center;
              align-items: center;
            }

            .flex-lc {
              justify-content: flex-start;
              align-items: center;
            }

            .flex-rc {
              justify-content: flex-end;
              align-items: center;
            }
            .flex-sac {
              justify-content: space-around;
              align-items: center;
            }

            .flex-sbc {
              justify-content: space-between;
              align-items: center;
            }
            .flex-sec {
              justify-content: space-evenly;
              align-items: center;
            }
            .flex-ct {
              justify-content: center;
              align-items: flex-start;
            }

            .flex-lt {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .flex-rt {
              justify-content: flex-end;
              align-items: flex-start;
            }
            .flex-sat {
              justify-content: space-around;
              align-items: flex-start;
            }

            .flex-sbt {
              justify-content: space-between;
              align-items: flex-start;
            }
            .flex-set {
              justify-content: space-evenly;
              align-items: flex-start;
            }
            .flex-cb {
              justify-content: center;
              align-items: flex-end;
            }

            .flex-lb {
              justify-content: flex-start;
              align-items: flex-end;
            }

            .flex-rb {
              justify-content: flex-end;
              align-items: flex-end;
            }
            .flex-sab {
              justify-content: space-around;
              align-items: flex-end;
            }

            .flex-sbb {
              justify-content: space-between;
              align-items: flex-end;
            }
            .flex-seb {
              justify-content: space-evenly;
              align-items: flex-end;
            }

          `}
        </style>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
