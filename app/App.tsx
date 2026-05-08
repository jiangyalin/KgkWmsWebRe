import { DefaultLayout } from '@layouts/default-layout';
import { HomePage } from '@pages/home-page';

export function App() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}
