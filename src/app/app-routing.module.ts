import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'root',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    //loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      //import('./profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'orders/:id',
    //loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'products/:id',
    //loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'cart',
    //loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
