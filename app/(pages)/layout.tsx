import Navbar from '../components/Navbar';
import { CurrentDataProvider } from '../providers/CurrentDataProvider';
import { DropdownToggleProvider } from '../providers/ToggleProvider';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100dvh-4rem)]">
      <CurrentDataProvider>
        <DropdownToggleProvider>
          <Navbar>
            <main className="mt-[4.5rem] md:mt-0 md:pt-16">{children}</main>
          </Navbar>
        </DropdownToggleProvider>
      </CurrentDataProvider>
    </div>
  );
}
