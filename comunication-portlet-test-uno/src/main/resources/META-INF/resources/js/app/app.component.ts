/* Dependencies */
import { Component, OnInit, ApplicationRef } from '@angular/core';

/* Liferay instance */
declare const Liferay: any;

/* Angular component decorator */
@Component({
	selector: 'app',
	templateUrl: '/o/comunication-portlet-test-uno/js/app/app.html'
})

export class AppComponent implements OnInit {

	/* Variables */
	showInput: boolean = true;
	text: string;

	/* Component constructor */
	constructor(
		private applicationRef: ApplicationRef
	) { }

	/* Angular Lifecycle */
	ngOnInit() {
		/* Liferay events */
		Liferay.on('onToggleComunicationPortletTestDosEvent', () => {
			this._onToggleEvent();
		});
	}

	/* Component public functions */
	shareData() {
		// Data to share
		let sharedData = {
			sharedText: this.text
		}
		// Fire event
		Liferay.fire('onChangeLabelComunicationPortletTestUnoEvent', sharedData);
	}

	/* Component private functions */
	_onToggleEvent() {
		this.showInput = !this.showInput;

		/**
		 * Liferay stops the propagation of the event. 
		 * We have to force change detection, so that component property values 
		 * that have changed get propagated to the DOM 
		 */
		this._propagateEventToDOM();
	}

	_propagateEventToDOM() {
		this.applicationRef.tick();
	}
}