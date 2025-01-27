// import NotFound from '@/pages/NotFound';
import { routeOptions } from '@/utils/constants'
import { Route, Routes } from 'react-router-dom'
// import SuspenseLoading from './SuspenseLoading'
// import ProtectedRoute from './ProtectedRoute'
// import { useAuth } from '@/hook/useAuth'
// import { routeOptions } from '@/utils/data';
// import { useAppSelector } from '@/hook/useReduxHooks';
// import { RootState } from '@/redux/store';
// import { useIsInternalOrAdminUser } from '@/hook/useShowRegularInternalPage';
// import { normalizeMenuLink } from '@/utils';

const Router = () => {
  // const { keycloakClient } = useAuth()
  // const [realmAccess, setRealmAccess] = useState(keycloakClient?.realmAccess)
  // const { pages: visiblePages, company } = useAppSelector((state: RootState) => state.companyConfig);
  // const activeRoutes = routeOptions.filter(option => visiblePages.regularUsers.includes(normalizeMenuLink(option.path)))
  // const isAdminOrInternalUser = useIsInternalOrAdminUser()
  // const pageLoading = activeRoutes.length === 0 && !company;
  // if (isAdminOrInternalUser) {
  //   const allInternalPages = routeOptions.filter(option => visiblePages.internal.includes(normalizeMenuLink(option.path)));
  //   const newInternalPages = allInternalPages.filter(option => !activeRoutes.some(page => page.id === option.id))
  //   activeRoutes.push(...newInternalPages)
  // }


    
  return (
    <main className='flex-1 flex flex-col'>
        <Routes>
          {/* {routeOptions.map(page => (
            <Route
              key={page.id}
              path={page.path}
              element={
                  <page.component />
              }
            ></Route>
          ))} */}
        </Routes>
    </main>
  )
}

export default Router
