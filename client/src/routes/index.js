import HomePage from '../pages/HomePage/HomePage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import ProfilePage from '../pages/Profile/ProfilePage'
import AdminPage from '../pages/AdminPage/AdminPage'

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/order',
    page: OrderPage,
    isShowHeader: true
  },
  {
    path: '/products',
    page: ProductsPage,
    isShowHeader: true
  },
  {
    path: '/:type',
    page: TypeProductPage,
    isShowHeader: true
  },
  {
    path: '/sign-in',
    page: SignInPage,
    isShowHeader: false
  },
  {
    path: '/sign-up',
    page: SignUpPage,
    isShowHeader: false
  },
  {
    path: '/product-details',
    page: ProductDetailsPage,
    isShowHeader: true
  },
  {
    path: '/profile-user',
    page: ProfilePage,
    isShowHeader: true
  },
  {
    path: '/system/admin',
    page: AdminPage,
    isShowHeader: false,
    isPrivate: true,
    isAdminOnly: true
  },
  {
    path: '*',
    page: NotFoundPage
  }
]
