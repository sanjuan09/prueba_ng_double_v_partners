import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { NombresService } from '../services/nombres.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreGuard implements CanActivate {

  repos: number = 0;
  login: string = "";

  constructor(
    private router: Router,
    private nService: NombresService,
    private toastr: ToastrService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.repos = route.data['score'];
      this.login = state.root.children[0].params['login'];
      return this.checkRepos();
      
  }

  checkRepos(){
    return this.nService.getUser(this.login).pipe(
      map(datos => {
        if(datos.public_repos > this.repos){
          return true;
        }else{
          this.toastr.error("No se permite consultar el perfil de los usuarios con menos de 150 repositorios publicos");
          return false;
        }
      })
    );
    
  }
  
}
