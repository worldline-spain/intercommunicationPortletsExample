/* Dependencies */
import { Component, OnInit, ApplicationRef } from '@angular/core';

/* Liferay instance */
declare const Liferay: any;

/* Angular component decorator */
@Component({
	selector: 'app',
	templateUrl: '/o/comunication-portlet-test-dos/js/app/app.html'
})

export class AppComponent implements OnInit {

	/* Variables */
	sharedString: string = 'Hi there MC!';


	/* Component constructor */
	constructor(
		private applicationRef: ApplicationRef
	) { }

	/* Angular Lifecycle */
	ngOnInit() {
		/* Liferay events */
		Liferay.on('onChangeLabelComunicationPortletTestUnoEvent', (data: any) => {
			this._onChangeLabelEvent(data.sharedText);
		});
	}

	/* Component public functions */
	shareData() {
		// Fire event
		Liferay.fire('onToggleComunicationPortletTestDosEvent');
	}

	/* Component private functions */
	_onChangeLabelEvent(sharedText: string) {
		this.sharedString = sharedText;

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