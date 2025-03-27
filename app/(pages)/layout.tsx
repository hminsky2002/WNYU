import { FOOTER_QUERYResult } from '@/sanity.types';
import { FOOTER_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/client';
import Navbar from '../components/Navbar';
import { CurrentDataProvider } from '../providers/CurrentDataProvider';
import { DropdownToggleProvider } from '../providers/ToggleProvider';
import Footer from '../components/Footer';

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footer = await sanityFetch<FOOTER_QUERYResult>({
    query: FOOTER_QUERY,
    tags: ['footer'],
  });

  return (
    <div className="h-[calc(100dvh-4rem)]">
      <CurrentDataProvider>
        <DropdownToggleProvider>
          <Navbar>
            <main className="mt-[4.5rem] md:mt-0 md:pt-16">{children}</main>
          </Navbar>
          <Footer footer={footer} />
        </DropdownToggleProvider>
      </CurrentDataProvider>
    </div>
  );
}
