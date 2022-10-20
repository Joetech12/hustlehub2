import Image from 'next/image';
import HeaderLink from '../components/HeaderLink';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Head from 'next/head';
import { getProviders, signIn } from 'next-auth/react';

function Home({ providers }) {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>HustleHub</title>
        <link rel="icon" href="/hustlehub_fav.svg" />
      </Head>

      <div className="">
        <header className="flex justify-between items-center py-4 px-[20px] lg:px-[220px]">
          <div className="relative w-36 h-10">
            <Image src="/hh_logo1.svg" layout="fill" objectFit="contain" />
          </div>
          <div className="flex items-center ">
            {/* sm:divide-x divide-gray-300 */}
            <div className="hidden sm:flex space-x-8 pr-4">
              <HeaderLink Icon={GroupIcon} text="People" />
              <HeaderLink Icon={ExploreIcon} text="Discover" />
              {/* <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" /> */}
              <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
            </div>

            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <div className="pl-[40px]">
                  <button
                    className="text-green-700 font-semibold rounded-full border border-green-700 px-5 py-1.5 transition-all hover:border-2"
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            ))}
          </div>
        </header>
        <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto mt-[20px] xl:mt-[60px]">
          <div className="space-y-6 xl:space-y-10">
            <h1 className="text-3xl md:text-4xl xl:text-5xl text-green-800/80 max-w-xl !leading-snug pl-4 xl:pl-0 pt-[20px]">
              The No. 1 Hustle Community
            </h1>
            <div className="space-y-4 ">
              <div className="intent">
                <h2 className="text-xl">Search for a job</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Find a person you know</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Learn a new skill</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <p className="text-green-800 pt-[50px] pb-[50px] pl-[20px] text-center xl:text-start">
                Developed by - Ifeanyi Umeh
              </p>
            </div>
          </div>
          <div className="relative xl:absolute order-first w-80 h-80 xl:w-[650px] xl:h-[650px] xl:top-14 right-5 xl:right-[100px]">
            <Image src="/work_bkg.svg" layout="fill" priority />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
