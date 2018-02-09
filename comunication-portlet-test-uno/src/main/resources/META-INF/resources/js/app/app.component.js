var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* Angular component decorator */
    var AppComponent = (function () {
        /* Component constructor */
        function AppComponent(applicationRef) {
            this.applicationRef = applicationRef;
            /* Variables */
            this.showInput = true;
            console.log(Liferay);
        }
        /* Angular Lifecycle */
        AppComponent.prototype.ngOnInit = function () {
            var _this = this;
            /* Liferay events */
            Liferay.on('onToggleComunicationPortletTestDosEvent', function () {
                console.log('entro evento de portlet test uno');
                _this._onToggleEvent();
            });
        };
        /* Component public functions */
        AppComponent.prototype.shareData = function () {
            console.log('Boton test uno');
            // Data to share
            var sharedData = {
                sharedText: this.text
            };
            // Fire event
            Liferay.fire('onChangeLabelComunicationPortletTestUnoEvent', sharedData);
        };
        /* Component private functions */
        AppComponent.prototype._onToggleEvent = function () {
            this.showInput = !this.showInput;
            /**
             * Liferay stops the propagation of the event.
             * We have to force change detection, so that component property values
             * that have changed get propagated to the DOM
             */
            this._propagateEventToDOM();
        };
        AppComponent.prototype._propagateEventToDOM = function () {
            this.applicationRef.tick();
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/comunication-portlet-test-uno/js/app/app.html'
        }),
        __metadata("design:paramtypes", [core_1.ApplicationRef])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map