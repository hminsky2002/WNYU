import Navbar from '../components/Navbar';
import { CurrentDataProvider } from '../providers/CurrentDataProvider';
import { DropdownToggleProvider } from '../providers/ToggleProvider';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CurrentDataProvider>
        <DropdownToggleProvider>
          <Navbar>
            <main className="mt-24">{children}</main>
          </Navbar>
        </DropdownToggleProvider>
      </CurrentDataProvider>
    </div>
  );
}
