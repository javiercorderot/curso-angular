import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

export interface ComponentCanDeactivate{
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}


@Injectable({
  providedIn: 'root'
})
export class IsDataSavedGuard implements CanDeactivate<EditarUsuarioComponent> {
  canDeactivate(
    component: EditarUsuarioComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
  
}
