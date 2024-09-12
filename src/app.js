import { FavoritesView } from "./views/favorites/favorites";
import { MaindView } from "./views/main.js/main";

class App {
    routes = [
        { path: "", view: MaindView },
        { path: "#favorites", view: FavoritesView },
    ];
    appState = {
        favorites: []
    };
    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    }
    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
        this.currentView = new view(this.appState);
        this.currentView.render();
    }
}
new App();