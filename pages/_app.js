import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { useRouter } from 'next/router';
import * as ga from 'next/router';

//components
import Layout from '../components/layout';

//styles
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

// <script async src="https://www.googletagmanager.com/gtag/js?id=G-LF1L5DCKBY"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-LF1L5DCKBY');
// </script>

const WalletConnectionProvider = dynamic(
	() =>
		import('../components/walletConnectionProvider/index').then(
			(WalletConnectionProvider) => WalletConnectionProvider
		),
	{
		ssr: false,
	}
);

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=G-LF1L5DCKBY`}
			/>

			{/* <Script id='my-script'>{`console.log('Hello world!');`}</Script> */}

			<Script strategy='afterInteractive' id='my-script'>
				{`
         window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-LF1L5DCKBY');
        `}
			</Script>
			<WalletConnectionProvider>
				<WalletModalProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</WalletModalProvider>
			</WalletConnectionProvider>
		</>
	);
}

export default MyApp;
