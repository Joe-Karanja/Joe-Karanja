import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, startWith } from 'rxjs/operators';


@Component({
    selector: 'app-breadcrumb',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './breadcrumb.component.html',
    styleUrls:['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

    public pageTitle: string;
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];

    constructor(
                public router: Router,
                public activatedRoute: ActivatedRoute,
                public title: Title) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = '';
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                    console.log("bread name", breadcrumb.name);
                    
                });
                // this.title.setTitle(this.settings.name + this.pageTitle);
            }
        });
    }

    parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                const url = urlSegments.map(urlSegment => {
                    console.log("URL", urlSegment.path);
                    
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

     public closeSubMenus() {
        const menu = document.querySelector('#menu0');
        if (menu) {
            for (let i = 0; i < menu.children.length; i++) {
                const child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    }
}