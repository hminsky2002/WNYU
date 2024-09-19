import Navbar from '../components/Navbar';
import { CurrentDataProvider } from '../providers/CurrentDataProvider';
import { DropdownToggleProvider } from '../providers/ToggleProvider';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <CurrentDataProvider>
        <DropdownToggleProvider>
          <Navbar>
            <main className="pt-20">{children}</main>
          </Navbar>
        </DropdownToggleProvider>
      </CurrentDataProvider>
    </div>
  );
}
