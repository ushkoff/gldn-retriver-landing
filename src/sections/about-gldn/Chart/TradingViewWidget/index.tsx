import React, { useEffect, useRef } from 'react';
import { useCheckMobileScreen } from '../../../../hooks';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
    const isMobile = useCheckMobileScreen({ breakpoint: 768 });
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            // @ts-ignore
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            // @ts-ignore
            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_a83b3') && 'TradingView' in window) {
                    // @ts-ignore
                    new window.TradingView.widget({
                        autosize: true,
                        symbol: "UNISWAP:GLDNWETH",
                        interval: "D",
                        timezone: "Etc/UTC",
                        theme: "dark",
                        style: "1",
                        locale: "en",
                        toolbar_bg: "#f1f3f6",
                        enable_publishing: false,
                        allow_symbol_change: true,
                        container_id: "tradingview_a83b3"
                    });
                }
            }
        },
        []
    );

    return (
        <div className='tradingview-widget-container'>
            <div id='tradingview_a83b3' style={{ height: !isMobile ? 673 : 400 }}/>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/symbols/GLDNWETH/?exchange=UNISWAP" rel="noopener" target="_blank"><span className="blue-text">GLDNWETH chart</span></a> by TradingView
            </div>
        </div>
    );
}